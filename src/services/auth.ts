import { axiosInstance } from "./axiosInstance";

export function isStatusCode5XX(statusCode: number) {
  return statusCode >= 500 && statusCode < 600;
}

export function isStatusCode4XX(statusCode: number) {
  return statusCode >= 400 && statusCode < 500;
}

export function isStatusCode2XX(statusCode: number) {
  return statusCode >= 200 && statusCode < 300;
}

export interface User {
  email?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  phone_number?: string;
  picture?: string;
  auth_type?: string;
  account_disable?: number;
  userID?: string;
  user_id?: number;
  account_creation_date?: string;
  last_login_date?: string;
}

export interface LoginForm {
  email_or_username_or_phonenumber: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  response: {
    access_token: string;
  };
}

export interface AuthResponse {
  status: number;
  message: string;
  response: {
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    phone_number: string;
    picture: string;
    auth_type: string;
    account_disable: number;
    userID: string;
    user_id: number;
    account_creation_date: string;
    last_login_date: string;
  };
}

export const AuthService = {
  createAccount: async (userData: User): Promise<AuthResponse> => {
    try {
      let response = await axiosInstance.post(
        "/api/v1/user/addaccount",
        userData,
      );
      console.log({ inAuthTS: response });
      let result = response.data as AuthResponse;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Auth Error In Signup");
      throw error;
    }
  },

  login: async (userData: User): Promise<LoginResponse> => {
    try {
      let response = await axiosInstance.post("/api/v1/user/login", userData);
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Auth Error In Login");
      throw error;
    }
  },

  sendVerificationMail: async (email: string): Promise<AuthResponse> => {
    try {
      let response = await axiosInstance.post(
        `/api/v1/user/sendverification/${email}`,
      );
      let result = response.data as AuthResponse;
      if (!isStatusCode2XX(result.status)) {
        throw new Error(JSON.stringify(result));
      }
      return result;
    } catch (error) {
      console.log("Auth Error In Send Verification Mail");
      throw error;
    }
  },

  getAccountByEmail: async (
    email: string,
    access_token: string,
  ): Promise<AuthResponse> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/user/getaccountbyemail/${email}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      let result = response.data as AuthResponse;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  forgotPassword: async ({ email }: { email: string }) => {
    try {
      let response = await axiosInstance.post(`/api/v1/user/forgetpassword`, {
        email,
      });
      let result = response.data as AuthResponse;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  resetPassword: async ({
    password,
    token,
  }: {
    password: string;
    token: string;
  }) => {
    try {
      let response = await axiosInstance.post(`/api/v1/user/resetpassword`, {
        password,
        token,
      });
      let result = response.data as AuthResponse;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  updateAccountById: async ({
    user,
    user_id,
    token,
  }: {
    user: User;
    user_id: number;
    token: string;
  }) => {
    try {
      let response = await axiosInstance.put(
        `/api/v1/user/updateaccountbyid/${user_id}`,
        user,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ response });
      let result = response.data as AuthResponse;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  sample: async ({ password, token }: { password: string; token: string }) => {
    try {
      let response = await axiosInstance.post(`/api/v1/user/resetpassword`, {
        password,
        token,
      });
      let result = response.data as AuthResponse;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  changePasswordById: async ({
    id,
    token,
    old_password,
    new_password,
  }: {
    id: number;
    token: string;
    old_password: string;
    new_password: string;
  }) => {
    try {
      const response = await axiosInstance.put(
        `/api/v1/user/changepasswordbyid/${id}`,
        {
          old_password,
          new_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log({ response });
      const result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.error("Change Password Request Error", error);
      throw error;
    }
  },
};
