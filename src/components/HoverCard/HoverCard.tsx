import { NotificationType } from "types";
import styles from "./HoverCard.module.scss";
import { ReactComponent as PlayIcon } from "assets/icon-play.svg";

interface HoverCardProps {
  hover: boolean;
  hoverRecommended: boolean;
  handlePlayButton: (notification: NotificationType) => void;
}

export const HoverCard = ({ hover, handlePlayButton }: HoverCardProps) => {
  const hoverClass = hover ? "hoverCardVisible" : "hoverCardHiden";

  const handleClick = () => {
    handlePlayButton({
      message: "Play function is not implemented",
      status: "error",
    });
  };
  return (
    <div className={hoverClass}>
      <div className={styles.hoverCard}>
        <button className={styles.hoverButton} onClick={handleClick}>
          <PlayIcon className={styles.playIcon} />
          Play
        </button>
      </div>
    </div>
  );
};

export const HoverRecommendedCard = ({
  hoverRecommended,
  handlePlayButton,
}: HoverCardProps) => {
  const hoverRecClass = hoverRecommended
    ? "hoverRecCardVisible"
    : "hoverRecCardHiden";

  const handleClick = () => {
    handlePlayButton({
      message: "Play function is not implemented",
      status: "error",
    });
  };

  return (
    <div className={hoverRecClass}>
      <div className={styles.hoverCard}>
        <button className={styles.hoverButtonRecCard} onClick={handleClick}>
          <PlayIcon className={styles.playIcon} />
          Play
        </button>
      </div>
    </div>
  );
};
