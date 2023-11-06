import { NotificationType } from "types";
import styles from "./Notification.module.scss";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export const Notification = (props: NotificationType) => {
  const { message, status } = props;

  const animation = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 300,
      opacity: 0,
    },
  };

  const colorOfNotification =
    status === "success" ? "successNotification" : "errorNotification";

  return createPortal(
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      transition={{
        delay: 0.5,
      }}
      variants={animation}
      className={colorOfNotification}
    >
      <p className="notificationText">{message}</p>
    </motion.div>,
    document.getElementById("notifications") as HTMLElement
  );
};
