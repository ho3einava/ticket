import { instance } from "@api/axiosWarper";

export const cities = async() => {
    const respoonse = await instance.get(`/cities`);
    return respoonse.data;
  }