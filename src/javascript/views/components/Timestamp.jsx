import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import TimeStore from 'stores/TimeStore';
import TimeActions from 'actions/TimeActions';

class TimeStamp extends Component {

    static getStores() {
        return [TimeStore];
    }

    static getPropsFromStores() {
        return TimeStore.getState();
    }

    static propTypes = {
        time: PropTypes.object
    }

    onUpdateTime(event) {
        TimeActions.updateTime();
    }

    render() {
        return (
            <div className="timestamp">
                <p className="bold">{'Time:'}</p>
                <p>{this.props.time.toGMTString()}</p>
                <button onClick={this.onUpdateTime.bind(this)}>Update</button>
            </div>
        );
    }

}

export default connectToStores(TimeStamp);
