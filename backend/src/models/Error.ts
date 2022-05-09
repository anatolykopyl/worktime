export default class Error {
  msg: string;
  code: string;

  constructor(msg: string, type: string, code: number) {
    this.msg = msg;
    this.code = `${type}-${code}`;
  }
}
