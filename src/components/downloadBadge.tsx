import googleBadge from "../assets/google-play-badge.png";
import appleBadge from "../assets/app-store-badge.svg";
import styles from "./downloadBadge.module.css";

type DownloadBadgeProps = {
  store: "apple" | "google";
  small?: boolean;
};

export default function DownloadBadge(props: DownloadBadgeProps) {
  const apple = {
    ulr: "https://apps.apple.com/us/app/scuba-seasons/id6450968950",
    img: appleBadge,
    alt: "Download on the App Store",
  };

  const google = {
    ulr: "https://play.google.com/store/apps/details?id=com.freem11.divegomobile&pli=1",
    img: googleBadge,
    alt: "Get it on Google Play",
  };

  const attributes = props.store === "apple" ? apple : google;

  return (
    <a
      className={`${styles.downloadBadge} ${props.small && styles.small}`}
      target="_blank"
      href={attributes.ulr}
    >
      <img src={attributes.img} alt={attributes.alt} />
    </a>
  );
}
