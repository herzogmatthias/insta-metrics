export default class AuthService {
  public static getToken() {
    return localStorage.getItem("token");
  }

  public static setToken(token: string) {
    localStorage.setItem("token", token);
  }
}
