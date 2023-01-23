import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleAdminStart } from "../../../Redux/Actions/AdminActions";

const ViewAdmin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleData = useSelector((state) => state?.admin?.adminData);


  useEffect(() => {
    dispatch(getSingleAdminStart(id))
  }, [])

  return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Admin</h1>
          </div>
          <div class="section-body">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Single Admin</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/admins'} className="btn btn-primary">Back</Link>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered table-md">
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Admin Id : </label></div></td>
                          <td><div><label>{singleData?.id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="name" style={{ fontWeight: 'bold' }}>Name : </label></div></td>
                          <td><div><label>{singleData?.name}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="email" style={{ fontWeight: 'bold' }}>Email : </label></div></td>
                          <td><div><label>{singleData?.email}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="mobile" style={{ fontWeight: 'bold' }}>Mobile No : </label></div></td>
                          <td><div><label>{singleData?.mobile}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="gender" style={{ fontWeight: 'bold' }}>Gender : </label></div></td>
                          <td><div><label>{singleData?.gender}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="address" style={{ fontWeight: 'bold' }}>Address : </label></div></td>
                          <td><div><label>{singleData?.address}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="image" style={{ fontWeight: 'bold' }}>Image : </label></div></td>
                          <td><div><label><img src={singleData?.image} style={{ height: "82px" }}></img></label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="status" style={{ fontWeight: 'bold' }}>Status</label></div></td>
                          <td><div ><label>{ singleData?.status === 0 ? (<div class="badge badge-danger">Inactive</div>) : (<div class="badge badge-success">Active</div>)}</label></div></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default ViewAdmin;