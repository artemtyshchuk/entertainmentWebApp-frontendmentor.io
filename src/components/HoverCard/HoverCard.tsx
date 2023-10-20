import styles from "./HoverCard.module.scss";
import { ReactComponent as PlayIcon } from "assets/icon-play.svg";

interface HoverCardProps {
  hover: boolean;
  hoverRecommended: boolean;
}

export const HoverCard = ({ hover }: HoverCardProps) => {
  const hoverClass = hover ? "hoverCardVisible" : "hoverCardHiden";

  return (
    <div className={hoverClass}>
      <div className={styles.hoverCard}>
        <button className={styles.hoverButton}>
          <PlayIcon className={styles.playIcon} />
          Play
        </button>
      </div>
    </div>
  );
};

export const HoverRecommendedCard = ({ hoverRecommended }: HoverCardProps) => {
  const hoverRecClass = hoverRecommended
    ? "hoverRecCardVisible"
    : "hoverRecCardHiden";

  return (
    <div className={hoverRecClass}>
      <div className={styles.hoverCard}>
        <button className={styles.hoverButtonRecCard}>
          <PlayIcon className={styles.playIcon} />
          Play
        </button>
      </div>
    </div>
  );
};
