'use strict';

/**
 * Inspired by
 * https://css-tricks.com/making-sass-talk-to-javascript-with-json/
 * https://github.com/eduardoboucas/include-media-export
 *
 * NOTE: this setup does not support <=IE8
 *
 */

// might not be best way to imp
// TODO: think about refactor
export default class ImportMedia {

    constructor() {
        this.element = document.body;
        this.breakpoints = false;
    }

    removeQuotes(string) {
        if (typeof string === 'string' || string instanceof String) {
            string = string.replace(/[']/g, '"').replace(/\\|^[\s\S]{0,1}|[\s\S]$/g, '');
        }
        return string;
    }

    getBreakpoints() {
        if (
            (window.getComputedStyle) &&
            (window.getComputedStyle(this.element, '::after').content !== '')
        ) {
            let data = window.getComputedStyle(this.element, '::after').content;
            try {
                this.breakpoints = JSON.parse(this.removeQuotes(data));
                return this.breakpoints;
            } catch (err) {
                console.log(err);
            }
        }
    }

    isBreakpointActive(breakpoint) {
        this.getBreakpoints();
        return this.breakpoints.hasOwnProperty(breakpoint) && this.breakpoints[breakpoint].active;
    }

    isBreakpointNotActive(breakpoint) {
        return !this.isBreakpointActive(breakpoint);
    }

    getActiveBreakpoint() {
        this.getBreakpoints();

        let largest = {name: false, value: 0};

        for (let breakpoint in this.breakpoints) {
            if (this.breakpoints.hasOwnProperty(breakpoint)) {
                let breakpointValue = parseFloat(this.breakpoints[breakpoint].value);

                if (this.breakpoints[breakpoint].active && (breakpointValue > largest.value)) {
                    largest = {name: breakpoint, value: breakpointValue};
                }
            }
        }

        return largest.name;
    }

    getBreakpointValue(breakpoint, asNumber) {
        this.getBreakpoints();

        if (!this.breakpoints || !this.breakpoints.hasOwnProperty(breakpoint)) return false;

        return asNumber ? parseFloat(this.breakpoints[breakpoint].value) : this.breakpoints[breakpoint].value;
    }

}

