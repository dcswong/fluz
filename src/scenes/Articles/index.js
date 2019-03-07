import React, { Component } from 'react';
import lodash from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ValidationHelper from '../../helpers/ValidationHelper';
import Stories from './stories';

import RatioWrapper from '../../common/ratiowrapper';

const Article = styled.div`
  color: var(--theme-grey);
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 4%;
`;

const Heading = styled.div`
  display: flex;
`;

const Titleblock = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 30px;
`;

const TitleLine1 = styled.p`
  font: 50px bold;
  margin-bottom: 10%;
`;

const TitleLine2 = styled.p`
  font: 20px bold;
  margin-bottom: 5%;
  line-height: 1em;
`;

const Credits = styled.p`
  font-size: 10px;
`;

const SocialMedia = styled.div`
  margin-bottom: 5%;
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
  width: 50%
  margin-left: 3%;
  margin-bottom: 3%;
`;

const TextBlock = styled.div`
  display: inline-block;
  align-items: center;
`;

const MarkdownText = styled.p`
  font-size: 25px;
  width: 100%;
  margin-left: 15%;
`;

const Content = styled.div`
  margin-top: 5%;
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

const YoutubeDiv = styled.div`
  margin-bottom: 3%;
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
    console.log('bodySection', bodySection);
    console.log('medias: ', medias.length);
		const bodyDescription = ValidationHelper.getYoutubeLinkAsFrame(description || '');
    console.log('bodyDescription: ', bodyDescription);
		return (
			<div>
				<TextBlock>
					<MarkdownText>
						{title}
					</MarkdownText>
					<Content>
						{ReactHtmlParser((bodyDescription || {}).text)}
					</Content>
				</TextBlock>
				<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
					{lodash.map(medias, (media, index) => {
            return (
              <BannerBlock key={index}>
                <img src={media.url} width="100%"/>
              </BannerBlock>
            )
					})}
				</div>
        <YoutubeDiv>
          {bodyDescription && bodyDescription.youtube &&
  					ReactHtmlParser(bodyDescription.youtube)
  				}
        </YoutubeDiv>
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
    console.log('headerDescription: ', headerDescription);
    return (
      <React.Fragment>
        <Article>
          <Heading>
            <Titleblock>
              <TitleLine1>
                {headerSection.title}
              </TitleLine1>
              <TitleLine2>
                {ReactHtmlParser((headerDescription || {}).text)}
              </TitleLine2>
    			  	{headerDescription && headerDescription.youtube &&
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
              <SocialMedia>
                <SnsButton href="" target="blank">
                  <i className="fab fa-facebook-f"/>
                </SnsButton>
                <SnsButton href="" target="blank">
                  <i className="fab fa-twitter"/>
                </SnsButton>
                <SnsButton href="" target="blank">
                  <i className="fab fa-pinterest-p"/>
                </SnsButton>
              </SocialMedia>
            </Titleblock>
            <Imageblock>
      				{headerSection.medias && headerSection.medias[0] && headerSection.medias[0].url &&
      					<img src={headerSection.medias[0].url} width="100%"/>
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
