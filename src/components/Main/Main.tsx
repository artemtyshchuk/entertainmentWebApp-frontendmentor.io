import { ReactNode } from "react";
import styles from "./Main.module.scss";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <div className={styles.main}>
      <div id="notifications"></div>
      <div className="container">{children}</div>
    </div>
  );
};
