import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import TitleHeaderView from '../../../components/TitleHeaderView';
import ProductDetailView from '../components/ProductDetailView';
import ImageGalleryView from '../../../components/ImageGalleryView';
import GenericItemGridView from '../../../components/GenericItemGridView';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';
/**
 * This is a Product Detail Screen, when user select a product, will direct to this page 
 * In this Screen, will contain 
 *      <TitleHeaderView/>
 *      <ImageGalleryView/>
 *      <ProductDetailView/>
 *      <GenericItemGridView/>
 *      <GenericItemGridView/>
 */

class ProductDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClickCheckOut: false
        }
        
        this.renderProductItem = this.renderProductItem.bind(this);
        this.onCheckOutClick = this.onCheckOutClick.bind(this);
    }
    
    onCheckOutClick() {
        let {isClickCheckOut} = this.state;
        !isClickCheckOut && this.setState({isClickCheckOut: true});
    }

    render() {
        let {relatedProduct, newProducts} = this.props;
        let {isClickCheckOut} = this.state;
        
        if(isClickCheckOut) {
            return <Redirect push to={`/salesOrderSummary`}/>
        }
        

        return (
            <div id={`productDetailScreen`}
                className="screenContainer">
                <TitleHeaderView
                    shopTitle={"SHOPTITLE"}
                    onCheckOutClick={this.onCheckOutClick}/>
                {UIHelper.renderLineSeparator()}
                <ImageGalleryView/>
                <ProductDetailView/>
                <GenericItemGridView
                    title={'Related Products'}
                    noOfRow={1}
                    noOfColumn={4}
                    data={relatedProduct}
                    renderItem={this.renderProductItem}
                />
                <GenericItemGridView
                    title={'New Products'}
                    noOfRow={1}
                    noOfColumn={4}
                    data={newProducts}
                    renderItem={this.renderProductItem}
                />
            </div>
        )
    }

    renderProductItem(item, index, flexStyle) {
        if(item) {
            return (
                <div key={`${item.name}`}
                    style={{flex: 1}}
                    onClick={() => console.log(item)}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: flexStyle}}>
                        <img style={{width: 175, height: 120, borderRadius: 3}}src={item.imgSrc} />
                        <div style={{
                            width: 175, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'flex-end',
                            paddingTop: 15}}>
                            <div style={{...TextStyles.headingFour, color: ColorConst.textBlue}}>
                                {`${item.name}`}
                            </div>
                            <div style={{...TextStyles.headingFour, color: ColorConst.skyBlue}}>
                                {`${item.price}${item.currency}`}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div key={`productCategory ${index}`} style={{flex: 1}}></div>
            )
        }
    }
}

ProductDetailScreen.defaultProps = {
    relatedProduct: [
        {
            Id: 1,
            name: 'Mens Boots',
            price: 188,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 2,
            name: 'Men Chill Tops',
            price: 9222,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 3,
            name: 'Cook Wear',
            price: 122,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 4,
            name: 'Toon Socks',
            price: 188,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        }
    ],
    newProducts: [
        {
            Id: 1,
            name: 'Watches',
            price: 188,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 2,
            name: 'Men Chill Tops',
            price: 92,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 3,
            name: 'Toon Socks',
            price: 188,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 4,
            name: 'Cook Accessories',
            price: 188,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
    ]
};

export default ProductDetailScreen;