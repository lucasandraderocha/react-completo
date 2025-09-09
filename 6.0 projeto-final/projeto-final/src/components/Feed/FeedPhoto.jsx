import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import { GET_PHOTOS } from "../../api";

import FeedPhotoItems from "./FeedPhotoItems";
import Loading from "../helper/Loading";

import styles from "./FeedPhoto.module.css";

const FeedPhoto = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = GET_PHOTOS({ page: 1, total: 6, user: 0 });

      await request(url, options);
    };
    fetchPhotos();
  }, [request]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <ul className={`${styles.feed}`}>
          {data.map(photo => (
            <FeedPhotoItems
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </>
    );
};

export default FeedPhoto;
