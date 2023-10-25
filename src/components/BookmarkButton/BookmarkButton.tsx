import { useState } from "react";
import styles from "./BookmarkButton.module.scss";
import { ReactComponent as BookmarkIconEmpty } from "assets/bookmark_icon_128931.svg";

interface BookmarkButtonProps {
  isBookmarked: boolean;
  onClick: () => void;
}

export const BookmarkButton = ({
  isBookmarked,
  onClick,
}: BookmarkButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const hoverButtonClass = isHovering
    ? "activeBookmarkButton"
    : "bookmarkButton";

  return (
    <button
      className={`${isBookmarked ? "activeBookmarkButton" : hoverButtonClass}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <BookmarkIconEmpty className="bookmarkIcon" />
    </button>
  );
};

export const BookmarkButtonRecCard = ({
  isBookmarked,
  onClick,
}: BookmarkButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const hoverRecButtonClass = isHovering
    ? "activeRecBookmarkButton"
    : "bookmarkRecButton";

  return (
    <button
      className={`${
        isBookmarked ? "activeRecBookmarkButton" : hoverRecButtonClass
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <BookmarkIconEmpty className="bookmarkIcon" />
    </button>
  );
};
