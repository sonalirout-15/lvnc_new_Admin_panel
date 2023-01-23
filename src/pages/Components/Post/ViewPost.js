import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSinglePostStart } from "../../../Redux/Actions/PostActions";

const ViewPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleData = useSelector((state) => state?.post?.postData?.data?.postData);


  useEffect(() => {
    dispatch(getSinglePostStart(id))
  }, [])

  return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Post</h1>
          </div>
          <div class="section-body">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Single Post</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/post'} className="btn btn-primary">Back</Link>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered table-md">
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Post Id : </label></div></td>
                          <td><div><label>{singleData?.id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Admin Ref Id : </label></div></td>
                          <td><div><label>{singleData?.admin_ref_id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Category Ref Id : </label></div></td>
                          <td><div><label>{singleData?.category_ref_id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Subcategory Ref Id : </label></div></td>
                          <td><div><label>{singleData?.subcategory_ref_id}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Child Subcategory Ref Id : </label></div></td>
                          <td><div><label>{singleData?.childcategory_ref_id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="name" style={{ fontWeight: 'bold' }}>Title : </label></div></td>
                          <td><div><label>{singleData?.title}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="email" style={{ fontWeight: 'bold' }}>Description : </label></div></td>
                          <td><div><label>{singleData?.description}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="image" style={{ fontWeight: 'bold' }}>Image : </label></div></td>
                          <td><div><label><img src={singleData?.image} style={{ height: "60px" }}></img></label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="audio" style={{ fontWeight: 'bold' }}>Audio : </label></div></td>
                          <td><div><label><audio controls><source src={singleData?.audio} type='audio/mp3' style={{ height: "30px" }} /></audio></label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="vedio" style={{ fontWeight: 'bold' }}>Video : </label></div></td>
                          <td><div><label><video width="200" height="100" controls><source src={singleData?.video} type="video/mp4"/></video></label></div></td>
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

export default ViewPost;