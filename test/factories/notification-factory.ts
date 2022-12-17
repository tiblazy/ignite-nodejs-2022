import { Content } from '@app/entities/content';
import { INotificationProps, Notification } from '@app/entities/Notification';

type Override = Partial<INotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'example-recipient-id',
    content: new Content('example-to-cancel'),
    category: 'social',
    ...override,
  });
}
