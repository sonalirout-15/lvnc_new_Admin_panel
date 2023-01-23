import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadAdminStart } from "../../../Redux/Actions/AdminActions";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const { SearchBar } = Search;

const Admins = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadAdminStart())
  }, [])
  const tableData = useSelector((state) => state?.admin?.admin?.rows)
  const [data, setData] = useState(tableData);

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const columns = [
    {
      text: 'No', formatter: (cell, row, rowIndex, formateExtraData) => {
        return rowIndex + 1;
      }, sort: true
    },
    { dataField: 'name', text: 'Name' },
    { dataField: 'email', text: 'Email' },
    { dataField: 'mobile', text: 'Mobile' },
    { dataField: 'gender', text: 'Gender' },
    { dataField: 'address', text: 'Address' },
    {
      dataField: 'image', text: 'Image', formatter: (cell, row) => {
        return (
          <img src={row.image} style={{ height: "50px" }} />
        )
      }
    },
    {
      dataField: 'status', text: 'Status', formatter: (cell, row) => {
        return (
          <>
            {
              row.status === 0 ? (<div className="badge badge-danger">Inactive</div>) : (<div className="badge badge-success">Active</div>)
            }
          </>
        )
      }
    },
    {
      text: 'Action', formatter: (cell, row) => {
        return (
          <>
            <a
              className="btn btn-primary btn-action mr-1"
              data-toggle="tooltip"
              title="Edit"
              onClick={() => history.push(`/editAdmin/${row.id}`)}
            >
              <i className="far fa-edit"></i>
            </a>{" "}
            <a
              className="btn btn-info btn-action"
              data-toggle="tooltip"
              title="View"
              onClick={() => history.push(`viewAdmin/${row.id}`)}
            >
              <i className="fas fa-eye"></i>
            </a>
          </>
        )
      }
    },
  ]

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
            <h1>Admins</h1>
          </div>
          <div className="row">
            <div className="col-lg-50 col-md-16 col-16 col-sm-50">
              <div className="card">
                <div className="card-header">
                  <h4>Admin Details</h4>
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
                            <h4 style={{ marginLeft: '10px' }}></h4>
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


export default Admins;