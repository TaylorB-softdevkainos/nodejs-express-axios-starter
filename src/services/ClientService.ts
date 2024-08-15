import axios, {AxiosResponse} from "axios";
import { Client } from "../models/Client";
import { getHeader } from "./AuthUtil";

export const getClients = async (token: String): Promise<Client[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/clients", getHeader(token));

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get Clients');
    }
}