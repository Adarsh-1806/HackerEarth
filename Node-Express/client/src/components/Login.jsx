import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    fetch("http://localhost:9000/login", {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(state),
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
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Username"
              onChange={(e) => setState({ ...state, username: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="pass"
              placeholder="Password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-sm">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
