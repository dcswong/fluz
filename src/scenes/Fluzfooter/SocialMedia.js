import React, { Component } from 'react';
import lodash from 'lodash';
import styled from 'styled-components';

const SocialGp = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

const FollowUs = styled.p`
  color: #808080;
  font-size: 12px;
  margin-top: 4%;
  margin-right: 20%;
`;

const SocialName = styled.a`
`;

const SocialIcon = styled.img`
 width: 16px;
 margin-right: 10px;
`;
class SocialMedia extends Component{
  constructor(props) {
  super(props)
  }
  render(){
    const {social} = this.props;
    return(
      <SocialGp>
          {lodash.map(social, (socials, index) => {
              return (
                <div>
                  <SocialName href={socials.link}>{socials.name}</SocialName>
                </div>
              )
          })}
      </SocialGp>
    )
  }

}
export default SocialMedia;
SocialMedia.defaultProps = {
  social:[
    {
      name:'Instagram',
      link:'',
      img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA/QAAAP0B4nuDkwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADSSURBVDiNxc+/LkRxFMTxz0VUVCqNhhfQSrQKolQpKLyDTRQ7W+47iD9R0XgSnVphW/QEP83e5EaWvbcQU52TyXzPHP5bVT0kOcM+5qdk3nCV5AhmGsbBL+F3jPAwPnpYG03AjMl6xnqSlSSreMRsbc5NqQunSe6TbGAHS01zKqCqqtF47GH3u/9TbXjBsJRyNwbdYojXtg2ekvTqpd/vnydZwHHbBstJbpJswWAwOMF1lxcWsYc1KKVsYrsLoJWagM8OuY9JgEuUFuGCiw7H/lhffvI0BnBXP/IAAAAASUVORK5CYII="
    },
    {
      name:'Facebook',
      link:'',
      img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA/QAAAP0B4nuDkwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGESURBVDiNxZI/S1thFMZ/5+bSYskXuEKXOiS4tZnaBhz7DdylEjCLEqVTICchS4dmtBEcXPsBunS2bSgVxME/oKBE4UK3EKjK63s65CbcxHTOA2d4z3ue5/yFWUPSD1UtARvAAvBkIvYeuABaqrr7SKBer783szawLSLfzOxuLJPIUzN7B5SBVVXdAwiGAWa2CWyr6nqtVvsKdIB+Yh0z+wMsAZ+BrSFvJADkROQHQKPReA2cAj8TOwGeASsisg/kpwkEgG+1WnPe+y/AYSaTeZHM4wjYA44BD2SGpHBiUPT7/VfA8zAM31ar1S5As9ksO+cugyB4aWZj8cGkQMrnUz4/8TfCowqy2ezvXq/Xdc7tqGopDENxzrWBK+/9gYjM/68CDwSVSuUvsAwsAjfOuWsGQ1tW1duE8zBN4MzM3gCoaieKohxQAApRFOVV9ReAmRUZbGi8BRH5ZGZtVQX4HsexiQzuLI7jBVUVoAisAasjXrqf5JQ/MFjdNJwDH9OnPHv8AxXfjjeWGJBhAAAAAElFTkSuQmCC'
    }
    /*{
      link:'',
      img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA/QAAAP0B4nuDkwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD3SURBVDiNxZK/SsRAEIe/ObNwlWARgnCl1lZ2WmltIejLpBkCKX0RfQVLbX2BE6sDOVIIVgcTdmxiCGETtLpfswvzzbd/GNh35HejqlkIITezXESOgcMR++3unyGExswaVW17QV3XhZm9ACd/PHgdQrgsy3K7AGjb9v4fzQCnZnYHsABw91UC+gLijGTVC4AiATwD58DrhKAYCpYpQlXfVPVCRG6Aj1F5ORTMxt0FaFO1rFt3qWJVVWcxxgfgKlHeDQXbBHAdY7wFDiYutoXuCSKySQBHM80Am16QZdkj8D4Dj7MOITzB9Cjn3cf1ERF392Y8yvvPD+IpVxZrshrnAAAAAElFTkSuQmCC'
    },
    {
      link:'',
      img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGMSURBVEiJ7ZW/LwNhGMc/V5KmKGExSEeL0vAfdLZI/BqsTBI/tg5oH+0g3ZgMBrsfCYu1A7OERBiYRFILEuVquPcM7Uld763emSS+0+X7PO/38753z93BX5fxU4OI9ADLwBjQW7UfgWNgU0SeAgNEJAGcAH2algdgVEQufQPy+XzUNM0rINZoE8B9JBKJp1KpV69iSLeqXC7PNREOEDNNc1ZX1AJs255uItyRtlcLAAZ9ALS9jQAdPgBRXaHuIYvIBrAAtPsAALwBWyKyUmt6nWAxQDjVNUtu0wuwBrwEADwDq27T8z3IZrMjSqlzP+mhUGg4nU5f1Pke4XGl1L6fcACl1IGIDLj9rxPkcrl+y7LWgXEg7BdQ1QdwCGRE5Bag1alYlnUE1O3Ap8LADJAAhuD7LdLOcgB1Ohe1gEngDCj9IrgEnAITjlE3RUEmyJHXJLW4mwqFQjGZTMaofF9uqrvq1mTeAUWgC9jNZDI77oZm/mhtwDwwRWUIbODaMIw927a3ReT9p4x/NdQnFXFtzzeK+KsAAAAASUVORK5CYII='
    }*/
  ]
}
