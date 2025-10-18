import ApiRoutes from "@/requests/ApiRoutes";
import api from "@/config";
import type RequestVisits from "../RequestVisits";

const getCountVisit = async (): Promise<RequestVisits> => {
  try {
    const response = await fetch(`${api}/${ApiRoutes.VISITS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: RequestVisits = await response.json();

    if (!data || typeof data.success === "undefined") {
      throw new Error("Invalid response format");
    }

    return data;
  } catch (error) {
    console.error("Error in getCountVisit:", error);
    throw error;
  }
};

export default getCountVisit;
