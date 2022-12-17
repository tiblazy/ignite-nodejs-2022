import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notificationrepository';
import { NotificationNotFound } from './errors/notification-not-found';

interface IReadNotificationRequest {
  notificationId: string;
}

type IReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: IReadNotificationRequest,
  ): Promise<IReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationRepository.save(notification);
  }
}
