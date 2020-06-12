import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9uZtfO2OWbhu27zbP2VKZXSMsHyy5vKC45ZK-mXOINg ",
  },
});
