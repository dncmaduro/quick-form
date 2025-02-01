import { notifications } from '@mantine/notifications'

export const QToast = {
  success: ({ title, message }: { title: string; message?: string }) => {
    notifications.show({
      title,
      message,
      color: 'green'
    })
  },

  danger: ({ title, message }: { title: string; message?: string }) => {
    notifications.show({
      title,
      message,
      color: 'red'
    })
  }
}
