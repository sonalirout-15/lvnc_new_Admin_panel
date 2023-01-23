import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { adminForgotPasswordStart } from "../../../Redux/Actions/AdminActions";

const ForgotPassword = () => {
    const [emailError, setEmailError] = useState(null);
    const history = useHistory()
    const dispatch = useDispatch();
    const [data, setData] = useState({
      email: "",
   });
  const validateEmail = (email) => {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === "") {
      setEmailError("Email is Required!");
    } else if (!validateEmail(data.email)) {
      setEmailError("Invalid Email! Please enter Valid Email...");
    } else {
      setEmailError("");
    }

    const userData = {
      email: data.email,
    };
    
    dispatch(adminForgotPasswordStart(userData));
    history.push('/dashboard')
  };
    return(
        <div id="app">
        <section class="section">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div class="login-brand">
                  <img
                    src="../assets/img/stisla-fill.svg"
                    alt="logo"
                    width="100"
                    class="shadow-light rounded-circle"
                  />
                </div>

                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Forgot Password</h4>
                  </div>
                  <div class="card-body">
                    <form method="POST" onSubmit={handleSubmit}>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          name="email"
                          tabindex="1"
                          value={data.email}
                          onChange={handleChange}
                          autofocus
                        />
                      </div>
                      <label style={{color: "red", marginLeft:'2%', display:'flex'}}>{emailError}</label>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg btn-block"
                          tabindex="4"
                        >
                          Forgot Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="simple-footer">Copyright &copy; Stisla 2018</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default ForgotPassword;