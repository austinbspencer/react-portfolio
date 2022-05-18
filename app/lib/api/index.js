import axios from "axios";
import { config } from "config";

export const axiosApi = axios.create({
  baseURL: config.apiUrl,
});

export const getProjects = () =>
  new Promise((resolve, reject) =>
    axiosApi
      .get(`/projects/`)
      .then((res) => {
        if (config.debug) console.log(res);
        resolve(res.data);
      }, 200)
      .catch((err) => {
        console.log(err);
        reject();
      })
  );
