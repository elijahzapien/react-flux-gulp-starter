import React, { Component, PropTypes } from 'react';

export default class BreakpointTracker extends Component {

    static contextTypes = {
        breakpoint: PropTypes.object
    }

    render() {
        const breakpoint = this.context.breakpoint;

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
