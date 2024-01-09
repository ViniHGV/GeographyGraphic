import httpClient from "@/api/axios";
import { IDataBaseV2 } from "../../@types/types";

export const fetchDataFilterApi = async (
  filters: string | any[]
): Promise<IDataBaseV2> => {
  try {
    const response = await httpClient.get(`/filter?${filters}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
