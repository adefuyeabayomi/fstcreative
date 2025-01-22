import { axiosInstance } from "./axiosInstance";
import { isStatusCode2XX } from "./auth";

// Define the request types for the support service
interface SupportRequestType {
  token: string;
}

interface CreateSupportRequestType extends SupportRequestType {
  message: string;
  userId: string;
  extra_info: string;
  email: string;
}

interface NewsletterRequestType {
  email: string;
}

// Support Service Definition
let supportService = {
  // Create a new support ticket
  createSupport: async ({
    message,
    userId,
    extra_info,
    email,
    token,
  }: CreateSupportRequestType): Promise<any> => {
    try {
      let response = await axiosInstance.post(
        "/api/v1/support/createsupport",
        { message, userId, extra_info, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response;
      if (isStatusCode2XX(result.status)) {
        return result.data;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Create Support Request Error:", error);
      throw error;
    }
  },

  // Get all supports
  getAllSupports: async ({ token }: SupportRequestType): Promise<any> => {
    try {
      let response = await axiosInstance.get("/api/v1/support/getallsupports", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Get All Supports Request Error:", error);
      throw error;
    }
  },

  // Get a single support by ID
  getSupportById: async ({
    id,
    token,
  }: {
    id: string;
    token: string;
  }): Promise<any> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/support/getsupport/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Get Support By ID Request Error:", error);
      throw error;
    }
  },

  // Mark support as read
  setSupportToRead: async ({
    id,
    token,
  }: {
    id: string;
    token: string;
  }): Promise<any> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/support/setsupporttoread/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Set Support to Read Request Error:", error);
      throw error;
    }
  },

  // Get all user-specific support tickets
  getAllUserSupport: async ({
    userID,
    token,
  }: {
    userID: string;
    token: string;
  }): Promise<any> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/support/getallusersupport/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Get All User Support Request Error:", error);
      throw error;
    }
  },

  // Update support to read by ID
  updateSupportToRead: async ({
    id,
    token,
  }: {
    id: string;
    token: string;
  }): Promise<any> => {
    try {
      let response = await axiosInstance.put(
        `/api/v1/support/updatesupporttoread/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Update Support to Read Request Error:", error);
      throw error;
    }
  },

  // Delete support by ID
  deleteSupport: async ({
    id,
    token,
  }: {
    id: string;
    token: string;
  }): Promise<any> => {
    try {
      let response = await axiosInstance.delete(
        `/api/v1/support/deletesupport/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Delete Support Request Error:", error);
      throw error;
    }
  },

  // Save newsletter subscription
  saveNewsletter: async ({ email }: NewsletterRequestType): Promise<any> => {
    try {
      let response = await axiosInstance.post(
        `/api/v1/support/savenewsletter/${email}`,
      );
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Save Newsletter Request Error:", error);
      throw error;
    }
  },
};

export default supportService;
