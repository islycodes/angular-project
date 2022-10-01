import { Pessoa } from "../shared/pessoa.model";

export interface Fornecedor extends Pessoa {
    cnpj: string;
    fornecedorDesde: string;
    ultimoPagamento: string;
}