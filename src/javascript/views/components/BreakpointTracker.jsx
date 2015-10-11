'use strict';

import React, { Component, PropTypes } from 'react';

export default class BreakpointTracker extends Component {
    render() {

        let breakpoint = this.context.breakpoint;

        return (
            <div className="breakpoint-tracker">
                <p>{ `Current Breakpoint: ${breakpoint.currentName} (${breakpoint.currentValue})` }</p>
                <p>{ `Previous Breakpoint: ${breakpoint.previousName} (${breakpoint.previousValue})` }</p>
            </div>
        );

    }
}

BreakpointTracker.contextTypes = {
    breakpoint: PropTypes.object.isRequired
};

