import React from 'react';
import { translate } from "react-i18next";

module.exports = translate('widgets')(class Slider extends React.Component {
    constructor(props) {
        super(props);
    }


    showImg(offset) {
        // get container
        var imgContainer = $(this.refs.container).find('ul');
        // get images
        var imgs = imgContainer.children();
        // get total images
        var totalImgs = imgs.length;
        // get image width
        var imgWidth = imgContainer.parent().innerWidth();
        // get current
        var current = parseInt(imgContainer.attr('data-current'));
        // get next
        var next = current + offset;
        // adjust next index
        next = next < 1 ? 0 : (next > totalImgs - 1 ? totalImgs - 1 : next);
        // update current
        imgContainer.attr('data-current', next);
        // move
        imgContainer.animate({
            left: next * imgWidth * -1
        }, 350);
    }
    prevImg() {
        this.showImg(-1);
    }
    nextImg() {
        this.showImg(1);
    }



    moveStart(e) {
        this.move = {};
        this.move.start = e.screenX;
    }
    moveDone(e) {
        this.move = this.move || {};
        this.move.end = e.screenX;
        var offset = this.move.start - this.move.end;
        var bounds = $(e.target).parents('.images:first').innerWidth();
        this.showImg(offset < 0 ? -1 : 1);
    }


    componentDidMount() {
        // get image container
        var imgContainer = $(this.refs.container).find(' ul');
        // get images
        var imgs = imgContainer.children();
        // get image width
        var imgWidth = imgs.width();
        imgs.css({
            display : 'inline-block',
            width   : imgWidth
        });
        // set container width
        imgContainer.draggable({
            axis: "x",
            start: this.moveStart.bind(this),
            stop: this.moveDone.bind(this)
        }).css('width', imgWidth * imgs.length).parent().css({
            width   : imgWidth,
            overflow: 'hidden'
        });
    }
    render() {
        var self = this;
        var t = self.props.t;
        return (
            <div className="images" ref="container">
                <a href="javascript:;" onClick={self.prevImg.bind(self)} style={{
                    position: 'absolute',
                    left: '30px',
                    top: '125px',
                    color: '#fff',
                    fontSize: 20,
                    zIndex: 10
                }}>
                    <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                </a>
                <ul {...{
                    "data-current"  : 0
                }}>
                    {self.props.images.filter(n => n).map((photo, ptoKey) => <li key={ptoKey} style={{
                        backgroundImage: 'url(' + photo + ')'
                    }}></li>)}
                </ul>
                <a href="javascript:;" onClick={self.nextImg.bind(self)} style={{
                    position: 'absolute',
                    right: '30px',
                    top: '125px',
                    color: '#fff',
                    fontSize: 20,
                    zIndex: 10
                }}>
                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
});
