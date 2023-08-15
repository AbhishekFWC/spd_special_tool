import { BASE_URL } from "../utils/config";
import axios from "axios";

export const createNewfolder = async (
  folderName: string,
  candidate: string[]
) => {
  try {
    const response = await axios.post(`${BASE_URL}`);
    if (response.status === 200) {
      return Promise.resolve({ success: true, data: response.data });
    }
  } catch (error) {
    return Promise.resolve({ succes: false, data: error });
  }
};

export const addCandidates = async () => {
  try {
  } catch (error) {}
};

export const removeCandidates = async () => {
  try {
  } catch (error) {}
};
