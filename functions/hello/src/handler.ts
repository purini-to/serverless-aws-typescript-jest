import { Callback, Context, Handler, S3CreateEvent } from 'aws-lambda';
import Main from './main';

export const hello: Handler = (event: S3CreateEvent, context: Context, cb: Callback) => {
  Promise.resolve()
    .then(() => new Main(event, context).handle())
    .then(result => cb(null, result))
    .catch(err => {
      console.error(event);
      cb(err, null)
      throw err;
    });
}
