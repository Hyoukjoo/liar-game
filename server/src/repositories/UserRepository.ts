import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  async checkExistedUserName(userName: string) {
    const existedUser = await this.findOne({ name: userName });

    const isExistedUser = existedUser !== undefined;

    return isExistedUser;
  }

  async removeByIds(userIds: (string | number)[]) {
    const users = userIds.map((id) => User.create({ id }));

    const result = await this.remove(users);

    return result;
  }
}
