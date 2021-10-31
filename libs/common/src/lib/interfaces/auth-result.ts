import { IUsuario } from "./usuario";

export interface AuthResult {
  jwt: string;
  usuario: Omit<IUsuario, "senha">;
}
