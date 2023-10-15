import styles from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "assets/logo.svg";
import { ReactComponent as NavHomeIcon } from "assets/icon-nav-home.svg";
import { ReactComponent as NavMoviesIcon } from "assets/icon-nav-movies.svg";
import { ReactComponent as NavTvSeriesIcon } from "assets/icon-nav-tv-series.svg";
import { ReactComponent as NavBookmarkIcon } from "assets/icon-nav-bookmark.svg";
import avatarImage from "assets/image-avatar.png";

import { Link } from "react-router-dom";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <LogoIcon />
        </div>
        <div className={styles.headerNavButtonsWrapper}>
          <div>
            <Link to={"/"}>
              <NavHomeIcon className={styles.headerIcons} />
            </Link>
          </div>
          <div>
            <Link to={"/movies"}>
              <NavMoviesIcon className={styles.headerIcons} />
            </Link>
          </div>
          <div>
            <Link to={"/tv-series"}>
              <NavTvSeriesIcon className={styles.headerIcons} />
            </Link>
          </div>
          <div>
            <Link to={"/bookmarked"}>
              <NavBookmarkIcon className={styles.headerIcons} />
            </Link>
          </div>
        </div>
        <div className={styles.headerAvatarImageWrapper}>
          <img
            src={avatarImage}
            alt="avatarImage"
            className={styles.headerAvatarImage}
          />
        </div>
      </div>
    </header>
  );
};
