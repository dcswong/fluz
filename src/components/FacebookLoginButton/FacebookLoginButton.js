import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import styled from 'styled-components';

const FbBtn = styled.button`
@media (min-width: 768px) {
  width: 400px;
  height: 40px;
}
@media (max-width: 767px) {
  width: 280px;
  height: 30px;
  font-size: 12px;
}
  border: 1px solid #4267b2;
  margin-top: 5%;
  color: white;
  text-align: center;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyMjQgMjI0IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNHYtMjI0aDIyNHYyMjR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE3Ny4zMzMzMywyOGgtMTMwLjY2NjY3Yy0xMC4zMTMzMywwIC0xOC42NjY2Nyw4LjM1MzMzIC0xOC42NjY2NywxOC42NjY2N3YxMzAuNjY2NjdjMCwxMC4zMTMzMyA4LjM1MzMzLDE4LjY2NjY3IDE4LjY2NjY3LDE4LjY2NjY3aDcxLjEyOTMzdi02NC45NjkzM2gtMjEuODY4di0yNS40MzMzM2gyMS44Njh2LTE4LjcxMzMzYzAsLTIxLjY5MDY3IDEzLjI2MjY3LC0zMy41MTYgMzIuNjIsLTMzLjUxNmM2LjUyNCwtMC4wMTg2NyAxMy4wMzg2NywwLjMxNzMzIDE5LjUyNTMzLDAuOTh2MjIuNjhoLTEzLjMyOGMtMTAuNTQ2NjcsMCAtMTIuNiw0Ljk4NCAtMTIuNiwxMi4zMzg2N3YxNi4xOTMzM2gyNS4ybC0zLjI3NiwyNS40MzMzM2gtMjIuMDczMzN2NjUuMDA2NjdoMzMuNDY5MzNjMTAuMzEzMzMsMCAxOC42NjY2NywtOC4zNTMzMyAxOC42NjY2NywtMTguNjY2Njd2LTEzMC42NjY2N2MwLC0xMC4zMTMzMyAtOC4zNTMzMywtMTguNjY2NjcgLTE4LjY2NjY3LC0xOC42NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==') no-repeat #4267b2;
  background-size: contain;
  border-radius: 2px;
`;

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
                    <FbBtn onClick={renderProps.onClick}>Facebook Login</FbBtn>
                )}
            />
        )
    }
}

export default FacebookLoginButton;
