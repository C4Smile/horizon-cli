import axios from "axios";

import config from "../../config.js";

export const validateBasicKey = async (token: string) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}user/validate`,
    {},
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.data;
  if (data.data.message) return true;
  return false;
};

/**
 * Takes a user object and sends it to the backend to be authenticated
 * @param userId - the menu name
 * @returns The response from the server.
 */
export const fetchUser = async (userId: string, token: string) => {
  const response = await axios.post(
    `${config.apiURL}user/get`,
    {
      id: userId,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Takes a user object and sends it to the backend to be authenticated
 * @param nick - new nick
 * @param userId - the menu name
 * @param token
 * @returns The response from the server.
 */
export const updateNickService = async (
  nick: string,
  userId: string,
  token: string
) => {
  const response = await axios.post(
    `${config.apiURL}user/set-nick`,
    {
      user: userId,
      nick,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Takes a user object and sends it to the backend to be authenticated
 * @param nation - new nation
 * @param userId - the menu name
 * @param token
 * @returns The response from the server.
 */
export const updateNationService = async (
  nation: string,
  userId: string,
  token: string
) => {
  const response = await axios.post(
    `${config.apiURL}user/select-nation`,
    {
      user: userId,
      nation,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Takes a user object and sends it to the backend to be authenticated
 * @param nation - new nation
 * @param userId - the menu name
 * @param token
 * @returns The response from the server.
 */
export const updateEmailService = async (
  email: string,
  userId: string,
  token: string
) => {
  const response = await axios.post(
    `${config.apiURL}user/set-email`,
    {
      user: userId,
      email,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.data;
  return data;
};
