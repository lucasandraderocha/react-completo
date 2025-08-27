import { useEffect } from "react";

import useFetch from "../../hooks/useFetch";

import { GET_PHOTO } from "../../api";
import Error from "../helper/Error";
import Loading from "../primitives/Loading";
import PhotoContent from "../photo/PhotoContent";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_PHOTO(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <article className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </article>
  );
};

export default FeedModal;
