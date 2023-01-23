import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteMettersStart, loadMettersStart } from "../../../Redux/Actions/MattersActions";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import swal from "sweetalert";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const { SearchBar } = Search;

const Matters = () => {

  const dispatch = useDispatch();
  const history = useHistory()
  const mettersData = useSelector((state) => state?.metters?.metters?.mettersData?.rows)

  useEffect(() => {
    dispatch(loadMettersStart())
  }, [])
  
  const [data, setData] = useState(mettersData)

  useEffect(() => {
    setData(mettersData)
  }, [mettersData])

  const columns = [
    {
      text: 'No', formatter: (cell, row, rowIndex, formateExtraData) => {
        return rowIndex + 1;
      },
      sort: true
    },
    { dataField: 'title', text: 'Title', sort: true },
    { dataField: 'Description', text: 'Description', sort: true },
    {
      dataField: 'image', text: 'Image', formatter: (cell, row) => {
        return (
          <img src={row.image} style={{ height: "50px" }} />
        )
      }
    },
    {
      dataField: 'audio', text: 'Audio', formatter: (cell, row) => {
        return (
          <audio controls style={{ height: '40px', width: '120px' }}><source src={row.audio} type='audio/mp3' /></audio>
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
              onClick={() => history.push(`/editMatters/${row.id}`)}
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
              onClick={() => history.push(`viewMatters/${row.id}`)}
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
          dispatch(deleteMettersStart(id))
          swal("Matters deleted successfully!", {
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
  });

  return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Matters</h1>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-14 col-14 col-sm-24">
              <div className="card">
                <div className="card-header">
                  <h4>Matters Details</h4>
                  <div className="card-header-action">
                    <Link to={'/addMatters'} className="btn btn-primary">+ New</Link>
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
                            classes="react-bootstrap-table-next"
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

export default Matters;