import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { ReactTableDefaults } from "react-table";

class Table extends React.Component{
  
  render(){
    console.log("this.props.data", this.props.data);
    const pageSize =5;
    this.state = {data: this.props.data};
    Object.assign(ReactTableDefaults, {
    showPagination: false,
    minRows: this.state.data.length
    // etc...
  });
    const columns = [{
    Header: 'First Name',
    accessor: 'fname', // String-based value accessors!
    headerClassName: 'head'
  }, {
    Header: 'Last Name',
    accessor: 'lname',
    headerClassName: 'head'
  }, {    
    Header: 'Email',
    accessor: 'email',
    headerClassName: 'head'
  }]
    return(
      <div className="table-section">
     <ReactTable data={this.state.data}
    columns={columns}
  />
  </div>
    )
  }
}
export default Table;