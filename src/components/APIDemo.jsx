import React, { useState, useEffect } from "react";
import axios from "axios";

//to make API call we must install AXIOS => npm install axios
export function APIDemo() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //to use axios with id, backtick(`) must be used instead of ""
    //when we change the id such as 2,3,4 data changes
    //also useEffect should be called only when we change the id, so [id] added
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPosts(response.data));
  }, [id]);
  return (
    <div>
      <h1>API DEMO</h1>
      <button onClick={() => setId((prev) => prev + 1)}>increment</button>
      {/* {posts.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div> 
      ))} */}
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </div>
  );
}
