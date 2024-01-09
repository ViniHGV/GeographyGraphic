import httpClient from "@/api/axios";
import { IOptionsData } from "../../@types/types";

export const fetchTechsData = async (): Promise<IOptionsData[]> => {
  try {
    const response = await httpClient.get("/techs");
    return response.data;
  } catch (error) {
    throw error;
  }
};
