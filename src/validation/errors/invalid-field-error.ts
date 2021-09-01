export class InvalidFieldError extends Error {
  constructor (fieldLabel: string) {
    super('Valor inválido!')
  }
}
