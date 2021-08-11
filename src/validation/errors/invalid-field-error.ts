export class InvalidFieldError extends Error {
  constructor (fieldLabel) {
    super(`O campo ${fieldLabel} está inválido.`)
  }
}
