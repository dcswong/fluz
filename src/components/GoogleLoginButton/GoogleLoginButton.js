import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import hash from 'object-hash';

const GoogleBtn = styled.button`
@media (min-width: 768px) {
  width: 400px;
  height: 40px;
}
@media (max-width: 767px) {
  width: 280px;
  height: 30px;
  font-size: 12px;
}
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
  margin-top: 5%;
  color: #000000;
  text-align: center;
  background:   url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT5SURBVGhD7ZhtTFtVGMfvvYUW5jSabItb2CAZYcFNXqaObiAzM2MD5WXzlQlhmywQCBGGgwkkV0HoAAFBYLKCI+hiwAiF9lb2gbQlwAfd2NjcPs0vrjJfop80OKHP8Vx2igVP8ba93RrTf/L70j7Pef7PuefltoxffvnluRDPBMCpwFwo4gTI4W5DBvsnJLM2tI9B6DkGwX4G8GdzkM39AAXcKJQHHhdzSPqDE5QFqCGfm4QX2AX0LDbrAjhnHvK4KagKjCXD3T8Br4zAxq+Js0sz5xLiE8rlZqCSCSXDe1dQxjZDEgtUMx4ABxgblLIaUkZ+oS5mDZ6pm7TicoJrXMX7Q0nKyiPUyTyGN+CPtILeAIrZj0hpzwX9TDAcYX+mFfIK+ZyZlJZHi5uVVsgbyG7+FNtGLeQEfPYvoALuEpRyVVAfsBev5XXAMxvgHcXzqJR9d/G0EWMoufKbb1BthYP4MqIVWwGksAvwtqJLyubDMWvQW4reZY3IbV4UFHNfO5p0Br55rdjU4yRNsvC5vxWyuFnvmLcEbYYx1V1UpkAokW5cBE5wl9EAoyBpviNkUZ3BoEW6AhFKYv9t/t7McyTFd4QQw4FFaV1qQESvRCib+8e8uOYLmU0kxbcE5qDdy8zbMWP4e0sKihXdJNz3BGZlBbUBApwP/AmKGBUJ9z2BRTVIM24Hf99KQiVpY9k1JAfbKibg1UbtLTKsc4FZ9S3NuB38hJJJqCTRzLhLfPXIHBnWuXADv9GM24FxZQQJlSSaEXeJrBgHMqxz4Qbu0ozbgQnmYRIqSTQj7rKl/DIiwzrX/6EBn11C4kYmwzoXPmWu04zbwZs4hYRKEs2Iu8S/p5ewiS2qL2nG7eBbuo2EShLNiLukn+mzkmGda7WL7FfTI6hG2P1HU786mITLpvaBgrVRlSYbzbidolaNnoQ7F5iC1TTzM2MbUfZwMnpxKAO1GZ/6hITLppK22h6aaUc02pIjJNy5yMvcbbtxvKTQFxcjUfpQ+qJ5kazh5IWO0e2bSYrHajmbF7aj0rLq7G+vHF/gTby0f/PwSaQRzf9uXisumSXjjlQZEqwDyPPfAjz/ijJN8+kdmmlHTrS0TJCU/xZeRiG3xtb/lTuSRDVvp8awZ9qTJsQZzf6g8wbNsCNbTk8jTfdJ1/6CrDOor9JMr6Rcv3f2nPHJEJImWd2GyND89urvaIZX8lqD9gZJk66hr7aF4bVuo5leSZYu2dYh7OyRcjr1XYx6qEV4pusNnJMxeBi91NRBNW0nomIS+HMnXbo8l9QpxDSnUgw7Q9zcdXr1lXbjTr5feGJfvzF8/QVTxLrzQnR8hzG2utqw55LYrGNO6uAhdPQsjzaVz1AbKPywvpPYcU/1QpykpeQpb/YWorDT3ywz/3J9z01iw31NTYUEl+kT79CKys3RC8fQjirLovmk9wd+KWlqkufCNJlCH63UJ8zSispNZn8mymputfJ9pRtIeXmEmwiqEdTXXdkT7lArqK8YjeHe+82tHY1qyJR4OrlCpi7F9rExpp6U8a76hmPD6wxx04d1qVQzrnBoKA3VGtTTn+Njmwx//9Q7Gr2rUYgbP647ME8ztxo5wwfn64S4yc8M0TFkuAcn8XVCK0QfazY+ra/QJ3yfN7x/Lhuf9+ITytClodd1KSB+Vj6SaG0UdglaY0yOHO9RfvnlF8P8Da+9ZrALdO66AAAAAElFTkSuQmCC') no-repeat;
  background-size: contain;
  font-style: Roboto-Medium;
  font-size: 14px;
  border-radius: 2px;
`;

class GoogleLoginButton extends Component {

    responseGoogle(response) {
        console.log(response.profileObj)
        const {email, familyName, givenName} = response.profileObj;
        const user = {
            first_name: givenName,
            last_name: familyName,
            email: email,
            passwd: hash(email),
            confpasswd: hash(email)
        }
        this.props.responseGoogle(user)
    }

    render() {
        return (
            <GoogleLogin
                clientId="655632246734-5ntvg2eo395sf8ohabhg4j39vll6ve5u.apps.googleusercontent.com"
                buttonText="Login"
                render={(renderProps) => (
                    <GoogleBtn onClick={renderProps.onClick}>Sign In With Google</GoogleBtn>
                )}
                onSuccess={(response) => this.responseGoogle(response)}
                onFailure={(response) => {}}
            />
        )
    }
}

export default GoogleLoginButton;
