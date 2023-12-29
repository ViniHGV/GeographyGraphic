import httpClient from "@/api/axios";
import { IOptionsData } from "../../types/types";

export const fetchScenariosData = async (): Promise<IOptionsData[]> => {
  try {
    const response = await httpClient.get("/scenario");
    return response.data;
  } catch (err) {
    throw err;
  }
};
