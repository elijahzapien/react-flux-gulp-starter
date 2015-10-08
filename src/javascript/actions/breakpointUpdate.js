'use strict';

export default function breakpointUpdate (actionContext, payload, done) {
    actionContext.dispatch('BREAKPOINT_UPDATE');
    done();
}
