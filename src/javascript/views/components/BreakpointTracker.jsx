import React, { Component, PropTypes } from 'react';

export default class BreakpointTracker extends Component {
    render() {

        let breakpoint = this.context.breakpoint;

        return (
            <div className="breakpoint-tracker">
                <p className="bold">{'Breakpoint:'}</p>
                <p>
                    Current:
                    <br />
                    {`${breakpoint.currentName} (${breakpoint.currentValue})`}
                </p>
                <p>
                    Previous:
                    <br />
                    {`${breakpoint.previousName} (${breakpoint.previousValue})`}
                </p>
            </div>
        );

    }
}

BreakpointTracker.contextTypes = {
    breakpoint: PropTypes.object.isRequired
};
