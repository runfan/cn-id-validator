
declare interface Result {
  address: string
  birthday: string
  age: integer
  gender: integer
}
declare interface CertInfo {
  address: string
  birthday: Birthday
  age: integer
  check: boolean
}
declare interface Birthday {
  date: string
  year: string
  month: integer
  day: integer
}

declare class Validator {
  constructor(id: string)
  valid(): Result
  getAddress(code: string): string
  weight(t: integer): integer
  check(): boolean
  parse(): CertInfo
}

export default Validator;
