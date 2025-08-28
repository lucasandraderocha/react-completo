import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";
import PhotoComments from "./PhotoComments";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <section className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <section className={styles.author}>
            <p>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            </p>
            <span className={styles.views}>{photo.acessos}</span>
          </section>
          <section className={styles.attributes}>
            <h1 className={`${styles.modalTitle} animeLeft hoverLetter`}>
              <Link to={`/picture/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul>
              <li>{photo.peso}kg</li>
              <li>
                {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}
              </li>
            </ul>
          </section>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </section>
  );
};

export default PhotoContent;
