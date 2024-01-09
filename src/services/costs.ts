import httpClient from "@/api/axios";
import { IOptionsData } from "../../@types/types";

export const fetchCostsData = async (): Promise<IOptionsData[]> => {
  try {
    const response = await httpClient.get("/costs");
    return response.data;
  } catch (error) {
    throw error;
  }
};
