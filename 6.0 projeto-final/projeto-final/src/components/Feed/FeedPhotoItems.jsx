import Image from "../helper/Image";
import styles from "./FeedPhotoItems.module.css";

const FeedPhotoItems = ({ setModalPhoto, photo }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <>
      <li className={`${styles.photoItem}  animeLeft`} onClick={handleClick}>
        <Image src={photo.src} alt={photo.alt} />
        <span className={styles.viewItem}>{photo.acessos}</span>
      </li>
    </>
  );
};

export default FeedPhotoItems;
