import React, { Component } from 'react';
import LogoActions from '../../actions/LogoActions';

export default class Logo extends Component {

    onMouseOver(event) {
        LogoActions.logoMouseOver();
    }

    onMouseOut(event) {
        LogoActions.logoMouseOut();
    }

    render() {
        return (
            <a
                className='logo'
                href='http://elijahzapien.com'
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut} >
            </a>
        );
    }

}
