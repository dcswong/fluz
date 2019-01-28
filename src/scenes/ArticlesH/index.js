import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import styled from 'styled-components';

import Stories from '../Articles/stories';

const Article = styled.div`
  color: var(--theme-grey);
`;

const Heading = styled.div`
  display: flex;
`;

const Imageblock = styled.div`
  align-items: center;
  justify-content: center;
`;

const Titleblock = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleLine1 = styled.p`
  font: 50px bold;
  margin-bottom: 3%;
  margin-left: 3%;
`;

const TitleLine2 = styled.p`
  font: 26px bold;
  margin-bottom: 3%;
  margin-left: 3%;

`;

const Credits = styled.p`
  font-size: 10px;
  margin-left: 3%;
`;

const SnsButton = styled.a`
  display: inline-block;
  margin-right: 10px;
  color: var(--theme-grey);

  :hover {
    color: var(--theme-grey);
  }
  margin-left: 3%;

`;



const TextBlock = styled.div`
  display: inline-block;
  margin-top: 7%;
  margin-left: 3%;
`;

const MarkdownText = styled.p`
  font-size: 25px;
  margin-right: 27%;
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

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render () {

    return (
      <React.Fragment>
        <Article>
          <Heading>
            <Titleblock>
              <Imageblock>
                <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_2048,q_90,f_auto,dpr_auto/v1547070465/x6svfqzxmaeqwz9fdj0u.jpg" width="100%"/>
              </Imageblock>
              <TitleLine1>
                “皇后”上身：PALOMO SPAIN 颠覆男装设计
              </TitleLine1>
              <TitleLine2>
                迈克三世对话设计师 ALEJANDRO PALOMO
              </TitleLine2>
              <Credits>
                采访: 迈克三世（Michael the III)
                <br/>
                图片致谢: Palomo Spain
              </Credits>
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
          </Heading>
          <TextBlock>
            <MarkdownText>
              “你现在身上穿的是什么？”我询问电话另一端的 Palomo Spain 品牌设计师 Alejandro Gómez Palomo，这位声名鹊起的设计师此刻正在马德里，电话那头听上去正在下雨。他的回答充满了丰富的细节，比如，他能说出他身上的 Yves Saint Laurent 牛仔夹克的具体年份和系列 —— 2007 年春夏系列，让人仿佛一瞬间就回到了二十世纪六十年代末的伍德斯托克，重现了那张黑白照片，还有那个启发了 Stefano Pilati 的经典系列。
            </MarkdownText>
            <Content>
              如果说 2018 年是轻浮老道的骗子们潜逃、曝光、定罪、炒作和受到逮捕的“骗徒之年”，那创意总监这个职衔的盛行，或许并非巧合。2018 年的 Hypefest 潮流盛会上，许多年轻男生站在 Rimowa 和 Off-White 合作的行李传送带“快闪装置”附近，告诉写手 Cam Wolf 他们的梦想工作是创意总监，似乎道出了这个高深莫测的职业和滚轮行李箱之间的紧密相连。没有人知道创意总监到底干些什么，但我们幻想他们会有非常多的旅行，他们会为创意事务进行国际牵线、构建和指导。做什么并不重要，重要的是你看起来很忙、有地方要去、总是在路上。一个滚轮行李箱，就是这种周游列国生活的产品化身。
              <br/>
              生活在一个行动严重受到限制、监控和管制的社会，随心所欲地旅行在很多方面来说，都是一种特权的表现。即使你只是用时尚来表示你旅行的计划，也展现出同样的概念。因此，即便你离机场或入境口有十万八千里，携带一个行李箱，也同样是一个意味深长的地位象征。时髦的硬壳滚轮行李箱是一个象征了旅行的配饰，等义于一本有效的护照，而一个奢华的旅行箱包则更能体现旅行的频繁度。滚轮行李箱宣告着你“将要去旅行”，但背后更深层的信息是你“能去旅行”。
              <br/>
              行李箱近来演变成大众趋之若鹜的奢侈单品，让人不禁想起一段过去。那是 Rimowa 行李箱大规模面市的年代，正值航空客运发展的早期，乘飞机旅行也被视为一件极为风光的事。出差的销售员、都市商务人士，还有电影《猫鼠游戏》（Catch Me If You Can，2002 年）中伴着弗兰克·辛纳屈（Frank Sinatra）的曲子潇洒地走过安检处的骗子，都纷纷赶上这股热潮。在坐飞机旅行之前，人们都坐火车旅行。Louis Vuitton 的行李箱与硬壳箱包便于存放在车头的方形车厢中，因此占据了这一行业的市场。有趣的是，尽管车站和机场给人的感觉通常十分乏味，但正如 Haley Mlotek 所写：许多奢侈品牌都是从行李箱包起家的。
            </Content>
          </TextBlock>
          <BannerBlock>
            <img src="../../assets/imgs/ArticleBanner.jpg"/>
            <Description>
              1989 年，滚轮箱（Rollaboard）专利原稿；Virgil Abloh x Rimowa 联名合作系列登机箱；Robert Plath 与他发明的滚轮箱
            </Description>
          </BannerBlock>
          <AuthorBlock>
            <AuthDesc>
              Olivia Whittick 是 SSENSE 的全职编辑，也是SSENSE 文化专题杂志的责任编辑。
            </AuthDesc>
            <Name>
              文字: Olivia Whittick
            </Name>
          </AuthorBlock>
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
