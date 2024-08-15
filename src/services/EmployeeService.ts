import axios, {AxiosResponse } from "axios";
import { EmployeeResponse } from "../models/EmployeeResponse";
import { getHeader } from "./AuthUtil";

export const getSalesEmployee = async (token: string): Promise<EmployeeResponse[]> => {

    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/sales", getHeader(token));

        return response.data;
    } catch (e){
        console.log(e);
        throw new Error('Failed to get sales employee');
    }  

}

export const getDeliveryEmployee = async (token: string): Promise<EmployeeResponse[]> => {

    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/delivery", getHeader(token));

        return response.data;
    } catch (e){
        console.log(e);
        throw new Error('Failed to get delivery employee');
    }  

}