import  express from "express";
import { getSalesEmployee } from "../services/EmployeeService";
import { getDeliveryEmployee } from "../services/EmployeeService";

export const getAllSaleEmployee = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmployeeList.html', {salesEmployee: await getSalesEmployee(req.session.token)});
}

export const getAllDeliveryEmployee = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeList.html', {deliveryEmployee: await getDeliveryEmployee(req.session.token)});
}