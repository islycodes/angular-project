import { Pessoa } from "../shared/pessoa.model";

export interface Cliente extends Pessoa {
    cpf: string;
    clienteDesde: string;
    mensalidade: number;
  }
