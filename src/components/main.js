import React, {Component} from 'react';
import Table from './table';
import NoData from './noData';
import CustomerList from './helper';
const tableData = CustomerList();
var displayTable = false;

class Main extends React.Component{
  constructor(){
    this.state = {'searchTxt': '', data: []};
    this.filterTable = this.filterTable.bind(this);
    this.setSearchTxt = this.setSearchTxt.bind(this);
    this.starClick = this.starClick.bind(this);
  }
  setSearchTxt(e){
    this.setState({searchTxt: e.target.value});
  }
  filterTable(e){
    e.preventDefault()

    let searchTxt = this.state.searchTxt;
    let data = tableData;
    data = data.filter(record => {
      return Object.keys(record).some(key => record[key].toString().search(searchTxt) !== -1);
    });
    this.setState({'data': data});

    displayTable = (data.length > 0 && this.state.searchTxt != '') ? true : false;   
  }
  starClick(){
    displayTable = true;
    this.setState({'data': tableData});
  }
  render(){
    return(
      <div>
      <div className="search-form">
      <div>
        <h3>Enter the search text</h3>
      </div>
      <form onSubmit={this.filterTable}>
        <div className="form-group">
        <input type="text" value={this.state.searchTxt} onChange={this.setSearchTxt} />
        <button type='submit' onClick={this.filterTable}>Search</button>
        <span className="star" onClick={this.starClick}>*</span>
        </div>
        </form>
      </div>
      {displayTable ? <Table data = {this.state.data} /> : <NoData />} 
      </div>
    )
  }
}
export default Main;