import { axiosInstance } from "./axiosInstance";
import { isStatusCode2XX } from "./auth";
export interface NotificationUser {
  account_creation_date: string;
  account_disable: number;
  auth_type: string;
  email: string;
  first_name: string;
  last_login_date: string;
  last_name: string;
  password: string;
  phone_number: string;
  picture: string;
  userID: string;
  user_id: number;
  username: string;
}

export interface Notification {
  id: number;
  message: string | null;
  notification_creation_date: string;
  read: boolean;
  user: NotificationUser;
}

interface notificationRequestType {
  token: string;
  message?: string;
  userID?: string;
}

interface notificationByIdRequestType extends notificationRequestType {
  id: string;
}

interface notificationByUserRequestType extends notificationRequestType {
  userID: string;
}

let notificationService = {
  // Create notification
  createNotification: async ({
    message,
    userID,
    token,
  }: notificationRequestType): Promise<any> => {
    try {
      const response = await axiosInstance.post(
        "/api/v1/notification/createnotification",
        { message, userId: userID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response.data;
      console.log({ response });
      if (isStatusCode2XX(response.status)) {
        return result.response;
      } else {
        throw new Error(result);
      }
    } catch (error) {
      console.error("Error creating notification", error);
      throw error;
    }
  },

  // Get all notifications
  getAllNotifications: async ({
    token,
  }: notificationRequestType): Promise<any> => {
    try {
      const response = await axiosInstance.get(
        "/api/v1/notification/getallnotifications",
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
      console.error("Error fetching all notifications", error);
      throw error;
    }
  },

  // Get notification by ID
  getNotificationById: async ({
    token,
    id,
  }: notificationByIdRequestType): Promise<any> => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/notification/getnotification/${id}`,
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
      console.error(`Error fetching notification with ID ${id}`, error);
      throw error;
    }
  },

  // Set notification to read
  setNotificationToRead: async ({
    token,
    id,
  }: notificationByIdRequestType): Promise<any> => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/notification/setnotificationtoread/${id}`,
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
      console.error(`Error setting notification with ID ${id} to read`, error);
      throw error;
    }
  },

  // Get all notifications for a user by userID
  getAllUserNotifications: async ({
    token,
    userID,
  }: notificationByUserRequestType): Promise<any> => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/notification/getallusernotification/${userID}`,
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
      console.error(
        `Error fetching notifications for user ID ${userID}`,
        error,
      );
      throw error;
    }
  },

  // Update notification to read
  updateNotificationToRead: async ({
    token,
    id,
  }: notificationByIdRequestType): Promise<any> => {
    try {
      const response = await axiosInstance.put(
        `/api/v1/notification/updatenotificationtoread/${id}`,
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
      console.error(`Error updating notification with ID ${id} to read`, error);
      throw error;
    }
  },

  // Delete notification
  deleteNotification: async ({
    token,
    id,
  }: notificationByIdRequestType): Promise<any> => {
    try {
      const response = await axiosInstance.delete(
        `/api/v1/notification/deletenotification/${id}`,
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
      console.error(`Error deleting notification with ID ${id}`, error);
      throw error;
    }
  },
};

export default notificationService;
