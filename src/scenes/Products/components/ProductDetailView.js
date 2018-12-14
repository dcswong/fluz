import React, {Component} from 'react';
import lodash from 'lodash';
import Rating from 'react-rating';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import GenericItemGridView from '../../../components/GenericItemGridView';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import ValidationHelper from '../../../helpers/ValidationHelper';

import './styles.css';

class ProductDetailView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isReadMore: false,
            qty: 1,
            selectedSize: ''
        }

        this.renderProductDescription = this.renderProductDescription.bind(this);
        this.renderProductInformation = this.renderProductInformation.bind(this);
        this.renderProductDetail = this.renderProductDetail.bind(this);
        this.renderSizeOption = this.renderSizeOption.bind(this);
        this.renderQtyInput = this.renderQtyInput.bind(this);
        this.renderButtonGroup = this.renderButtonGroup.bind(this);
    }

    onSizeOptionClick(item) {
        let {selectedSize} = this.state;
        let pickingSize = item.name;

        if(selectedSize == pickingSize) {
            return;
        } else {
            this.setState({selectedSize: pickingSize})
        }
    }

    onChangeQtyButtonPress(isAdd) {
        let {qty} = this.state;
        if(isAdd) {
            this.setState({qty: qty + 1});
        } else {
            if(qty == 1) {
                this.setState({qty: 1});
            } else {
                this.setState({qty: qty - 1});
            }
        }
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 30
            }}>
                {this.renderProductInformation()}
                {this.renderProductDetail()}
            </div>
        )
    }

    renderProductInformation() {
        let {product} = this.props;
        return(
            <div style={{display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 55}}>
                <Rating
                    initialRating={product.rating}
                    emptySymbol={<i className="fa fa-star" style={{fontSize: 15, color: ColorConst.gray}} aria-hidden="true"></i>}
                    fullSymbol={<i className="fa fa-star" style={{fontSize: 15, color: ColorConst.goldenYellow}} aria-hidden="true"></i>}
                    readonly
                />
                <div style={{...TextStyles.headingFour, color: ColorConst.gray, paddingTop: 5}}>
                    {product.category}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <div style={{...TextStyles.headingThree, fontWeight: '300'}}>
                        {product.name}
                    </div>
                    <div style={{...TextStyles.bodyText, fontWeight: '300', color: ColorConst.lightBlue}}>
                        {product.currency}
                        <span style={{...TextStyles.headingOne, color: ColorConst.lightBlue}}>{product.price}</span>
                    </div>
                </div>
                {this.renderProductDescription()}
            </div>
        )
    }

    renderProductDescription() {
        let {product} = this.props;
        let {isReadMore} = this.state;
        let {points} = product;
        return (
            <div style={{display: 'flex', flexDirection: 'column', paddingTop: 20}}>
                <div style={{...TextStyles.bodyText, color: ColorConst.darkGray}}>
                    {product.description1}
                </div>
                <div style={{paddingTop: 15, paddingBottom: 15}}>
                    {lodash.map(points, (point) => {
                        return (
                            <div key={`${point}`}
                                style={{...TextStyles.bodyText, color: ColorConst.darkGray}}>
                                {`- ${point}`}
                            </div>
                        )
                    })}
                </div>
                <div style={{...TextStyles.bodyText, color: ColorConst.darkGray, overflow: 'hidden'}}>
                    {`${product.description2}`}
                </div>
                {isReadMore ?  
                    <div style={{...TextStyles.bodyText, color: ColorConst.darkGray, overflow: 'hidden'}}>
                        {`${product.description3}`}
                    </div> :
                    <div style={{...TextStyles.bodyText, color: ColorConst.lightBlue, paddingTop: 5}}
                        onClick={() => this.setState({isReadMore: true})}>
                        {`Read more...`}
                    </div>
                }
            </div>
        )
    }

    renderProductDetail() {
        let {product} = this.props;
        return (
            <div style={{
                flex: 1,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: ColorConst.lightGray,
                boxShadow: `-10px 10px 30px ${ColorConst.lightGray}`,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div 
                    style={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: 35,
                        maxWidth: 340
                    }}>
                    <div style={{paddingBottom: 10}}>
                        <GenericItemGridView
                            containerStyles={{}}
                            titleStyles={{...TextStyles.bodyText, color: ColorConst.darkGray}}
                            isLargePadding={false}
                            title={"Size"}
                            noOfRow={2}
                            noOfColumn={3}
                            data={product.sizeOption}
                            renderItem={this.renderSizeOption}
                        />
                    </div>
                    <div style={{paddingBottom: 20}}>
                        {this.renderQtyInput()}
                    </div>
                    <div>
                        {this.renderButtonGroup()}
                    </div>
                </div>
            </div>
        )
    }

    renderSizeOption(item, index, flexStyle) {
        let {selectedSize} = this.state;

        if(item) {
            let isSelected = (selectedSize == item.name);
            return (
                <div key={`${item.name}`}
                    style={{
                        flex: 1,
                        display: 'flex', 
                        flexDirection: 'row',
                        justifyContent: flexStyle}}
                    onClick={() => this.onSizeOptionClick(item)}>
                    <div key={`SizeOption${index}`}
                        style={{
                            width: '90%',
                            height: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: isSelected ? ColorConst.lightBlue : ColorConst.gray,
                            borderRadius: 5
                        }}
                    >
                        <div style={{...TextStyles.bodyText}}>
                            {item.name}
                        </div>
                        <div style={{...TextStyles.bodyText, color: ColorConst.gray}}>
                            {item.description}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div key={`SizeOption ${index}`} style={{flex: 1}}></div>
            )
        }
    }

    //TODO: display value with uom
    renderQtyInput() {
        let {product} = this.props;
        let {uom} = product;
        let {qty} = this.state;
        let displayValue = qty ? `${qty} ${uom}` : ``;

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{...TextStyles.bodyText, color: ColorConst.darkGray, paddingBottom: 5}}>
                    {`Quantity`}
                </div>
                <InputGroup style={{display: 'flex', flexDirection: 'row'}}>
                    <FormControl
                        type="text" 
                        style={{height: 'auto', color: ColorConst.darkBlue}}
                        value={qty || ''}
                        onChange={(event) => {
                            let inputValue = event.target.value;
                            this.setState({qty: parseInt(inputValue) || null})
                            console.log(parseInt(inputValue))
                            // if(ValidationHelper.isNumber(inputValue)) {
                            //     inputValue = parseInt(inputValue)
                            //     this.setState({qty: inputValue})
                            //     // inputValue = ValidationHelper.removeAllNonNumeric(inputValue);
                            // } else {
                            //     this.setState({qty: 0})
                            // }
                        }}
                    />
                    <Button style={{borderRadius: 0, borderLeftWidth: 0, backgroundColor: ColorConst.gray, fontSize: 14}}
                        onClick={() => this.onChangeQtyButtonPress(false)}>
                        {UIHelper.renderSVG('small-delete', {padding: 0})}
                    </Button>
                    <Button style={{borderRadius: "0px 4px 4px 0px", borderLeftWidth: 0, backgroundColor: ColorConst.gray, fontSize: 16}}
                        onClick={() => this.onChangeQtyButtonPress(true)}>
                        {UIHelper.renderSVG('small-add', {padding: 0})}
                    </Button>
                </InputGroup>
            </div>
        )

    }

    renderButtonGroup() {
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button style={{...TextStyles.bodyText, color: ColorConst.lightBlue, borderColor: ColorConst.lightBlue, width: 130, height: 35}}>ADD TO CART</Button>
                <Button bsStyle="primary" style={{...TextStyles.bodyText, backgroundColor: ColorConst.lightBlue, width: 130, height: 35}}>CHECKOUT</Button>
            </div>
        )
    }
}

ProductDetailView.defaultProps = {
    product: {
        category: 'Backpack',
        name: 'Nike Air Max 270',
        description1: 
            `This is just a sample description about this magnificent looking product. 
            Please dont't keep reading because this is just some dummy data I made. 
            Thank you for your cooperation in this technological nonesense.` ,
        description2: 
            "I wanted more content in this area thats why Im putting some more mumbo jumnbo stuff this area.",
        description3: 
            "I wanted more content in this area thats why Im putting some more mumbo jumnbo stuff this area.",
        points: [
            'First Condition about the shoe',
            'Seconds option of this shoe',
            'Thrid benefit of the shoe'
        ],
        currency: 'usd',
        price: 120,
        rating: 4,
        uom: 'pc.',
        sizeOption: [
            {
                name: 'XL',
                description: '16-14cm',
            },
            {
                name: 'L',
                description: '14-12cm',
            },
            {
                name: 'M',
                description: '12-10cm',
            },
            {
                name: 'S',
                description: '10-8cm',
            },
            {
                name: 'XS',
                description: '8-6cm',
            },
        ] 
    }
}

export default ProductDetailView;