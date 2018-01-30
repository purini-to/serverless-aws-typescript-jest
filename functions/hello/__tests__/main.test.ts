import Main from '../src/main';

it('Get bucket name and key from put event of S3', () => {
  expect(new Main().handle(require('./__data__/event_s3_put.json'), null)).resolves.toEqual({
    bucket: 'sourcebucket',
    key: 'HappyFace.jpg',
  });
});
