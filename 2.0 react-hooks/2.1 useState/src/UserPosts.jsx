import React from "react";

const UserPosts = ({ userData }) => {
  const [post, setPost] = React.useState(null);

  const handlePostLoaded = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`
    );
    const json = await res.json();
    setPost(json);
    console.log(json);
  };
  return (
    <>
      <div>
        <button onClick={handlePostLoaded}>Post</button>
        {post &&
          post.map(({ id, title }) => (
            <ul>
              <li>
                {id}
                <p>{title}</p>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default UserPosts;
