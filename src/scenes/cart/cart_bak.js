import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

module.exports = class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    refresh() {
        var self = this;
        var user = (self.props.frame.state || {}).token;
        // need to refresh data from server
        if (user && /^true$/i.test($('#topbar-collapse').attr('aria-expanded'))) {
            fetch(AEP + "/shops/1/orders", {
                method  : 'GET',
                headers : {
                    "Content-Type"  : "application/json",
                    "Authorization" : 'Basic ' + Base64.encode(user.id + ':' + user.token)
                }
            }).then(function(response) {
                return response.json();
            }).then(function(result) {
                // failed
                if (!result || !result.result) {
                    alert(((result||{}).messages || []).join("\n"));
                } else {
                    self.setState({
                        user    : user,
                        items   : (result.data || {}).items || []
                    });
                }
            }).catch(function(error) {
                alert((error || {}).message);
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        prevState.user != (this.props.frame.state || {}).token && this.refresh();
    }
    render() {
        var self = this;
        var id = this.props.id;
        var t = this.props.t;
        var amount = 0;
        // get items
        var items = self.state.items || [];
        // cal amount
        items.forEach((item, itemKey) => {
            amount += (item.price * item.quantity);
        });
        return <div className="topbar white" style={{
            borderBottom: '1px solid #eee'
        }}>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#topbar-collapse" aria-expanded="false" onClick={self.refresh.bind(self)} ref="toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand abt-btn" to="/authors/2/feeds/1" replace style={{
                            color: '#1c2d5b',
                            fontWeight: 600,
                            textTransform: 'uppercase'
                        }}>Blooms</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="topbar-collapse" style={{
                        padding: '0 10px 0 0',
                        overflow: 'hidden',
                        backgroundColor: '#f5f5f5'
                    }}>
                        <div className="order" style={{
                            padding: '15px 20px',
                            borderBottom: '1px solid #e8e8e8'
                        }}>
                            <div style={{
                                display: 'inline-block',
                                width: '50%',
                                textAlign: 'left',
                                color: '#3966e6',
                                fontWeight: 600
                            }}>
                                <b>View Order Summary</b>
                            </div>
                            <div style={{
                                display: 'inline-block',
                                width: '50%',
                                textAlign: 'right'
                            }}>
                                <a href="javascript:;" onClick={self.refresh.bind(self)}>reload</a>
                            </div>
                        </div>
                        <ul className="nav navbar-nav navbar-right" style={{
                            padding: '0 16px'
                        }}>
                            {items.length > 0 ? items.map((item, itemKey) => <li key={itemKey} style={{
                                padding: '10px 15px'
                            }}>
                                <div className="photo" style={{
                                    display: 'inline-block',
                                    width: '20%'
                                }}>
                                    <img width="50" src={item.photos[0]} style={{
                                        borderRadius: 3
                                    }}/>
                                </div>
                                <div className="name" style={{
                                    display: 'inline-block',
                                    width: '50%'
                                }}>
                                    <b>{item.name}</b>
                                </div>
                                <div className="qty" style={{
                                    display: 'inline-block',
                                    width: '10%'
                                }}>
                                    <b>x{item.quantity}</b>
                                </div>
                                <div className="price" style={{
                                    display: 'inline-block',
                                    width: '20%',
                                    textAlign: 'right'
                                }}>
                                    <b>{item.price}HKD</b>
                                </div>
                            </li>) : <li style={{
                                padding: '10px 15px'
                            }}>
                                <p style={{
                                    margin: '0 10px',
                                    color: '#b8b8b8'
                                }}>No item selected.</p>
                            </li>}
                        </ul>
                        <div className="amount" style={{
                            padding: '15px 20px',
                            borderBottom: '1px solid #e8e8e8',
                            borderTop: '1px dashed #e8e8e8'
                        }}>
                            <div style={{
                                display: 'inline-block',
                                width: '50%',
                                textAlign: 'left',
                                color: '#1C2D5B',
                                fontWeight: 600
                            }}>Estimated Total:</div>
                            <div style={{
                                display: 'inline-block',
                                width: '50%',
                                textAlign: 'right'
                            }}>
                                <a href="javascript:;" onClick={() => {
                                    $(self.refs.toggle).trigger('click');
                                    self.props.frame.props.history.push("/checkout");
                                }}>{"HKD" + amount}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>;
    }
};
