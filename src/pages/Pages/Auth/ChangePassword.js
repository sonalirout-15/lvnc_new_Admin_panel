import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { adminChangePasswordStart } from "../../../Redux/Actions/AdminActions";

const ChangePassword = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [submit , setSubmit] = useState();
    const [data, setData] = useState({
      currentPassword:'',
      newPassword:''
    })

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
        if(data.currentPassword !== '' && data.newPassword !== '') {
          var changePassData = {
            currentPassword: data.currentPassword,
            newPassword: data.newPassword
          }
          dispatch(adminChangePasswordStart(changePassData))
        }  
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
                  <h4>Change Password</h4>
                </div>

                <div class="card-body">
                  <p class="text-muted">
                     Change password
                  </p>
                  <form method="POST" onSubmit={handleSubmit}>

                    <div class="form-group">
                      <label for="password">Current Password</label>
                      <input
                        id="currentPassword"
                        type="password"
                        class="form-control pwstrength"
                        data-indicator="pwindicator"
                        name="currentPassword"
                        tabindex="2"
                        value={data.currentPassword}
                        onChange={handleChange}
                      />
                      <div id="pwindicator" class="pwindicator">
                        <div class="bar"></div>
                        <div class="label"></div>
                      </div>
                    </div>
                    <label style={{color: "red", marginLeft:'2%', display:'flex'}}>
                    {submit && !data.currentPassword && <small className="p-invalid">Current password required.</small>}
                    </label>
                    <div class="form-group">
                      <label for="password-confirm">New Password</label>
                      <input
                        id="newPassword"
                        type="password"
                        class="form-control"
                        name="newPassword"
                        tabindex="2"
                        value={data.newPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <label style={{color: "red", marginLeft:'2%', display:'flex'}}>
                    {submit && !data.newPassword && <small className="p-invalid">New password required.</small>}
                    </label>

                    <div class="form-group">
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg btn-block"
                        tabindex="4"
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="simple-footer">Copyright &copy; LVNC 2022</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default ChangePassword;