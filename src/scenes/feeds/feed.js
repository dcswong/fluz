import React from 'react';

import Section from './section';

module.exports = class FeedDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        };
    }
    getFeed() {
        var self = this;
        var params = (self.props.match || {}).params || {};
        // get info from server
        fetch("/api/articles?ids=" + params.feedId, {
            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            // failed
            if (!result || !result.result) {
                alert(((result||{}).messages || []).join("\n"));
            } else {
                self.setState({ article: ((result.data || {}).articles || [])[0] || {} });
            }
        }).catch(function(error) {
            alert((error || {}).message);
        });
    }
    componentDidMount() {
        this.getFeed();
    }
    render() {
        var self = this;
        var t = self.props.t;
        var article = ((self.state || {}).article || {});
        return (
            <div className="feed">
                <div className="context">
                    <div className="products">
                        {(article.sections || []).map((product, pKey) => <Section key={pKey} feed={self} {...product}/>)}
                    </div>
                </div>
            </div>
        )
    }
};
