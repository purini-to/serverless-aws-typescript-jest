import { Context, S3CreateEvent } from 'aws-lambda';

export default class Main {
  readonly event: S3CreateEvent; 
  readonly context: Context;

  constructor(event: S3CreateEvent, context: Context) {
    this.event = event;
    this.context = context;
  }

  async handle() {
    const bucket = this.event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(this.event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
      bucket: bucket,
      key: key,
    };
    return params;
  }
}
