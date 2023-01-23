import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdminStart } from "../../Redux/Actions/AdminActions";
import { loadBannerImageStart } from "../../Redux/Actions/BannerImageAction";
import { loadCampaningStart } from "../../Redux/Actions/CampaignActions";
import { loadCategoryStart } from "../../Redux/Actions/CategoryAction";
import { loadChildSubcategoryStart } from "../../Redux/Actions/ChildSubcategoryAction";
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsActions";
import { loadMettersStart } from "../../Redux/Actions/MattersActions";
import { loadPostStart } from "../../Redux/Actions/PostActions";
import { loadSubcategoryStart } from "../../Redux/Actions/SubcategoryActions";
import {  loadUserStart } from "../../Redux/Actions/UserAction";

const GeneralDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdminStart());
  }, []);

  useEffect(() => {
    dispatch(loadCategoryStart());
  }, []);

  useEffect(() => {
    dispatch(loadSubcategoryStart());
  }, []);

  useEffect(() => {
    dispatch(loadChildSubcategoryStart())
  },[])

  useEffect(() => {
    dispatch(loadMettersStart());
  }, []);

  useEffect(() => {
    dispatch(loadPostStart());
  }, []);

  useEffect(() => {
    dispatch(loadCampaningStart());
  }, []);

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  useEffect(() => {
    dispatch(loadBannerImageStart());
  }, []);

  useEffect(() => {
    dispatch(loadLatestNewsStart())
  }, [])

  const AdminData = useSelector((state) => state?.admin?.admin?.count);
  const categoriesData = useSelector((state) => state?.categoryData?.categories?.categoryData?.count);
  const subcategoriesData = useSelector((state) => state?.subcategory?.subcategories?.categoryData?.count);
  const childSubcategoriesData = useSelector((state) => state?.childSubcatgory?.childSubcatgeory?.count);
  const mattersData = useSelector((state) => state?.metters?.metters?.mettersData?.count);
  const postsData = useSelector((state) => state?.post?.post?.count);
  const campaningsData = useSelector((state) => state?.campaning?.campaning?.CampaningData?.count);
  const usersData = useSelector((state) => state?.user?.user?.data?.count);
  const latestNewsData = useSelector((state) => state?.latestnewsData?.latestnews?.count);
  const bannerData = useSelector((state) => state?.banner?.bannerImageData?.BannerData);

  return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-primary">
                  <i className="far fa-user"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Admin</h4>
                  </div>
                  <div className="card-body">{AdminData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-danger">
                  <i className="fas fa-th-large"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Categories</h4>
                  </div>
                  <div className="card-body">{categoriesData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-warning">
                  <i className="fa fa-list-alt"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Subcategories</h4>
                  </div>
                  <div className="card-body">{subcategoriesData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-warning">
                  <i className="fa fa-list-alt"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Child Subcategories</h4>
                  </div>
                  <div className="card-body">{childSubcategoriesData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-info">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Matters</h4>
                  </div>
                  <div className="card-body">{mattersData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-dark">
                  <i className="fas fa-print"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Post</h4>
                  </div>
                  <div className="card-body">{postsData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-secondary">
                  <i className="fas fa-poll"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Campaning</h4>
                  </div>
                  <div className="card-body">{campaningsData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-light">
                  <i className="fa fa-newspaper"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Latest News</h4>
                  </div>
                  <div className="card-body">{latestNewsData}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fa fa-users"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Users</h4>
                  </div>
                  <div className="card-body">{usersData}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-brand">
          <img
                src='../../assets/img/logo/LVNClogo.png'
                style={{ height: '200px', width:'700px',
                backgroundColor:'#032a63',
                border: '2px solid #032a63',
                marginLeft:'300px',
                marginTop:'90px'}}
                className="rounded-rectangle"
                alt="img"
                  />
          </div>{" "}
        </section>
      </div>
  );
};

export default GeneralDashboard;
