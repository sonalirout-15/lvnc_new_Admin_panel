import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { loadUserStart } from "../../../Redux/Actions/UserAction";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const { SearchBar } = Search;


const UsersList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserStart())
    }, [])

    const tableData = useSelector((state) => state?.user?.user?.data?.rows)
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
        { dataField: 'username', text: 'Username' },
        { dataField: 'email', text: 'Email' },
        { dataField: 'phonenumber', text: 'Mobile' },
        { dataField: 'address', text: 'Address' },
        {
            dataField: 'status', text: 'Status', formatter: (cell, row) => {
                return (
                    <>
                        {
                            row.status === 0 ? (<div class="badge badge-danger">Inactive</div>) : (<div class="badge badge-success">Active</div>)
                        }
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
                        <h1>Users List</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-20 col-md-20 col-20 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>User Details</h4>
                                    <div className="card-header-action">
                                        <Link to={'/dashboard'} className="btn btn-primary"> Back </Link>
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

export default UsersList;