import {Users} from "./users";

export class Administrador implements Users{
  descriptionUser: string;
  email: string;
  idUser: bigint;
  nameUser: string;
  password: string;
  phone: number;


  constructor(descriptionUser: string, email: string, idUser: bigint, nameUser: string, password: string, phone: number) {
    this.descriptionUser = descriptionUser;
    this.email = email;
    this.idUser = idUser;
    this.nameUser = nameUser;
    this.password = password;
    this.phone = phone;
  }
}
