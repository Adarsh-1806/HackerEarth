import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AddBlog() {
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(state);
    console.log(data);
    fetch("http://localhost:9000/addblog", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: data,
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
      <Navbar />
      <div className="container d-flex justify-content-center border p-2 w-50">
        <form className="w-50 " onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setState({ ...state, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Technology
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) =>
                setState({ ...state, technology: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBlog;
