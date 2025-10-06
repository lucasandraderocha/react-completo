import { useContext, useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhoto from "./FeedPhoto";
import UserContext from "../../UserContext";

const Feed = ({ user }) => {
  const { modalPhoto } = useContext(UserContext);
  const [pages, setPages] = useState([1]);
  useEffect(() => {
    const infiniteScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll < height * 0.85)
        return setPages(pages => [...pages, pages.length + 1]);
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      {pages.map(page => (
        <FeedPhoto key={page} page={page} user={user} />
      ))}
    </>
  );
};

export default Feed;
