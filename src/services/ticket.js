import { instance } from "@api/axiosWarper";
export const ticket = async ({id}) => {
    const response = await instance.get(`/tickets/${id}`);
    return response.data;
  }