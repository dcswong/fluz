import React, { Component } from 'react';

import SelectPicker from '../../common/form/selectpicker';
import RatioWrapper from '../../common/ratiowrapper';

import ProductGrid from './productGrid';

class Category extends Component {
  constructor (props) {
    super (props)
    this.state = {
      // category: undefined,
      // products: undefined,
      sortBy: 'Date, new to old',
      page: 1,
      //language: this.props.i18n.language || 'en'
    };
    this.sorting = this.sorting.bind(this);
  }

  sorting (e) {
    console.log("sort by: ", e.target.value);
    this.setState({ sortBy: e.target.value });
  }

  componentDidMount () {
    window.scrollTo(0,0);
  }

  componentWillReceiveProps (nextProps) {
  //  window.offReachBottom();
  }


  render () {

    // var category = this.state.category;
    // var products = this.state.products;

    return (
      <React.Fragment>
        <div id="category-wrapper">
          <div className="row">
            <div className="category col-md-6 col-md-offset-3" id="category-block">
              <center>
                {/*{cateogry.name}*/}
                <h1 className="cat-style">Designer Jewelery</h1>
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
              <ProductGrid products={this.props.arr}/>
            </div>
          </div>

        </div>
    </React.Fragment>
    )
  }
}
export default Category

Category.defaultProps = {
  arr: [
    {
      image: '../../assets/imgs/1.jpg'
    },
    {
      image: '../../assets/imgs/2.jpg'
    },{
      image: '../../assets/imgs/3.jpg'
    },{
      image: '../../assets/imgs/4.jpg'
    },{
      image: '../../assets/imgs/5.jpg'
    },{
      image: '../../assets/imgs/6.jpg'
    }
  ]
};
