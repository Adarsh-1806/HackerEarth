import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
function Blogs() {
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch("http://localhost:9000/blogs")
      .then((res) => res.json())
      .then((res) => setState(res.blogs));
  }, []);
  console.log(state);
  if (state === null) {
    return (
      <>
        <Navbar />
        <h1>No Blogs Available</h1>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Blogs</h1>
          {state.map((blog) => (
            <div className="card my-2" key={blog.id}>
              <h5 className="card-header">{blog.title}</h5>
              <div className="card-body">
                <h5 className="card-title">{blog.technology}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Blogs;
