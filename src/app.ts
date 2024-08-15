import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";
import { getAllClients } from "./controllers/ClientController";
import { dateFilter } from "./filters/DateFilter";
import { getAllDatabases } from "./controllers/TestController";
import { getAllDeliveryEmployee, getAllSaleEmployee } from "./controllers/EmployeeController";
import { getLoginForm, postLoginForm } from "./controllers/AuthController";
import { UserRole } from "./models/JwtToken";
import { allowRoles } from "./middleware/AuthMiddleware";


const app = express();

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

env.addFilter('date', dateFilter);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/clients', allowRoles ([UserRole.Admin, UserRole.User]), getAllClients);
app.get('/', getAllDatabases);
app.get('/employee/sales', allowRoles([UserRole.Admin]), getAllSaleEmployee);
app.get('/employee/delivery', allowRoles([UserRole.Admin]), getAllDeliveryEmployee);

app.get('/loginForm', getLoginForm);
app.post('/loginForm', postLoginForm);