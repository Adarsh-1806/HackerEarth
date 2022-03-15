import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Posts() {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      });
  }, [state]);
  const handleEdit = (post) => {
    navigate("/editpost", {
      state: { data: post },
    });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:9000/deletepost/${id}`)
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          console.log(data.err);
        } else {
          navigate("/");
        }
      });
  };
  return (
    <>
      <h4 className="d-flex justify-content-center">Hello {state.user}</h4>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {!state.posts ? (
              <tr>No Data</tr>
            ) : (
              <>
                {state.posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={(id) => handleEdit(post)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(id) => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            navigate("/addpost");
          }}
        >
          Add Post
        </button>
      </div>
    </>
  );
}
export default Posts;
