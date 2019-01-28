import React, { Component } from 'react';
import lodash from 'lodash';
import styled from 'styled-components';

const TrendDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 5%;
  margin-left: 3%;
  .article {
    display: inline-flex;
  }
`;
const TrendContent = styled.div`
  padding-top: 10px;
  padding-bottom: 50px;
  border-top: 1px solid #595959;
  border-bottom: 1px solid #595959;
  margin-left: 8px;
  margin-right: 8px;
  width: 222px;
  height: 140px;


`;

const TrendHeader = styled.h3`
  color: #333333;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`;

const TrendtTitle = styled.p`
  color: #595959;
  font-size: 10px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 3px;
  text-transform: uppercase;
`;

const TrendTag = styled.p`
  color: #595959;
  font-size: 10px;
`;

const TrendHref = styled.a`
  text-decoration: none;
`;

const TrendImg = styled.img`
  height: 120px;
`;

const ContentDiv = styled.div`
  width: 180px;
  position: relative;
`;
const TopDiv = styled.div`
  height: 35px;
`;
const BottomDiv = styled.div`
  height: 35px;
  text-align: left;
  position: absolute;
  top: 105px;
  left: 5px;
`;

class TrendBlock extends Component{
  constructor(props) {
  super(props)

}
  render(){
    const {content} = this.props;
    console.log(content);
    return(
      <TrendDiv>
        <TrendContent>
          <TrendHeader>Trend</TrendHeader>
          <TrendHeader>Reporting</TrendHeader>
        </TrendContent>

        {lodash.map(content, (contents, index) => {

            return (
              <div key={index}>
                <TrendHref href="">
                  <TrendContent className="article">
                    <div>
                      <TrendImg src={contents.img}/>
                    </div>
                    <ContentDiv>
                      <TopDiv>
                        <TrendtTitle>{contents.title}</TrendtTitle>
                      </TopDiv>
                      <BottomDiv>
                        <TrendTag>{contents.cat}</TrendTag>
                      </BottomDiv>
                    </ContentDiv>
                  </TrendContent>

                </TrendHref>
              </div>
            )
        })}

      </TrendDiv>
    )
  }
}
export default TrendBlock;
TrendBlock.defaultProps = {
  content:[
    {
      img:'../../assets/imgs/trend1.png',
      title: 'MORE CONTEXT',
      cat: 'Fashion'
    },
    {
      img:'../../assets/imgs/trend2.png',
      title: 'Shop this editorial',
      cat: 'Fashion'
    },
    {
      img:'../../assets/imgs/trend3.png',
      title: "Clouty with a chance of hype: The weather girl's extreme winter",
      cat: 'Fashion'
    },
    {
      img:'../../assets/imgs/trend4.png',
      title: "The ssense editor's alphabetical taxonomy of stripes",
      cat: 'Fashion'
    }
  ]
}
