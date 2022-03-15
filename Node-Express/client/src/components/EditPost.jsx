import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
function EditPost() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const handleUpdate = (e) => {
    e.preventDefault();
    const blog = { id: data.id, title: title, content: content };
    fetch("http://localhost:9000/updatepost", {
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
      <h1 class="d-flex justify-content-center">New Post</h1>
      <div class="container">
        <form onSubmit={handleUpdate}>
          <input type="hidden" value={data.id} name="id" />
          <div class="form-group mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Post Title
            </label>
            <input
              type="text"
              class="form-control"
              name="title"
              defaultValue={data.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="form-group mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Post Details
            </label>
            <input
              type="text"
              class="form-control"
              name="content"
              defaultValue={data.body}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary btn-sm">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditPost;
