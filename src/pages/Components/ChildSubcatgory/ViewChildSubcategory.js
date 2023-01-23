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
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Child Subcategories</h1>
          </div>
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h4>Single Child Subcategory</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/childSubcategory'} classNameName="btn btn-primary">Back</Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
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
                          <td><div ><label>{ singleData[0]?.status === 0 ? (<div className="badge badge-danger">Inactive</div>) : (<div className="badge badge-success">Active</div>)}</label></div></td>
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