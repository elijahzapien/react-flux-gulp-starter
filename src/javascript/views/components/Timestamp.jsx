'use strict';

import React, {PropTypes, Component} from 'react';

//import TimeStore from '../../stores/TimeStore';
//import updateTime from '../../actions/updateTime';

export default class Timestamp extends Component {

    onReset (event) {
    }

    render() {
        //var currentTime = new Date(this.props.time);
        return (
            <div className="timestamp">
                <span>{'timestamp'}</span>
            </div>
        );
    }

}

