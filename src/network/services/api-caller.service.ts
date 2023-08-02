import APIResult from "../models/APIResult";
import UserResModel from "../models/response/UserResModel";

//#region storage
const sampleData: UserResModel[] = [
  {
    id: "1",
    rank: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    friends: ["2", "3", "4"],
    image: "https://picsum.photos/200",
  },
  {
    id: "2",
    rank: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    friends: ["1", "3"],
    image: "https://picsum.photos/200",
  },
  {
    id: "3",
    rank: 3,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    friends: ["1", "2"],
    image: "https://picsum.photos/200",
  },
  {
    id: "4",
    rank: 4,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    friends: ["1"],
    image: "https://picsum.photos/200",
  },
  {
    id: "5",
    rank: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    friends: [],
    image: "https://picsum.photos/200",
  },
  {
    id: "6",
    rank: 6,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    friends: [],
    image: "https://picsum.photos/200",
  },
  {
    id: "7",
    rank: 7,
    name: "Christopher Wilson",
    email: "christopher.wilson@example.com",
    friends: [],
    image: "https://picsum.photos/200",
  },
];
const inMemoryStorage: Record<string, unknown[]> = {
  users: sampleData,
};
//#endregion

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function get<Res>(
  url: string,
  query?: Record<string, string>
): Promise<APIResult<Res>> {
  //@todo:: move this functionality on server side or in separate file
  let result;
  if (query?.term) {
    const searchCriteria = RegExp(`(${query.term})`, "i");
    result = [...inMemoryStorage[url]].filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (u: any) => searchCriteria.test(u.id) || searchCriteria.test(u.name)
    );
  } else {
    result = [...inMemoryStorage[url]];
  }
  return Promise.resolve({ success: true, data: result as Res });
}
export async function put<Req, Res>(url: string, data: Req): Promise<Res> {
  return Promise.resolve({} as Res);
}
export async function post<Req, Res>(url: string, data: Req): Promise<Res> {
  return Promise.resolve({} as Res);
}
export async function destroy<Res>(url: string): Promise<Res> {
  return Promise.resolve({} as Res);
}

const apiCallerService = {
  get,
  put,
  post,
  destroy,
};

export default apiCallerService;
