import { useState } from "react";
import { NotificationType } from "types";

export const useNotification = () => {
  const [notification, setNotification] = useState({
    active: false,
    message: "",
    status: "",
  });

  const handleNotification = (result: NotificationType) => {
    setNotification({
      active: true,
      message: result.message,
      status: result.status,
    });
    setTimeout(() => {
      setNotification({ active: false, message: "", status: "" });
    }, 2000);
  };
  return { notification, handleNotification };
};
