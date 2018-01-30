import { Context, S3CreateEvent } from 'aws-lambda';
import { Handler} from '../../../utils/HandleUtils';

export default class Main implements Handler {
  async handle(event: S3CreateEvent, context: Context) {
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
      bucket: bucket,
      key: key,
    };
    return params;
  }
}
