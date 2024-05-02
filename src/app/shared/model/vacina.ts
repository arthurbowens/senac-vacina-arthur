import { Pais } from './pais';
import { Pessoa } from './pessoa';


export class Vacina {

  idVacina: number;
  nome: string;
  paisOrigem: Pais;
  pesquisadorResponsavel: Pessoa;
  estagio: number;
  dataInicioPesquisa: Date;
  media: number;
}
