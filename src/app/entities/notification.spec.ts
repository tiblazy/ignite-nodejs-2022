import { Content } from './content';
import { Notification } from './Notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('você recebeu uma solicitação'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
