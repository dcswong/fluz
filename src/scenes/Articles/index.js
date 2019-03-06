import React, { Component } from 'react';
import lodash from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ValidationHelper from '../../helpers/ValidationHelper';
import Stories from './stories';

const Article = styled.div`
  color: var(--theme-grey);
`;

const Heading = styled.div`
  display: flex;
`;

const Titleblock = styled.div`
  width: 60%;
  height: 100%;
  margin-top: 30px;
  margin-left: 3%;
`;

const TitleLine1 = styled.p`
  font: 50px bold;
  margin-bottom: 10%;
`;

const TitleLine2 = styled.p`
  font: 26px bold;
  margin-bottom: 5%;
`;

const Credits = styled.p`
  font-size: 10px;
`;

const SnsButton = styled.a`
  display: inline-block;
  margin-right: 20px;
  color: var(--theme-grey);

  :hover {
    color: var(--theme-grey);
  }
`;

const Imageblock = styled.div`
  margin-left: 3%;
`;

const TextBlock = styled.div`
  display: inline-block;
  margin-left: 3%;
`;

const MarkdownText = styled.p`
  font-size: 25px;
  margin-top: 8%;
`;

const Content = styled.div`
  margin-top: 7%;
  font-size: 15px;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 5%;
`;

const BannerBlock = styled.div`
  margin-bottom: 5%;
`;

const Description = styled.div`
  margin-left: 2%;
  margin-top: 15px;
  font-size: 10px;
  color: #a0a0a0;
`;

const AuthorBlock = styled.p`
  margin-top: 3%;
  margin-bottom: 3%;
  text-align: center;
`;

const AuthDesc = styled.p`
  font-size: 15px;
`;

const Name = styled.p`
  margin-top: 6%;
  margin-bottom: 6%;
  font-size: 10px;
`;

class Articles extends Component {

    constructor(props) {
      super(props)
      this.state = {};
    }


    componentDidMount() {
		const articleId = this.props.match.params.id;

		fetch(`/api/articles?ids=${articleId}`, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(result => {
			if(result.result) {
				this.setState({
					post: (((result || {}).data || {}).posts || []).shift()
				})
			}
		});
    }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
	renderBodySection(bodySection) {
		const {description, medias, title} = bodySection;
		const bodyDescription = ValidationHelper.getYoutubeLinkAsFrame(description || '');
		return (
			<div>
				<TextBlock>
					<MarkdownText>
						{title}
					</MarkdownText>
					<Content>
						{ReactHtmlParser(bodyDescription.text)}
					</Content>
				</TextBlock>
				<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
					{lodash.map(medias, (media, index) => {
						return (
							<BannerBlock key={index}>
								<img src={media.url}/>
								{/* <Description>
									1989 年，滚轮箱（Rollaboard）专利原稿；Virgil Abloh x Rimowa 联名合作系列登机箱；Robert Plath 与他发明的滚轮箱
								</Description> */}
							</BannerBlock>
						)
					})}
				</div>
				{bodyDescription.youtube &&
					ReactHtmlParser(bodyDescription.youtube)
				}
			</div>
		)
	}
  render () {
	  const {post} = this.state;
	  const {sections, authors} = post || {};
		const headerSection = lodash.head(sections) || {}
		const bodySections = lodash.drop(sections) || {}
		if(!post) {
			return null
		}
		const headerDescription = ValidationHelper.getYoutubeLinkAsFrame(headerSection.description || '');
    return (
      <React.Fragment>
        <Article>
          <Heading>
            <Titleblock>
              <TitleLine1>
					{headerSection.title}
              </TitleLine1>
              <TitleLine2>
					{ReactHtmlParser(headerDescription.text)}
              </TitleLine2>
			  	{headerDescription.youtube &&
					ReactHtmlParser(headerDescription.youtube)
				}
				{lodash.map(authors, (author, index) => {
					return (
						<div key={index}>
							<Credits>
								{author}
							</Credits>
						</div>
					)
				})}
              <div>
                <SnsButton href="" target="blank">
                  <i className="fab fa-facebook-f"/>
                </SnsButton>
                <SnsButton href="" target="blank">
                  <i className="fab fa-twitter"/>
                </SnsButton>
                <SnsButton href="" target="blank">
                  <i className="fab fa-pinterest-p"/>
                </SnsButton>
              </div>
            </Titleblock>
            <Imageblock>
				{headerSection.medias && headerSection.medias[0] && headerSection.medias[0].url &&
					<img src={headerSection.medias[0].url} width="650"/>
				}
            </Imageblock>
          </Heading>
			{lodash.map(bodySections, (bodySection, index) => {
				return (
					<div key={index}>
						{this.renderBodySection(bodySection)}
					</div>
				)
			})}
          {/* <AuthorBlock>
            <AuthDesc>
              Olivia Whittick 是 SSENSE 的全职编辑，也是SSENSE 文化专题杂志的责任编辑。
            </AuthDesc>
            <Name>
              文字: Olivia Whittick
            </Name>
          </AuthorBlock> */}
        </Article>

        <Stories/>
      </React.Fragment>
    )
  }
}
export default Articles

/*<div className="menu col-sm-2">
  <img src="/assets/imgs/icons/icons8-menu-filled-50.png" height="20" width="20"/>
</div>
<div className="cart col-sm-2">
  <img className="cart-img" src="/assets/imgs/icons/icons8-shopping-basket-30.png" height="30" width="30"/>
</div>
</div>
<img src="/assets/imgs/lazynoon.png" height="65" width="80"/>

<a className="mar-btn" href="" target="blank">
  <i className="fab fa-twitter"/>
</a>
<a className="mar-btn" href="" target="blank">
  <i className="fab fa-pinterest-p"/>
</a>

  */
