import React, { useEffect, useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteBannerImageStart, loadBannerImageStart } from "../../../Redux/Actions/BannerImageAction";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const { SearchBar } = Search;

const BannerImage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const bannerData = useSelector((state) => state?.banner?.bannerImageData)

    useEffect(() => {
      dispatch(loadBannerImageStart())
    }, [bannerData])

    const [data, setData] = useState(bannerData)
    
    useEffect(() => {
      setData(bannerData)
    },[bannerData])
    
const handleDelete = (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            dispatch(deleteBannerImageStart(id))
            swal("BannerImage deleted successfully!", {
                icon: "success",
            });
        } else {
            swal("Your data is safe!");
        }
    });
    }
    
    const columns = [
    {
      text: 'No', formatter: (cell, row, rowIndex, formateExtraData) => {
        return rowIndex + 1;
      }, sort: true
    },
    { dataField: 'imageName', text: 'Title', sort: true },
    {
      dataField: 'image', text: 'Image', formatter: (cell, row) => {
        return (
          <img src={row.image} style={{ height: "50px" }} />
        )
      }
    },
    { dataField: 'status', text: 'Status', sort: true , formatter:(cell, row) => {
      return (
        <>
        {
            row.status === 0 ? (<div className="badge badge-danger">Inactive</div>) : (<div className="badge badge-success">Active</div>)
        }
        </>
      )
    }},
    {
      text: 'Action', formatter: (cell, row) => {
        return (
          <>
            <a
              className="btn btn-primary btn-action mr-1"
              data-toggle="tooltip"
              title="Edit"
              onClick={() => history.push(`/editBanner/${row.id}`)}
             >
              <i className="far fa-edit"></i>
           </a>{" "}
           <a
              className="btn btn-danger btn-action"
              data-toggle="tooltip"
              title="Delete"
              onClick={() => handleDelete(row.id)}
              >
              <i className="fas fa-trash"></i>
            </a>{" "}
            <a
              className="btn btn-info btn-action"
              data-toggle="tooltip"
              title="Delete"
              onClick={() => history.push(`viewBanner/${row.id}`)}
              >
                <i className="fas fa-eye"></i>
            </a>
          </>
        )
      }
    },
  ]

  // const pagination = paginationFactory({
  //   page: 1,
  //   sizePerPage: 4,
  //   lastPageText: '>>',
  //   firstPageText: '>>',
  //   prePageText: '<',
  //   showTotal: true,
  //   alwaysShowAllBtns: true,
  //   onPageChange: function (page, sizePerPage) {
  //     console.log('page', page);
  //     console.log('sizePerPage', sizePerPage)
  //     console.log()
  //   },
  //   onSizePerPageChange: function (page, sizePerPage) {
  //     console.log('page', page);
  //     console.log('sizePerPage', sizePerPage)
  //   }
  // })

    return (
      <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Banner</h1>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 col-sm-25">
            <div className="card">
              <div className="card-header">
                <h4>Banner Details</h4>
                <div className="card-header-action">
                  <Link to={'/addBanner'} className="btn btn-primary">+ New </Link>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <ToolkitProvider
                    keyField="id"
                    columns={columns}
                    data={data}
                    search
                  >
                    {
                      props => (
                        <>
                          <h3 style={{ marginLeft: '10px' }}></h3>
                          <SearchBar {...props.searchProps} style={{ marginLeft: '10px' }} />
                          <BootstrapTable
                            {...props.baseProps}
                            pagination={paginationFactory()}
                          />
                        </>
                      )
                    }
                  </ToolkitProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}


export default BannerImage;