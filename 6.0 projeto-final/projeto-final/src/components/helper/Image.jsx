import styles from "./Image.module.css";

const Image = ({ ...props }) => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.skeleton}></div>
        <img className={styles.image} {...props} />
      </section>
    </>
  );
};

export default Image;
