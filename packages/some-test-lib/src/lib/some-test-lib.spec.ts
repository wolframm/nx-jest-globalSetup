import { someTestLib } from './some-test-lib';

describe('someTestLib', () => {
  it('should work', () => {
    expect(someTestLib()).toEqual('some-test-lib');
  });
});
