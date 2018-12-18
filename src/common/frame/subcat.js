import React, {Component} from 'react';

import SelectPicker from '../../common/form/selectpicker';
import RatioWrapper from '../../common/ratiowrapper';


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
    this.setState({ sortBy: e.target.value });

  }

  render () {

    return (
      <React.Fragment>
        <div id="category-wrapper">
          <div className="row">
            <div className="category col-md-6 col-md-offset-3" id="category-block">
              <center>
                <h1 className="cat-style">Desginer Jewelery</h1>
                <div className="sorting-block">
                  <SelectPicker name="sorting-by" id="sorting-by" placeholder={"SORT BY: " + this.state.sortBy} withArrow onChange={this.sorting}>
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

          <div className="row">
            <div className="products col-lg-12" id="products">
              <div className="col-md-4">
                <RatioWrapper ratio="100%">
                  <img className="image" src="../../assets/imgs/1.jpg"/>
                </RatioWrapper>
              </div>
              <div className="col-md-4">
                <RatioWrapper ratio="100%">
                  <img className="image" src="../../assets/imgs/2.jpg"/>
                </RatioWrapper>
              </div>
              <div className="col-md-4">
                <RatioWrapper ratio="100%">
                  <img className="image" src="../../assets/imgs/3.jpg"/>
                </RatioWrapper>
              </div>
              <div className="col-md-4">
                <RatioWrapper ratio="100%">
                  <img className="image" src="../../assets/imgs/4.jpg"/>
                </RatioWrapper>
              </div>
              <div className="col-md-4">
                <RatioWrapper ratio="100%">
                  <img className="image" src="../../assets/imgs/5.jpg"/>
                </RatioWrapper>
              </div>
              <div className="col-md-4">
                <RatioWrapper ratio="100%">
                  <img className="image" src="../../assets/imgs/6.jpg"/>
                </RatioWrapper>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
    )
  }

}
export default SubCategory

/*
<div className={"product-grid " + ({
  a: this.props.highlighted ? "col-lg-12 col-md-12 col-sm-12 col-12" : "col-lg-6 col-md-6 col-sm-6 col-12",
  b: this.props.highlighted ? "col-lg-12 col-md-12 col-sm-12 col-12" : "col-lg-6 col-md-6 col-sm-6 col-12",
  c: "col-lg-3 col-md-4 col-sm-6 col-12"
}[this.props.pattern])}>

*/
