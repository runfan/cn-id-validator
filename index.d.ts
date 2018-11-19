
declare interface Result {
  address: string
  birthday: string
  age: number
  gender: number
}
declare interface CertInfo {
  address: string
  birthday: Birthday
  age: number
  check: boolean
}
declare interface Birthday {
  date: string
  year: string
  month: number
  day: number
}

declare class Validator {
  constructor(id: string)
  valid(): Result
  getAddress(code: string): string
  weight(t: number): number
  check(): boolean
  parse(): CertInfo
}

export default Validator;
