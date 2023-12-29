import httpClient from "@/api/axios";
import { IOptionsData } from "../../types/types";

export const fetchPoliciesData = async (): Promise<IOptionsData[]> => {
  try {
    const response = await httpClient.get("/policy");
    return response.data;
  } catch (error) {
    throw error;
  }
};
