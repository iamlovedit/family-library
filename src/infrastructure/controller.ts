import { Message, MessageData } from '.';

export abstract class ControllerBase {
  protected succeed(message: string = '成功', code: number = 200) {
    return new Message(true, message, code);
  }

  protected failed(message: string = '失败', code: number = 500) {
    return new Message(false, message, code);
  }

  protected succeedData<T>(
    data: T,
    message: string = '成功',
    code: number = 200,
  ) {
    return new MessageData<T>(data, true, message, code);
  }

  protected failedData<T>(message: string = '失败', code: number = 500) {
    return new MessageData<T>(null, false, message, code);
  }
}
