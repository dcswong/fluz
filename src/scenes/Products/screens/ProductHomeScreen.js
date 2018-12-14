import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import TitleHeaderView from '../../../components/TitleHeaderView';
import ImageGalleryView from '../../../components/ImageGalleryView';
import GenericItemGridView from '../../../components/GenericItemGridView';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';
/**
 * This is a Home Screen, when user select product page. 
 * In this Screen, will contain 
 *      <TitleHeaderView/>
 *      <ImageGalleryView/>
 *      <GenericItemGridView/>
 *      <GenericItemGridView/>
 */

class ProductHomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedProductCategory: null,
            selectedBestSeller: null,
            isClickCheckOut: false
        }
        this.renderProductCategory = this.renderProductCategory.bind(this);
        this.renderBestSeller = this.renderBestSeller.bind(this);

        this.onCheckOutClick = this.onCheckOutClick.bind(this);
    }

    onCheckOutClick() {
        let {isClickCheckOut} = this.state;
        !isClickCheckOut && this.setState({isClickCheckOut: true});
    }

    onProductCategoryClick(item) {
        this.setState({selectedProductCategory: item});
    }

    onBestSellerClick(item) {
        this.setState({selectedBestSeller: item})
    }

    componentDidMount() {
    }

    render() {
        let {categories, bestSellers} = this.props;
        let {selectedProductCategory, selectedBestSeller, isClickCheckOut} = this.state;
        
        if(isClickCheckOut) {
            return <Redirect push to={`/salesOrderSummary`}/>
        }

        if(selectedProductCategory) {
            return <Redirect push to={`/products/${selectedProductCategory.Id}`}/>
        }

        if(selectedBestSeller) {
            return <Redirect push to={`/products/${selectedBestSeller.Id}`}/>
        }

        return (
            <div id={`productHomeScreen`}
                className="screenContainer">
                <TitleHeaderView 
                    shopTitle={"SHOPTITLE"}
                    onCheckOutClick={this.onCheckOutClick}/>
                {UIHelper.renderLineSeparator()}
                <ImageGalleryView/>
                <GenericItemGridView
                    title={'Product Categories'}
                    noOfRow={1}
                    noOfColumn={4}
                    data={categories}
                    renderItem={this.renderProductCategory}
                />
                <GenericItemGridView
                    title={'Best Sellers'}
                    noOfRow={2}
                    noOfColumn={4}
                    data={bestSellers}
                    renderItem={this.renderBestSeller}
                />
            </div>
        )
    }

    renderProductCategory(item, index, flexStyle) {
        if(item) {
            return (
                <div key={`${item.name}`}
                    style={{flex: 1}}
                    onClick={() => this.onProductCategoryClick(item)}>
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
                            <div style={{...TextStyles.headingFour, color: ColorConst.darkGray}}>
                                {`${item.description}`}
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
    
    renderBestSeller(item, index, flexStyle) {
        if(item) {
            return (
                <div key={`${item.name}`}
                    style={{flex: 1}}
                    onClick={() => this.onBestSellerClick(item)}>
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
                <div key={`bestSeller ${index}`} style={{flex: 1}}></div>
            )
        }
    }
}

ProductHomeScreen.defaultProps = {
    categories: [
        {
            Id: 1,
            name: 'Woman Formals',
            description: 'Womans Shoes',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 2,
            name: 'Men Formals',
            description: 'Mens Shoes',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 3,
            name: 'Running Shoes',
            description: 'Sports',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 4,
            name: 'Other Shoes',
            description: 'Sports',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 5,
            name: 'Jack',
            description: 'Men',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 6,
            name: 'Jadfsjkghfdjck',
            description: 'Men',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
    ],
    bestSellers: [
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
        {
            Id: 5,
            name: 'Men',
            price: 999999999,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 6,
            name: 'Woman',
            price: 888888888888,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 7,
            name: 'Child',
            price: 5678765456789,
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
    ]
};

export default ProductHomeScreen;