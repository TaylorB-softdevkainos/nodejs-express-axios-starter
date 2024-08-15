import axios, {AxiosResponse } from "axios";
import { EmployeeResponse } from "../models/EmployeeResponse";

export const getSalesEmployee = async (): Promise<EmployeeResponse[]> => {

    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/sales");

        return response.data;
    } catch (e){
        console.log(e);
        throw new Error('Failed to get sales employee');
    }  

}

export const getDeliveryEmployee = async (): Promise<EmployeeResponse[]> => {

    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/delivery");

        return response.data;
    } catch (e){
        console.log(e);
        throw new Error('Failed to get delivery employee');
    }  

}