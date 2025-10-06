import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import { GET_PHOTOS } from "../../api";

import FeedPhotoItems from "./FeedPhotoItems";
import Loading from "../helper/Loading";

import styles from "./FeedPhoto.module.css";

const FeedPhoto = ({ user, page }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = GET_PHOTOS({ page, total: 3, user });

      await request(url, options);
    };
    fetchPhotos();
  }, [request, user, page]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <ul className={`${styles.feed}`}>
          {data.map(photo => (
            <FeedPhotoItems key={photo.id} photo={photo} />
          ))}
        </ul>
      </>
    );
};

export default FeedPhoto;
