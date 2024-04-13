import styles from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "assets/logo.svg";
import { ReactComponent as NavHomeIcon } from "assets/icon-nav-home.svg";
import { ReactComponent as NavMoviesIcon } from "assets/icon-nav-movies.svg";
import { ReactComponent as NavTvSeriesIcon } from "assets/icon-nav-tv-series.svg";
import { ReactComponent as NavBookmarkIcon } from "assets/icon-nav-bookmark.svg";
import avatarImage from "assets/image-avatar.png";

import { Link, useLocation } from "react-router-dom";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const router = useLocation();
  const currentRoute = router.pathname;

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Link to={"/"}>
            <LogoIcon />
          </Link>
        </div>
        <div className={styles.headerNavButtonsWrapper}>
          <div>
            <Link to={"/"}>
              <NavHomeIcon
                className={
                  currentRoute === "/"
                    ? styles.headerIconsActive
                    : styles.headerIcons
                }
              />
            </Link>
          </div>
          <div>
            <Link to={"/movies"}>
              <NavMoviesIcon
                className={
                  currentRoute === "/movies"
                    ? styles.headerIconsActive
                    : styles.headerIcons
                }
              />
            </Link>
          </div>
          <div>
            <Link to={"/tv-series"}>
              <NavTvSeriesIcon
                className={
                  currentRoute === "/tv-series"
                    ? styles.headerIconsActive
                    : styles.headerIcons
                }
              />
            </Link>
          </div>
          <div>
            <Link to={"/bookmarked"}>
              <NavBookmarkIcon
                className={
                  currentRoute === "/bookmarked"
                    ? styles.headerIconsActive
                    : styles.headerIcons
                }
              />
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
