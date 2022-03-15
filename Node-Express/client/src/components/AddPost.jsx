import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title: title, content: content };
    fetch("http://localhost:9000/savepost", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          console.log(data.err);
        } else {
          console.log(data.msg);
          navigate("/");
        }
      });
  };
  return (
    <>
      <h1 className="d-flex justify-content-center">New Post</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Post Details
            </label>
            <input
              type="text"
              className="form-control"
              name="content"
              placeholder="Details"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-sm">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddPost;
