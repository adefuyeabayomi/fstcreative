import { axiosInstance } from "./axiosInstance";
import { isStatusCode2XX } from "./auth";
import { DenateAchievement } from "../pages/dashboard/App/AppDashboardTypes";

// export interface typings for the dashboard operations.
export interface AchievementPlayer {
  achievementID: string;
  achievement_name: string;
  appID: string;
  appuserID: string;
  creation_date: string; // You can use `Date` if you plan to parse this string as a Date object
  denate_achievement: number;
  locked: boolean;
  player_achievement_id: number;
  player_name: string;
  userID: string;
}

interface DashboardPropType {
  userID?: string;
  token: string;
  appID?: string;
  id?: string;
  denate_achievement_id?: string;
  achievement_name?: string;
  user_id?: string;
  denateapp_id?: string;
  teamID?: string;
  leaderboard_name?: string;
  match_id?: string;
  private_match_id?: string;
}
export interface DenateMatchClient {
  IP_address: string;
  appID: string;
  creation_date: string;
  filter?: string; // Optional as it's not in the new object
  local_client_match_id?: number; // Optional as it's not in the new object
  local_match_id?: number; // Optional as it's not in the new object
  player_name: string;
  server_name: string;
  userID: string;
  game_code?: string; // Optional as it's not in the original object
  private_client_match_id?: number; // Optional as it's not in the original object
  private_match_id?: number; // Optional as it's not in the original object
}

export interface DashboardStat {
  numofusers: number;
  percentage: number | null;
}

export interface ActiveStat {
  numofactiveclients?: number;
  numofactivehosts?: number;
  numofactiveplayers?: number;
  numofactivevoiceconnectedclients?: number;
}

export interface DenateDashboard {
  achievement: DashboardStat;
  activematchclients: ActiveStat;
  activematchhosts: ActiveStat;
  activeplayers: ActiveStat;
  activevoiceclients: ActiveStat;
  friend: DashboardStat;
  playerreport: DashboardStat;
  save: DashboardStat;
  users: DashboardStat;
}
export interface DenateAppDashboardData {
  achievement: {
    numofusers: number;
  };
  activematchclients: {
    numofactiveclients: number;
  };
  activematchhosts: {
    numofactivehosts: number;
  };
  activeplayers: {
    numofactiveplayers: number;
  };
  activeprivatematchhosts: {
    numofactivehosts: number;
  };
  activevoiceclients: {
    numofactivevoiceconnectedclients: number;
  };
  friend: {
    numofusers: number;
  };
  playerreport: {
    numofusers: number;
  };
  privateactivematchclients: {
    numofactiveclients: number;
  };
  save: {
    numofusers: number;
  };
  users: {
    numofusers: number;
  };
}
export interface LeaderboardPlayer {
  appID: string;
  creation_date: string;
  denate_leaderboard_id: number;
  filters: string;
  leaderboard_name: string;
  player_name: string;
  userID: string;
}

export interface ConnectedVoice {
  appID: string;
  client_id: string;
  connectedvoice_id: number;
  creation_date: string;
  room: string;
  username: string;
}

export const UserDashboardService = {
  getDashboard: async ({
    userID,
    token,
  }: DashboardPropType): Promise<DenateDashboard> => {
    console.log({ userID, token });
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getdashboard/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response as DenateDashboard;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAppDashboard: async ({
    appID,
    token,
  }: DashboardPropType): Promise<DenateAppDashboardData> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getappdashboard/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getHostedMatches: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/gethostedmatches/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getClientMatches: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getclientmatches/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  sample3: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getappdashboard/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  PrivateClientMatchesPlayers: async ({
    appID,
    private_match_id,
    token,
  }: {
    appID: string;
    private_match_id: string;
    token: string;
  }): Promise<DenateMatchClient[]> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getprivateclientmatchesbymatchid/${appID}/${private_match_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Private Client Matches Request Error");
      throw error;
    }
  },
  ClientMatchesPlayers: async ({
    appID,
    match_id,
    token,
  }: {
    appID: string;
    match_id: string;
    token: string;
  }) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getclientmatchesbymatchid/${appID}/${match_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Client Matches Request Error");
      throw error;
    }
  },
  getPrivateHostMatches: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getprivatehostedmatches/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getPrivateClientMatches: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getprivateclientmatches/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllAppUsers: async ({
    appID,
    token,
    page,
    limit,
    search,
  }: {
    appID: string;
    token: string;
    page: string;
    limit: string;
    search: string;
  }) => {
    try {
      // Construct query parameters
      const queryParams = new URLSearchParams();
      queryParams.append("page", page);
      queryParams.append("limit", limit);
      if (search !== "") {
        queryParams.append("search", search);
      }

      // Construct URL with query parameters
      const url = `/api/v1/devportal/getallappusers/${appID}?${queryParams.toString()}`;
      console.log({ url });
      // Make the request
      let response = await axiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log({ inAuthTS: response });
      let result = response.data;

      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },

  getAllOnlineUsers: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getappdashboard/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllFriendships: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallfriendship/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllUnrealSaves: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallunrealsaves/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getDenatePlayerLeaderboards: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getalldenateplayerleaderboards/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Leaderboard Operation Request Error");
      throw error;
    }
  },
  getAllLeaderboard: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallleaderboards/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllPlayersWithLeaderboards: async ({
    appID,
    leaderboard_name,
    token,
  }: {
    appID: string;
    leaderboard_name: string;
    token: string;
  }): Promise<LeaderboardPlayer[]> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallplayerswithleaderboards/${appID}/${leaderboard_name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Player Leaderboard Operation Request Error");
      throw error;
    }
  },
  getAllPlayerReports: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallplayerreports/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  deletePlayerReports: async ({ id, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/deleteplayerreports/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllVoiceChannels: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallvoicechannel/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllVoiceUnderChannel: async ({
    appID,
    room,
    token,
  }: {
    appID: string;
    room: string;
    token: string;
  }): Promise<ConnectedVoice[]> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallvoiceunderchannel/${appID}/${room}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Voice Channel Operation Request Error");
      throw error;
    }
  },
  getAllConnectedVoice: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallconnectedvoice/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllTeams: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallteams/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllTeamsByMatch: async ({
    appID,
    match_id,
    is_private_match,
    token,
  }: {
    appID: string;
    match_id: string;
    is_private_match: boolean;
    token: string;
  }) => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/devportal/getallteamsbymatch/${appID}/${match_id}/${is_private_match}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = response.data;

      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Get All Teams by Match Request Error");
      throw error;
    }
  },
  getAllPlayerAchievements: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallplayerachievements/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },

  getAllAchievementsPlayers: async ({
    appID,
    achievementID,
    token,
  }: {
    appID: string;
    achievementID: string;
    token: string;
  }): Promise<AchievementPlayer[]> => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallachievementsplayers/${appID}/${achievementID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Get All Achievements Players Request Error");
      throw error;
    }
  },
  getAllPlayerUnlockedAchievementByName: async ({
    appID,
    achievement_name,
    token,
  }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallplayerunlockedachievementbyname/${appID}/${achievement_name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllAchievements: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallachievements/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  addAchievement: async ({
    appID,
    userID,
    token,
    achievement_name,
    achievement_description,
    locked_achievement_name,
    locked_achievement_description,
    unlocked_achievement_name,
    unlocked_achievement_description,
    attachments1,
    attachments2,
  }: {
    appID: string;
    userID: string;
    token: string;
    achievement_name: string;
    achievement_description: string;
    locked_achievement_name: string;
    locked_achievement_description: string;
    unlocked_achievement_name: string;
    unlocked_achievement_description: string;
    attachments1: File;
    attachments2: File;
  }) => {
    try {
      // Create form data object
      console.log(attachments1, attachments2);
      const formData = new FormData();
      formData.append("appID", appID);
      formData.append("userID", userID);
      formData.append("achievement_name", achievement_name);
      formData.append("achievement_description", achievement_description);
      formData.append("locked_achievement_name", locked_achievement_name);
      formData.append(
        "locked_achievement_description",
        locked_achievement_description,
      );
      formData.append("unlocked_achievement_name", unlocked_achievement_name);
      formData.append(
        "unlocked_achievement_description",
        unlocked_achievement_description,
      );
      formData.append(`image`, attachments1);
      formData.append(`image`, attachments2);
      console.log({ formData });

      // Send request
      let response = await axiosInstance.post(
        `/api/v1/devportal/addachievement`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Ensures multipart/form-data
          },
        },
      );

      // Handle response
      console.log({ inAddAchievements: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Add Achievement Request Error");
      throw error;
    }
  },
  getAchievementsById: async ({
    appID,
    achievementID,
    token,
  }: {
    appID: string;
    achievementID: string;
    token: string;
  }): Promise<DenateAchievement> => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/devportal/getallachievementsbyachievementid/${appID}/${achievementID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inGetAchievements: response });
      const result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result.response;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Get Achievements by ID Request Error");
      throw error;
    }
  },
  updateAchievement: async ({
    achievementID,
    appID,
    userID,
    token,
    achievement_name,
    achievement_description,
    locked_achievement_name,
    locked_achievement_description,
    unlocked_achievement_name,
    unlocked_achievement_description,
    attachments,
  }: {
    achievementID: string;
    appID: string;
    userID: string;
    token: string;
    achievement_name: string;
    achievement_description: string;
    locked_achievement_name: string;
    locked_achievement_description: string;
    unlocked_achievement_name: string;
    unlocked_achievement_description: string;
    attachments: File[]; // Array of files
  }) => {
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("appID", appID);
      formData.append("userID", userID);
      formData.append("achievement_name", achievement_name);
      formData.append("achievement_description", achievement_description);
      formData.append("locked_achievement_name", locked_achievement_name);
      formData.append(
        "locked_achievement_description",
        locked_achievement_description,
      );
      formData.append("unlocked_achievement_name", unlocked_achievement_name);
      formData.append(
        "unlocked_achievement_description",
        unlocked_achievement_description,
      );
      formData.append("image", attachments[0]);
      formData.append("image", attachments[1]);

      // Make API call
      const response = await axiosInstance.post(
        `/api/v1/devportal/updateachievement/${achievementID}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        },
      );

      console.log({ response });

      // Handle successful response
      return response.data;
    } catch (error) {
      console.error("Error updating achievement", error);
      throw error;
    }
  },
  deleteAchievementById: async ({
    denate_achievement_id,
    token,
  }: DashboardPropType) => {
    try {
      let response = await axiosInstance.delete(
        `/api/v1/devportal/deleteachievementbyachievementID/${denate_achievement_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  disableApp: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/disableapp/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getUserDetails: async ({ user_id, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getuserdetails/${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAppDetails: async ({ denateapp_id, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getappdetails/${denateapp_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllPlayerInTeam: async ({ appID, teamID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallplayerinteam/${appID}/${teamID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getLeaderboardNames: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getleaderboardnames/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },

  getPlayersinLeaderboard: async ({
    appID,
    leaderboard_name,
    token,
  }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getplayersinleaderboard/${appID}/${leaderboard_name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getClientInMatch: async ({ appID, match_id, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getclientinmatch/${appID}/${match_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getPrivateClientInMatch: async ({
    appID,
    private_match_id,
    token,
  }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getprivateclientinmatch/${appID}/${private_match_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  getAllAppUserStatus: async ({ appID, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getallappusersstatus/${appID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
  sample31: async ({ appID, match_id, token }: DashboardPropType) => {
    try {
      let response = await axiosInstance.get(
        `/api/v1/devportal/getclientinmatch/${appID}/${match_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({ inAuthTS: response });
      let result = response.data;
      if (isStatusCode2XX(result.status)) {
        return result;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (error) {
      console.log("Dashboard Operation Request Error");
      throw error;
    }
  },
};
