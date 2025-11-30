import { NotificationProps } from "@mantine/core";
import { ReactNode } from "react";
export declare const myNotifications: {
    success: (title: ReactNode, options?: NotificationProps) => void;
    error: (title: string, options?: NotificationProps) => void;
};
