import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleCampaningStart } from "../../../Redux/Actions/CampaignActions";

const ViewCampaign = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const singleData = useSelector((state) => state?.campaning?.CampaningData)

  useEffect(() => {
    dispatch(getSingleCampaningStart(id))
  }, [])

  return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Campaign</h1>
          </div>
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Single Campaign</h4>
                    <Link style={{ marginLeft: '70%' }} to={'/campaign'} classNameName="btn btn-primary">Back</Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
                        <tr>
                          <td><div><label htmlFor="id" style={{ fontWeight: 'bold' }}>Campaign Id : </label></div></td>
                          <td><div><label>{singleData?.id}</label></div></td>
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
                          <td><div><label htmlFor="vedio" style={{ fontWeight: 'bold' }}>Vedio : </label></div></td>
                          <td><div><label><video width="200" height="100" controls><source src={singleData?.video} type="video/mp4"/></video></label></div></td>
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

export default ViewCampaign;



