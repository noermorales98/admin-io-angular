import {Users} from "./users";

export class Integrantes implements Users{
  private _descriptionUser: string;
  private _email: string;
  private _idUser: bigint;
  private _nameUser: string;
  private _password: string;
  private _phone: number;


  constructor(descriptionUser: string, email: string, idUser: bigint, nameUser: string, password: string, phone: number) {
    this._descriptionUser = descriptionUser;
    this._email = email;
    this._idUser = idUser;
    this._nameUser = nameUser;
    this._password = password;
    this._phone = phone;
  }


  get descriptionUser(): string {
    return this._descriptionUser;
  }

  set descriptionUser(value: string) {
    this._descriptionUser = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get idUser(): bigint {
    return this._idUser;
  }

  set idUser(value: bigint) {
    this._idUser = value;
  }

  get nameUser(): string {
    return this._nameUser;
  }

  set nameUser(value: string) {
    this._nameUser = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get phone(): number {
    return this._phone;
  }

  set phone(value: number) {
    this._phone = value;
  }
}
