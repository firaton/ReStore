import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { request } from "http";
import { toast } from "react-toastify";
// imprt {history} from "../.."react router 6 ile kullanılmıyor. yerine useNavigate.
import { Navigate, useNavigate } from "react-router-dom";
import { ProductionQuantityLimitsRounded } from "@mui/icons-material";

const sleep =()=> new Promise(resolve=>setTimeout(resolve,150))

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response;
  },
  (error: AxiosError) => {
    // const { data, status } = error.response!; Bu kod data.title da object is type of unknown hatsı veriyordu.
    const { data, status } = error.response as any;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error(data.title);
        break;
      case 500:
        toast.error(data.title);
        break;
      default:
        break;
    }
    //console.log("caught by interceptor");
    return Promise.reject(error.response);
  }
);
const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => requests.get("products"),
  details: (id: number) => requests.get(`products/${id}`),
};

const TestErrors = {
  get400Error: () => requests.get("buggy/bad-request"),
  get401Error: () => requests.get("buggy/unauthorised"),
  get404Error: () => requests.get("buggy/not-found"),
  get500Error: () => requests.get("buggy/server-error"),
  getValidationError: () => requests.get("buggy/validation-error"),
};

const agent = { Catalog, TestErrors };

export default agent;
// function responseBodyFn(response:AxiosResponse){
//     return response.data;
// }
