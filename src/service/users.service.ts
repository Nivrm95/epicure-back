
import { IUser, UserModel } from "../../src/model/users.model";

export const getUsers = async () => {
    try {
      const users = await UserModel.find();
      return users;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
export const addUser = async (user:IUser) => {
    try {
        const _user = new UserModel(user);
        await _user.save();
        return _user;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

