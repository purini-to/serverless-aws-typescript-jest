import Main from '../src/main';

it('Get bucket name and key from put event of S3', () => {
  const target = new Main(require('./__data__/event_s3_put.json'), null);
  expect(target.handle()).resolves.toEqual({
    bucket: 'sourcebucket',
    key: 'HappyFace.jpg',
  });
});
