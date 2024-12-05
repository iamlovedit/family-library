export class Message {
  succeed: boolean;
  message: string;
  code: number;
  constructor(
    succeed: boolean = true,
    message: string = '成功',
    code: number = 200,
  ) {
    this.succeed = succeed;
    this.message = message;
    this.code = code;
  }
}

export class MessageData<T> extends Message {
  data: T | null;
  constructor(
    data: T | null,
    succeed: boolean,
    message: string = '成功',
    code: number = 200,
  ) {
    super(succeed, message, code);
    this.data = data;
  }
}
