import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { deletePostStart, loadPostStart } from "../../../Redux/Actions/PostActions";
import swal from "sweetalert";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const { SearchBar } = Search;

const Post = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postData = useSelector((state) => state?.post?.post?.rows)

  useEffect(() => {
    dispatch(loadPostStart())
  }, [])

  const [data, setData] = useState(postData)
  useEffect(() => {
    setData(postData)
  }, [postData])

  const columns = [
    {
      text: 'No', formatter: (cell, row, rowIndex, formateExtraData) => {
        return rowIndex + 1;
      },
      sort: true
    },
    { dataField: 'admin_ref_id', text: 'Admin Ref Id' },
    { dataField: 'category_ref_id', text: 'Category Ref Id' },
    { dataField: 'subcategory_ref_id', text: 'Subcategory Ref Id' },
    { dataField: 'childcategory_ref_id', text: 'Child Subcategory Ref Id' },
    { dataField: 'title', text: 'Title', sort: true },
    { dataField: 'description', text: 'Description', sort: true },
    {
      dataField: 'image', text: 'Image', formatter: (cell, row) => {
        return (
          <img src={row.image} style={{ height: "100px" }} />
        )
      }
    },
    {
      dataField: 'audio', text: 'Audio', formatter: (cell, row) => {
        return (
          <audio controls style={{ height: '50px', width: '110px' }}><source src={row.audio} type='audio/mp3' /></audio>
        )
      }
    },
    {
      dataField: 'video', text: 'Video', formatter: (cell, row) => {
        return (
          <video controls style={{ height: '70px' }}><source src={row.video} type="video/mp4" /></video>
        )
      }
    },
    { dataField: 'status', text: 'Status', sort: true , formatter:(cell, row) => {
      return (
        <>
        {
            row.status === 0 ? (<div class="badge badge-danger">Inactive</div>) : (<div class="badge badge-success">Active</div>)
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
              onClick={() => history.push(`/editPost/${row.id}`)}
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
              onClick={() => history.push(`viewPost/${row.id}`)}
              >
                <i className="fas fa-eye"></i>
            </a>
          </>
        )
      }
    },
  ]

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
  }).then((willDelete) => {
      if (willDelete) {
          dispatch(deletePostStart(id))
          swal("Post deleted successfully!", {
              icon: "success",
          });
      } else {
          swal("Your data is safe!");
      }
  });
  }

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 4,
    lastPageText: '>>',
    firstPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage)
      console.log()
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage)
    }
  })

  return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Post</h1>
          </div>
          <div className="row">
            <div className="col-lg-18 col-md-12 col-12 col-sm-26">
              <div className="card">
                <div className="card-header">
                  <h4>Post Details</h4>
                  <div className="card-header-action">
                    <Link to={'/addPost'} className="btn btn-primary">+ New </Link>
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
                              pagination={pagination}
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

export default Post;