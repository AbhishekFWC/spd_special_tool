import { BASE_URL } from "@/utils/config";
import axios from "axios";

export const createOrGetConversation = async (id: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/message/finder/conversation`
    );

    if (response.status === 200 || response.status === 201) {
      return Promise.resolve({ success: true, data: response.data });
    }
  } catch (error) {
    return Promise.resolve({
      success: false,
      data: error,
    });
  }
};

export const sendMessage = () => {};

export const getMessages = async () => {};
