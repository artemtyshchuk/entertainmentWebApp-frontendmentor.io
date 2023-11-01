import styles from "./Notification.module.scss";

interface NotificationProps {}

export const Notification = ({}: NotificationProps) => {
  return (
    <div className={styles.notification}>
      <div></div>
    </div>
  );
};
