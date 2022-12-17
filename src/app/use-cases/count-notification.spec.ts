import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repositories';
import { CountRecipientNotification } from './count-recipient-notification';

describe('Count Notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(makeNotification());

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'another-recipient-id',
      }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'example-recipient-id',
    });

    expect(count).toEqual(2);
  });
});
