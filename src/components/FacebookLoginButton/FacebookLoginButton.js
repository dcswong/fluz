import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

class FacebookLoginButton extends Component {
     
    responseFacebook(response) {
        console.log(response)
        // this.createOrLoginUser(response)
    }

    createOrLoginUser(user) {
        const formData = {
            "first_name": "",
            "last_name": "",
            "biography": "",
            "phone": "",
            "email": ""
        }
        fetch('/api/customers', {
          method: 'POST',
          body    : JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        });

    }

    render() {
        return (
            <FacebookLogin
                appId="262726651112348"
                autoLoad
                callback={(response) => this.responseFacebook(response)}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>This is my custom FB button</button>
                )}
            />
        )
    }
}

export default FacebookLoginButton;