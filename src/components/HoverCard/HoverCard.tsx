import styles from "./HoverCard.module.scss";
import { ReactComponent as PlayIcon } from "assets/icon-play.svg";

interface HoverCardProps {
  hover: boolean;
}

export const HoverCard = ({ hover }: HoverCardProps) => {
  return (
    <div className={hover ? "hoverCardVisible" : "hoverCardHiden"}>
      <div className={styles.hoverCard}>
        <button className={styles.hoverButton}>
          <PlayIcon className={styles.playIcon} />
          Play
        </button>
      </div>
    </div>
  );
};
