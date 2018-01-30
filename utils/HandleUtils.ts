import { Callback, Context } from 'aws-lambda';

export function wrapHandle(handler: Handler) {
  return (event: any, context: Context, cb: Callback) => {
    Promise.resolve()
      .then(() => handler.handle(event, context))
      .then(result => cb(null, result))
      .catch(err => {
        console.error(event);
        cb(err, null)
        throw err;
      });
  }
}

export interface Handler {
  handle(event: any, context: Context): Promise<any>;
}