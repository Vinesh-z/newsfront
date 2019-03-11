import { KeysPipe } from './group-pipe.pipe';

describe('KeysPipe', () => {
  fit('create an instance', () => {
    const pipe = new KeysPipe();
    expect(pipe).toBeTruthy();
  });
  it('create an instance', () => {
    const pipe = new KeysPipe();
    pipe.transform({ perm: {
      one: true,
      two: false
    }});
    expect(pipe.transform).toBe([ 'perm' ]);
    pipe.transform(false);
    expect(pipe.transform(false)).toBeNull();
  });
});
