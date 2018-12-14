import React from 'react';
import { translate } from "react-i18next";
import { Base64 } from 'js-base64';

import Slider from '../widgets/slider';


module.exports = translate('product')(class FeedDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var self = this;
        var t = self.props.t;
        var totalMedias = (self.props.medias || []).length;

        <Slider images={self.props.medias.map(i => i.url)}/>
        return <div className="product" ref="product">
            <div className="info">
                {totalMedias ? ({
                    1: <img src={self.props.medias[0].url} width="100%"/>
                }[totalMedias] || <Slider images={self.props.medias.map(i => i.url)}/>) : null}
                <h4 style={{
                    color: '#1c2d5b',
                    fontSize: 18,
                    marginBottom: 20,
                    marginTop: 15
                }}>{self.props.title}</h4>
                <div className="description">
                    <p style={{
                        color: '#99a1b5',
                        whiteSpace: 'pre-line'
                    }}>{self.props.description}</p>
                </div>
            </div>
        </div>;
    }
});
