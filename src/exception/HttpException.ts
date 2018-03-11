/**
 * The class used to process http exception.
 *
 */
export class HttpException {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}
