'use strict';

import React, {Component} from 'react';

export default class BreakpointTracker extends Component {
    render() {
        let breakpoint = this.props.breakpoint;
        return (
            <div className="breakpoint-tracker">
                <span>
                    {
                        `
                        Current Breakpoint: "${breakpoint.currentName}" ${breakpoint.currentValue}
                        Previous Breakpoint: "${breakpoint.previousName}" ${breakpoint.previousValue}
                        `
                    }
                </span>
            </div>
        );
    }
}

