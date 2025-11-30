import { NotificationProps } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { ReactNode } from "react";
import { MdCheck, MdError } from "react-icons/md";

export const myNotifications = {
  success: (title: ReactNode, options?: NotificationProps) => {
    showNotification({
      title,
      message: "",
      icon: <MdCheck />,
      color: "teal",
      position: "bottom-center",
      ...options,
    });
  },
  error: (title: string, options?: NotificationProps) => {
    showNotification({
      title,
      message: "",
      icon: <MdError />,
      color: "red",
      position: "bottom-center",
      ...options,
    });
  },
};
