import React from "react";
import API from "../api";

export default function Post({ post }) {
  const handleLike = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await API.patch(`/posts/${post._id}/like`, { userId: user._id });
    console.log("Liked:", res.data);
  };

  return (
    <div>
      <h3>{post.firstName} {post.lastName}</h3>
      <p>{post.description}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}
