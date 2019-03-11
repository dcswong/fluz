import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';

class GoogleLoginButton extends Component {

    responseGoogle(response) {
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
            <GoogleLogin
                clientId="655632246734-5ntvg2eo395sf8ohabhg4j39vll6ve5u.apps.googleusercontent.com"
                buttonText="Login"
                render={(renderProps) => (
                    <button onClick={renderProps.onClick}>Google Login</button>
                )}
                onSuccess={(response) => this.responseGoogle(response)}
                onFailure={(response) => this.responseGoogle(response)}
            />
        )
    }
}

export default GoogleLoginButton;