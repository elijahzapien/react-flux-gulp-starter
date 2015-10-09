'use strict';

import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import TimeStore from '../../stores/TimeStore';
import TimeActions from '../../actions/TimeActions';

class TimeStamp extends Component {

    static getStores() {
        return [TimeStore];
    }

    static getPropsFromStores() {
        return TimeStore.getState();
    }

    onUpdateTime(event) {
        TimeActions.updateTime();
    }

    render() {

        return (
            <div className="time-stamp">
                <span>{`Timestamp: ${this.props.time.toGMTString()}`}</span>
                <button onClick={this.onUpdateTime.bind(this)}>Update</button>
            </div>
        );

    }

}

TimeStamp.propTypes = {
    time: PropTypes.object.isRequired
};

TimeStamp = connectToStores(TimeStamp);

export default TimeStamp;
