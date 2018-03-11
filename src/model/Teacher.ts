export class Teacher {
  id: number;
  serverId: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;

  constructor(id: number, serverId: number, firstName: string, lastName: string, username: string, password: string) {
    this.id = id;
    this.serverId = serverId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}