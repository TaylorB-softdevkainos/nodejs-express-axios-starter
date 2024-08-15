import axios, {AxiosResponse} from "axios";
import { Client } from "../models/Client";

export const getClients = async (): Promise<Client[]> => {
    try {
        const response: AxiosResponse = await axios.get("http//localhost:8080/api/clients");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get Clients');
    }
}