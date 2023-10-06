import { useEffect, useState } from "react";
import { PostData } from "../types/types";
import "./PostList.css";

function PostList() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="postContainer">
      <h1>Post List</h1>
      <ul className="postList">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="title">{post.title}</h2>
            <p className="body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
