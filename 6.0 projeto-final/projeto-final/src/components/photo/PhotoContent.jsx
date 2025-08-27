import styles from "./PhotoContent.module.css";

const PhotoContent = ({ data }) => {
  return (
    <>
      <section className={styles.photo}>
        <img src={data.src} alt={data.title} />
      </section>
    </>
  );
};

export default PhotoContent;
