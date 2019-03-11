import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';

class GoogleLoginButton extends Component {

    responseGoogle(response) {
        console.log(response)
    }

    render() {
        return (
            <GoogleLogin
                clientId="655632246734-0514v1sd582hlr6hqhu08uolfbsjbgfh.apps.googleusercontent.com"
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