
import AxiosOperations from "../axios/AxiosOperations";

export default class ApiService {
      getOnlinePeoples = () => {
        return AxiosOperations.get("https://randomuser.me/api/?results=50")
            .then(res => {
                return res.data.results;
            })
    }
}