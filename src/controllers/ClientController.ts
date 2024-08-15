import express from "express";
import { getClients } from "../services/ClientService";

export const getAllClients = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientList.html', { clients: await getClients() });
}