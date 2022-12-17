import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repositories';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get Notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const getRecipientNotification = new GetRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(makeNotification());

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'another-recipient-id',
      }),
    );

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id' }),
        expect.objectContaining({ recipientId: 'example-recipient-id' }),
      ]),
    );
  });
});
