import APIResult from "../models/APIResult";
import UserResModel from "../models/response/UserResModel";
import apiCaller from "./api-caller.service";

export async function list(query?: {
  term?: string;
}): Promise<APIResult<UserResModel[]>> {
  try {
    return await apiCaller.get<UserResModel[]>("users", query);
  } catch (error) {
    //@todo:: log error message
    return {
      success: false,
      message:
        (error as Error)?.message ?? "Something went wrong! Please try again",
    };
  }
}

const userService = {
  list,
};

export default userService;
