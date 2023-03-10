import axios from "axios";

export const uploadFile = async (file) => {
  try {
    const { data } = await ("api/upload", file);
    return data;
  } catch (e) {
    console.log(e);
  }
};
