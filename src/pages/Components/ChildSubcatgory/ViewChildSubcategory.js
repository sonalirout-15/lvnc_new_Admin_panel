import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleChildSubcategoryStart } from "../../../Redux/Actions/ChildSubcategoryAction";


const ViewChildSubcategory = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const singleData = useSelector((state) => state?.childSubcatgory?.childSubcategoryData)

  useEffect(() => {
    dispatch(getSingleChildSubcategoryStart(id))
  }, [])

  return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Child Subcategories</h1>
          </div>
          <div class="section-body">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-8">
                <div class="card">
                  <div class="card-header">
                    <h4>Single Child Subcategory</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/childSubcategory'} className="btn btn-primary">Back</Link>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered table-md">
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Child Subcategory Id : </label></div></td>
                          <td><div><label>{singleData[0]?.id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Subcategory Ref Id : </label></div></td>
                          <td><div><label>{singleData[0]?.Subcategory_ref_id}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="name" style={{ fontWeight: 'bold' }}>Title : </label></div></td>
                          <td><div><label>{singleData[0]?.title}</label></div></td>
                        </tr>
                        
                        <tr>
                          <td><div><label htmlFor="Description" style={{ fontWeight: 'bold' }}>Description : </label></div></td>
                          <td><div><label>{singleData[0]?.Description}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="image" style={{ fontWeight: 'bold' }}>Image : </label></div></td>
                          <td><div><label><img src={singleData[0]?.image} style={{ height: "60px" }}></img></label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="status" style={{ fontWeight: 'bold' }}>Status : </label></div></td>
                          <td><div ><label>{ singleData[0]?.status === 0 ? (<div class="badge badge-danger">Inactive</div>) : (<div class="badge badge-success">Active</div>)}</label></div></td>
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

export default ViewChildSubcategory;