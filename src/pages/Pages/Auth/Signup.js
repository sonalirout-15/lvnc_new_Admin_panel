import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createAdminStart } from "../../../Redux/Actions/AdminActions";


const Signup = () =>  {

  const dispatch = useDispatch();
  const history = useHistory();
  const adminData = useSelector((state) => state?.admin?.admin);

  const [submit , setSubmit] = useState();
  const [data, setData] = useState({
    name : '',
    email:'',
    password:'',
    confirm_password: '',
    mobile:'',
    gender:'',
    address : '',
    image : ''
  })

  const validateEmail = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?!.* )(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
  return re.test(String(password))
}

const validatePhoneNum = (mobile) => {
  const reg = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  return reg.test(mobile)
}

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name] : value,
    })
  }

  const handleFileSelect = (e) => {
  setData({ ...data, [e.target.name]: e.target.files[0] });
  };



const handleSubmit = (e) => {
  e.preventDefault();
  setSubmit(true);
  setData(data)
  if(data.name !== '' &&  data.email !== '' && data.password !== '' && data.confirm_password !== '' && data.mobile !== '' && data.gender !== '' &&  data.address !== '' && data.image !== '') {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirm_password", data.confirm_password);
    formData.append("mobile", data.mobile);
    formData.append("gender", data.gender);
    formData.append("address", data.address);
    formData.append("image", data.image);
    dispatch(createAdminStart(formData));
  }  
};

if(adminData?.message === 'Success') {
  history.push('/')
}

    return (
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-14 col-sm-10 offset-sm-4 col-md-8 offset-md-5 col-lg-8 offset-lg-5 col-xl-6 offset-xl-3">
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
                    <h4>Signup</h4>
                  </div>

                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={data.name}
                          name="name"
                          onChange={handleChange}
                        />
                       <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                          {submit && !data.name && <small className="p-invalid">Name required.</small>}
                        </label>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          value={data.email}
                          name="email"
                          onChange={handleChange} />
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
                        <label>Password Strength</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            id="password"
                            value={data.password}
                            name="password"
                            onChange={handleChange}
                          />
                           <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                           {submit && !data.password && <small className="p-invalid">Password required.</small> || submit && !validatePassword(data.password) && <small className="p-invalid">Please Enter Valid Password!</small>}
                        </label>
                        </div>
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar"></div>
                          <div className="label"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            id="confirm_password"
                            value={data.confirm_password}
                            name="confirm_password"
                            onChange={handleChange}
                          />
                           <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                          {submit && !data.confirm_password && <small className="p-invalid">Confirm Password required.</small>}
                        </label>
                        </div>
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar"></div>
                          <div className="label"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Phone Number (US Format)</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-phone"></i>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control phone-number"
                            id="mobile"
                            value={data.mobile}
                            name="mobile"
                            onChange={handleChange}
                          />
                        </div>
                        <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                        {submit && !data.mobile && <small className="p-invalid">Moible No required.</small> || submit && !validatePhoneNum(data.mobile) && <small className="p-invalid">Please Enter Valid Mobile No!</small>}
                        </label>
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <div onChange={handleChange}>
                          <input type="radio" value="Male" name="gender" /> Male {" "}
                          <input type="radio" value="Female" name="gender"  /> Female {" "}
                          <input type="radio" value="Other" name="gender"/> Other {" "}
                        </div>
                        <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                          {submit && !data.gender && <small className="p-invalid">Gender required.</small>}
                        </label>
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          value={data.address}
                          name="address"
                          onChange={handleChange} />
                        <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                          {submit && !data.address && <small className="p-invalid">Address required.</small>}
                        </label>
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          type="file"
                          className="form-control"
                          accept="/accept/*"
                          id="image"
                          defaultValue={data.image}
                          name="image"
                          onChange={handleFileSelect} />
                        <label style={{
                           color : "red",
                           marginLeft:"2%",
                           display: "flex",
                           fontFamily : 'bold',
                           fontSize: '15px'
                        }}>
                          {submit && !data.image && <small className="p-invalid">Image required.</small>}
                        </label>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          tabIndex="4"
                        >
                          Signup
                        </button>
                      </div>
                    </form>
                    <div className="row sm-gutters">
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-muted text-center">
                  Have already an account?{" "}
                  <Link to={'/'}>Login</Link>
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
export default Signup;
