import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhoto from "./FeedPhoto";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </>
  );
};

export default Feed;
