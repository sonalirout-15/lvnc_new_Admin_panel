import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleSubcategoryStart } from "../../../Redux/Actions/SubcategoryActions";

const ViewSubcategories = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const singleData = useSelector((state) => state?.subcategory?.cateData[0])


  useEffect(() => {
    dispatch(getSingleSubcategoryStart(id))
  }, [])

  return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Subcategories</h1>
          </div>
          <div class="section-body">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-8">
                <div class="card">
                  <div class="card-header">
                    <h4>Single Subcategory</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/subcategories'} className="btn btn-primary">Back</Link>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered table-md">
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Subcategory Id : </label></div></td>
                          <td><div><label>{singleData?.id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Category Ref Id : </label></div></td>
                          <td><div><label>{singleData?.category_ref_id}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="name" style={{ fontWeight: 'bold' }}>Subcategory Name : </label></div></td>
                          <td><div><label>{singleData?.subcategory_name}</label></div></td>
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

export default ViewSubcategories;