import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    expect(() => new Content('você recebeu uma solicitação')).toBeTruthy();
  });

  it('not should be able to create a notification content with less then 5 characters', () => {
    expect(() => new Content('você')).toThrow();
  });

  it('not should be able to create a notification content with more then 240 characters', () => {
    expect(() => new Content('você'.repeat(241))).toThrow();
  });
});
