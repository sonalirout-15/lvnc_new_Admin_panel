import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleCategoryStart } from "../../../Redux/Actions/CategoryAction";

const ViewCategories = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleData = useSelector((state) => state?.categoryData);
  // console.log('SingleData~~~~~~~~~>>>', singleData)

  useEffect(() => {
    dispatch(getSingleCategoryStart(id))
  }, [])

  return (
    <>
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Category</h1>
          </div>
          <div className="section-body">
            <div className="row">
              <div className="col-10 col-md-4 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Single Category</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/categories'} classNameName="btn btn-primary">Back</Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Category Id : </label></div></td>
                          <td><div><label>{singleData?.id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="name" style={{ fontWeight: 'bold' }}>Name : </label></div></td>
                          <td><div><label>{singleData?.category_name}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="status" style={{ fontWeight: 'bold' }}>Status</label></div></td>
                          <td><div ><label>{ singleData?.status === 0 ? (<div className="badge badge-danger">Inactive</div>) : (<div className="badge badge-success">Active</div>)}</label></div></td>
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
    </>
  )
}

export default ViewCategories;