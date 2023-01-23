import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {getSingleBannerImageStart} from '../../../Redux/Actions/BannerImageAction'

const ViewBanner = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const singleData = useSelector((state) => state?.banner?.bannerData?.BannerData)

  useEffect(() => {
    dispatch(getSingleBannerImageStart(id))
  }, [])

  return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Banner</h1>
          </div>
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Single Banner Image</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/banner'} classNameName="btn btn-primary">Back</Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Banner Id : </label></div></td>
                          <td><div><label>{singleData?.id}</label></div></td>
                        </tr>
                        <tr>
                          <td><div><label htmlFor="name" style={{ fontWeight: 'bold' }}>Title : </label></div></td>
                          <td><div><label>{singleData?.imageName}</label></div></td>
                        </tr>

                        <tr>
                          <td><div><label htmlFor="image" style={{ fontWeight: 'bold' }}>Image : </label></div></td>
                          <td><div><label><img src={singleData?.image} style={{ height: "60px" }}></img></label></div></td>
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
  )
}

export default ViewBanner;



