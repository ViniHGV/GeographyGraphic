import httpClient from "@/api/axios";
import { IOptionsData } from "../../@types/types";

export const fetchYearsData = async (): Promise<IOptionsData[]> => {
  try {
    const response = await httpClient.get("/year");
    return response.data;
  } catch (err) {
    throw err;
  }
};
