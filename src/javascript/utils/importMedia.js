'use strict';

/**
 * Inspired by
 * https://css-tricks.com/making-sass-talk-to-javascript-with-json/
 * https://github.com/eduardoboucas/include-media-export
 *
 * NOTE: this setup does not support <=IE8
 *
 */

let element = document.body;
let breakpoints = false;

function removeQuotes(string) {
    if (typeof string === 'string' || string instanceof String) {
        string = string.replace(/[']/g, '"').replace(/\\|^[\s\S]{0,1}|[\s\S]$/g, '');
    }
    return string;
};

function getBreakpoints() {
    if (
        (window.getComputedStyle) &&
        (window.getComputedStyle(element, '::after').content !== '')
    ) {
        let data = window.getComputedStyle(element, '::after').content;
        try {
            breakpoints = JSON.parse(removeQuotes(data));
            return breakpoints;
        } catch (err) {
            console.log(err);
        }
    }
};

function isBreakpointActive(breakpoint) {
    getBreakpoints();
    return breakpoints.hasOwnProperty(breakpoint) && breakpoints[breakpoint].active;
};

function isBreakpointNotActive(breakpoint) {
    return !isBreakpointActive(breakpoint);
};

function getActiveBreakpoint() {
    getBreakpoints();

    let largest = {name: false, value: 0};

    for (let breakpoint in breakpoints) {
        if (breakpoints.hasOwnProperty(breakpoint)) {
            let breakpointValue = parseFloat(breakpoints[breakpoint].value);

            if (breakpoints[breakpoint].active && (breakpointValue > largest.value)) {
                largest = {name: breakpoint, value: breakpointValue};
            }
        }
    }

    return largest.name;
};

function getBreakpointValue(breakpoint, asNumber) {
    getBreakpoints();

    if (!breakpoints || !breakpoints.hasOwnProperty(breakpoint)) return false;

    return asNumber ? parseFloat(breakpoints[breakpoint].value) : breakpoints[breakpoint].value;
};

export default {
    getBreakpoints: getBreakpoints,
    getActive: getActiveBreakpoint,
    getValue: getBreakpointValue,
    isGreaterThan: isBreakpointActive,
    isLessThan: isBreakpointNotActive
};
