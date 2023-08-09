import { BASE_URL } from "@/utils/config";
import axios from "axios";

export const filterInvestor = async (
  industry: string[],
  round: string[],
  location: string[],
  investmentRange: string[]
) => {
  const industries = industry.join("+");
  const rounds = round.join("+");
  const locations = location.join("+");
  const investFrom = investmentRange[0];
  const investTo = investmentRange[1];

  const query = `industry=${industries}&round=${rounds}&location=${locations}&investFrom=`;
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get("${BASE_URL}/navigator?" + query, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {}
};

export const filterPitcher = async () => {};
