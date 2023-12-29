import httpClient from "@/api/axios";
import { IOptionsData } from "../../types/types";

export const fetchStatesData = async (): Promise<IOptionsData[]> => {
  try {
    const response = await httpClient.get("/state");
    return response.data;
  } catch (err) {
    throw err;
  }
};
