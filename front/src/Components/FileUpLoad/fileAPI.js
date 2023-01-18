import axios from "axios";

export const uploadFile = async (file) => {
  try {
    const { data } = await axios.post("api/upload", file);
    return data;
  } catch (e) {
    console.log(e);
  }
};
