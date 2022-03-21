import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [state, setState] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9000/signup", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          alert(data.err.details[0].message);
          console.log(data.err);
        } else {
          console.log(data.msg);
          navigate("/");
        }
      });
  }
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center border p-2 w-50">
        <form className="w-50 " onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">FirstName</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setState({ ...state, firstName: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Surname
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setState({ ...state, surname: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setState({ ...state, pass: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ReEnter Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setState({ ...state, confPass: e.target.value })}
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

export default SignIn;
