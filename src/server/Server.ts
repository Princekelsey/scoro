import { IProject, ITask, IResponseStatus } from "@/types";
import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://homeassignment.scoro.com/api/v2";
const company_account_id = process.env.VUE_APP_COMAPNY_ACCOUNT_ID;
const apiKey = process.env.VUE_APP_API_KEY;
const lang = "eng";

interface IProjectsResponse extends IResponseStatus {
  data: IProject[];
}

interface ITasksResponse extends IResponseStatus {
  data: ITask[];
}

const Server = {
  getProjectsList: async (): Promise<AxiosResponse<IProjectsResponse>> => {
    return await axios.post(`${BASE_URL}/projects/list`, {
      company_account_id,
      apiKey,
      lang,
    });
  },

  getTasksList: async (): Promise<AxiosResponse<ITasksResponse>> => {
    return await axios.post(`${BASE_URL}/tasks/list`, {
      company_account_id,
      apiKey,
      lang,
    });
  },
};

export default Server;
