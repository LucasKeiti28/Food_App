import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer LEyhGPe7lCZ7lIPdjNJzjMfs_j61Jf2bsnN_LUsvjH4-GkbMh6mlp-ynRX0Wl0jhtJj8nrawROEtbPynf3TQxAV0cBBhxv840Np_ahrtxY3uylWV6jVY1lQP3cjjXXYx"
  }
});
