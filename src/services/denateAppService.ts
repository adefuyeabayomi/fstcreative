import { axiosInstance } from "./axiosInstance";
import { isStatusCode2XX } from "./auth";

interface DAppPropType {
  token: string;
  id?: string;
  app_id?: string;
  appID?: string;
  userID?: string;
  appData?: FormData;
}

export interface DenateApp {
  appID: string;
  app_creation_date: string; // Use `Date` if you plan to parse this into a Date object.
  app_description: string;
  app_disable: number; // Could be boolean if you convert 0/1 to true/false.
  app_image: string;
  app_name: string;
  denateapp_id: number;
  server_type: number;
  testing: number; // Could be boolean if you convert 0/1 to true/false.
  userID: string;
}

let denateAppService = {
  createDenateApp: async ({
    appData,
    token,
  }: DAppPropType): Promise<DenateApp> => {
    try {
      let response = await axiosInstance.post(
        `/api/v1/denateapp/createdenateapp`,
        appData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          transformRequest: [(data) => data],
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response as DenateApp;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
  updateDenateApp: async ({ id, token }: DAppPropType): Promise<DenateApp> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/denateapp/updatedenateapp/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
  deleteDenateAppBy_app_id: async ({ app_id, token }: DAppPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/denateapp/deletedenateappbyappid/${app_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
  deleteDenateAppBy_appID: async ({ appID, token }: DAppPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/denateapp/deletedenateappbyappID/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
  getDenateAppsByUserID: async ({
    userID,
    token,
  }: DAppPropType): Promise<DenateApp[]> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/denateapp/getdenateappsbyuserID/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response as DenateApp[];
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
  getDenateAppByAppID: async ({ appID, token }: DAppPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/denateapp/getdenateappbyappID/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
  getDenateAppByApp_ID: async ({ token }: DAppPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/denateapp/getdenateappbyapp_id/{app_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
  sample: async ({ token }: DAppPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getclientinmatch`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error: any) {
      console.error("Denate App Service Request Error", error.message);
      throw error;
    }
  },
};

export default denateAppService;
