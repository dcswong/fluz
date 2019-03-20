import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled, {createGlobalStyle} from 'styled-components';
import UIHelper from '../../helpers/UIHelper';

const GlobalStyle = createGlobalStyle`
  .bm-menu {
    width: 100%;
    background-color: black;
  }
  .bm-cross-button {
    right: 30px;
  }
`

const Searchbar = styled.input`
    background-color: #000;
    flex: 1;
    color: #fff;
    border-width: 0px;
    font-size: 25px;
    font-weight: 300;
    ::-webkit-input-placeholder { /* Chrome */
        color: #fff;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #fff;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #fff;
        opacity: 1;
    }
    :-moz-placeholder { /* Firefox 4 - 18 */
        color: #fff;
        opacity: 1;
    }
    :focus { outline: none; }
`

const SearchBox = styled.div`
    :focus { outline: none; }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-color: #fff;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    padding-bottom: 12px;
    margin-top: 70px;
`

class SearchSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    openMenu () {
        this.setState({menuOpen: true})
    }

    onChangeSearchKey(value) {
        this.setState({searchKey: value})
    }

    render () {
        const {searchKey} = this.state;

        return (
            <Menu width={'100%'} right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <GlobalStyle/>
                <SearchBox style={{display: 'flex'}}>
                    <Searchbar
                        placeholder={'Search'}
                        onChange={(event) => this.onChangeSearchKey(event.target.value)}
                    />
                    <a className="menu-item" href={`/${searchKey || ''}`}>
                        {UIHelper.renderSVG('search', {height: 25, cursor: 'pointer'})}
                    </a>
                </SearchBox>
            </Menu>
        );
    }
}
export default SearchSidebar