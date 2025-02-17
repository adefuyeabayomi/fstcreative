// CustomerSupport

import axios from "axios";
interface CustomerSupportApi {
  postMessages: (email: any, message: any) => Promise<any>;
  getMessages: (replied: any, startDate: any, endDate: any) => Promise<any>;
  postMessagesByMessageIdReply: (
    token: any,
    messageId: any,
    replyMessage: any,
  ) => Promise<any>;
}
export const CustomerSupport: CustomerSupportApi = {
  /**
   * Post a new customer message
   * Tags: CustomerSupport
   * Method: POST
   * Path: /messages
   * Responses: 201, 400, 500
   */

  postMessages: async (email, message) => {
    if (typeof email !== "string") {
      throw new Error(
        "Argument 'email' should be of type string in the email format",
      );
    }
    if (typeof message !== "string") {
      throw new Error("Argument 'message' should be of type string ");
    }

    let config = {
      url: `http://localhost:8080/messages`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email: `${email}`, message: `${message}` },
    };

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error("Error in postMessages:", error);
      throw error;
    }
  },

  /**
   * Retrieve customer messages
   * Tags: CustomerSupport
   * Method: GET
   * Path: /messages
   * Responses: 200, 400, 500
   */

  getMessages: async (replied, startDate, endDate) => {
    if (typeof replied !== "boolean") {
      throw new Error("Argument 'replied' should be of type boolean ");
    }
    if (typeof startDate !== "string") {
      throw new Error(
        "Argument 'startDate' should be of type string in the date-time format",
      );
    }
    if (typeof endDate !== "string") {
      throw new Error(
        "Argument 'endDate' should be of type string in the date-time format",
      );
    }

    let config = {
      url: `http://localhost:8080/messages?replied=${encodeURIComponent(
        replied,
      )}&startDate=${encodeURIComponent(
        startDate,
      )}&endDate=${encodeURIComponent(endDate)}`,
      method: "get",
      headers: {},
    };

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error("Error in getMessages:", error);
      throw error;
    }
  },

  /**
   * Reply to a customer message
   * Tags: CustomerSupport
   * Method: POST
   * Path: /messages/{messageId}/reply
   * Responses: 200, 404, 500
   */

  postMessagesByMessageIdReply: async (token, messageId, replyMessage) => {
    if (typeof token !== "string") {
      throw new Error("Argument 'token' should be of type string");
    }
    if (typeof messageId !== "string") {
      throw new Error("Argument 'messageId' should be of type string ");
    }
    if (typeof replyMessage !== "string") {
      throw new Error("Argument 'replyMessage' should be of type string ");
    }

    let config = {
      url: `http://localhost:8080/messages/${messageId}/reply`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { replyMessage: `${replyMessage}` },
    };

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error("Error in postMessagesByMessageIdReply:", error);
      throw error;
    }
  },
};
