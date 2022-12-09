import dotenv from "dotenv";

dotenv.config();

const { API_URL } = process.env;

const config = {
  apiURL: API_URL,
};

export default config;
