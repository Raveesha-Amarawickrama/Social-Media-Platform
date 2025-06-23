import React, { useEffect, useState } from "react";
import API from "../api";
import Post from "../components/Post";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {posts.map((p) => <Post key={p._id} post={p} />)}
    </div>
  );
}
