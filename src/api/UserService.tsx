import axios from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<IUser[]> {
    const { data: users } = await axios.get<IUser[]>(
      "http://localhost:5000/users"
    );
    return users;
  }

  static async createUser(username: string, password: string): Promise<void> {
    await axios.post("http://localhost:5000/register", { username, password });
  }

  static async loginUser(username: string, password: string): Promise<void> {
    const response = await axios.post("http://localhost:5000/login", {
      username,
      password,
    });
    if (response.status === 200) {
      console.log("Login successful!");
    } else {
      throw new Error("Invalid credentials");
    }
  }
}

// export const getUsers = async () => {
//   const response = await axios.get<IUser[]>("./users.json");
//   return response;
// };
