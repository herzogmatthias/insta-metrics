import { ITag } from "../redux/types/userDetailsTypes";

export class TagService {
  public static getTagsForUsername(username: string) {
    return JSON.parse(localStorage.getItem(username)!) as ITag[];
  }

  public static setTagsForUsername(username: string, tags: ITag[]) {
    localStorage.setItem(username, JSON.stringify(tags));
  }

  public static deleteTagsForUsername(username: string) {
    localStorage.removeItem("username");
  }
}
