import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notificationrepository';
import { NotificationNotFound } from './errors/notification-not-found';

interface IUnreadNotificationRequest {
  notificationId: string;
}

type IUnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: IUnreadNotificationRequest,
  ): Promise<IUnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
