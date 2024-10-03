import { IFilter } from "@/types/filter";
import axiosInstance from "./axiosInstance.service";

export function getReportsData(filter:IFilter) {
    return axiosInstance.get('/api/reports', { params: filter });
}