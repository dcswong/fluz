import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { findDOMNode } from "react-dom";
import UIHelper from '../helpers/UIHelper';
import ColorConst from '../styles/ColorConst';
import './styles.css';
/**
 * This is a Home Screen, when user select project page. 
 * In this Screen, will contain 
 */

class ImageGalleryView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          direction: null
        };
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    componentDidMount() {
        let {items} = this.props;
    }

    render() {
        const { index, direction } = this.state;
        return (
            <Carousel
                id={`imageCarousel`}
                controls={false}
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                style={{
                    height: 280,
                    backgroundColor: ColorConst.darkGray,
                    overflowY: 'hidden',
                    zIndex: 1
                }}
            >
                <Carousel.Item>
                    <img width={800} height={280} src="https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={800} height={280} src="https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={800} height={280} src="https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747" />
                </Carousel.Item>
            </Carousel>
          );
    }
}

export default ImageGalleryView;