export class User {
  private _id!: number;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _avatar: string;
  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._avatar = password;
  }

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  get firstname(): string {
    return this._firstname;
  }
  set firstname(value: string) {
    this._firstname = value;
  }
  get lastname(): string {
    return this._lastname;
  }
  set lastname(value: string) {
    this._lastname = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get password(): string {
    return this._avatar;
  }
  set password(value: string) {
    this._avatar = value;
  }

  toPlainObj() {
    return {
      id: this._id,
      firstname: this._firstname,
      lastname: this._lastname,
      email: this._email,
      password: this._avatar,
    };
  }
}
