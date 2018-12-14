import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from "react-i18next";

module.exports = translate('common')(class NotFound extends React.Component {
    render() {
        var self = this;
        var t = self.props.t;
        return (
            <div className="block max-900">
                <p>{t('notfound')}</p>
                <br/>
                <Link className="abt-btn" to="/">{t('back')}</Link>
            </div>
        )
    }
});
