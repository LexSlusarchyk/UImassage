export class User {
  username: string;
  email: string;
  plainPassword: string;

  constructor(user) {
    this.username = user.email;
    this.email = user.email;
    this.plainPassword = user.plainPassword;
  }
}
