import { Notification } from '@app/entities/Notification';

export class NotificationModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
    };
  }
}
