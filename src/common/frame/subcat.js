import React, {Component} from 'react';

import SelectPicker from '../../common/form/selectpicker';

class SubCategory extends Component {
  constructor (props) {
    super (props)
    this.state = {
      sortBy: 'Date, new to old'
    };
    this.sorting = this.sorting.bind(this);
  }

  sorting (e) {
    console.log("sort by: ", e.target.value);
    this.setState({sortBy: e.target.value});
  }

  render () {

    return (
      <div id="category-block">
        <div className="col-sm-2"></div>
        <div className="category col-lg-6 col-sm-2 offset-md-1">
          <center>
            <h1 className="cat-style">Tops</h1>
            <div className="sorting-block">
              <SelectPicker name="sorting-by" id="sorting-by" withArrow onChange={this.sorting}>
                <option value="Featured">Featured</option>
                <option value="Price, low to high">Price, low to high</option>
                <option value="Price, hight to low">Price, high to low</option>
                <option value="Alphabeically, A-Z">Alphabeically, A-Z</option>
                <option value="Alphabeically, Z-A">Alphabeically, Z-A</option>
                <option value="Date, new to old">Date, new to old</option>
                <option value="Date, old to new">Date, old to new</option>
                <option value="Best Selling">Best Selling</option>
              </SelectPicker>
            </div>
          </center>
        </div>
      </div>
    )
  }

}
export default SubCategory
