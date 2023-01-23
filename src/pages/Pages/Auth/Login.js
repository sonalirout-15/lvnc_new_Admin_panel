import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { adminLoginStart } from "../../../Redux/Actions/AdminActions";

const Login = () =>  {

  const dispatch = useDispatch();
  const history = useHistory();
  const admin = useSelector((state) =>state?.admin?.adminLogin);

  const [submit , setSubmit] = useState();
  const [data, setData] = useState({
    email:'',
    password:''
  })

  const validateEmail = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
};

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setData(data)
    if(data.email !== '' && data.password !== '') {
      var loginData = {
        email: data.email,
        password: data.password
      }
      dispatch(adminLoginStart(loginData))
    }  
};

  if (admin?.message === 'Login successful'){
    history.push("/dashboard");
  }

    return (
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="login-brand">
                  <img
                    src="../assets/img/stisla-fill.svg" 
                    alt="logo"
                    width="100"
                    className="shadow-light rounded-circle"
                  />
                </div>

                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Login</h4>
                  </div>

                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value={data.email}
                          onChange={handleChange} 
                        />
                      <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                          {submit && !data.email && <small className="p-invalid">Email required.</small> || submit && !validateEmail(data.email) && <small className="p-invalid">Please Enter Valid Email!</small>}
                        </label>
                      </div>

                      <div className="form-group">
                        <div className="d-block">
                          <label className="control-label">Password</label>
                          <div className="float-right">
                            <Link
                              to={`/forgot-password`}
                              className="text-small"
                            >
                              Forgot Password?
                            </Link>
                            
                          </div>
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                        />
                        <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                           {submit && !data.password && <small className="p-invalid">Password required.</small>}
                        </label>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          tabIndex="4"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <div className="row sm-gutters">
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-muted text-center">
                  Don't have an account?{" "}
                  <Link to='/signup'>Create One</Link>
                </div>
                <div className="simple-footer">
                  Copyright &copy; LVNC 2022
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
export default Login;
