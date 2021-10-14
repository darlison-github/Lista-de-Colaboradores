import { FieldMessage } from './field-message';
export interface ProblemDetail{
  tipo: string
  titulo: string
  status: number
  detalhe: string
  mensagemUsuario: string
  erros: FieldMessage[]
}
