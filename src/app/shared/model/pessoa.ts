import { Pais } from "./pais";

export interface Pessoa{

    id: number;
	nome: string;
	sigla: string;
	cpf: string;
	sexo: string;
	dataNascimento: Date;
	tipoDePessoa: number;
	paisOrigem: Pais;
}
