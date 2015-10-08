"use strict";

/**
 * Inspired by
 * https://css-tricks.com/making-sass-talk-to-javascript-with-json/
 * https://github.com/eduardoboucas/include-media-export
 *
 * NOTE: this setup does not support <=IE8
 *
 * WIP
 * last updated sep 24, 2015
 */

var importMedia = {
    name: 'importMedia',

    plugContext: (options, context, app) => {
        // `options` is the same as what is passed into `Fluxible.createContext(options)`
        //let foo = options.foo;

        let element = typeof document !== 'undefined' ? document.body : null;
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
                } catch (err) {}
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

            if (!breakpoints || !breakpoints.hasOwnProperty(breakpoint)) {
                return false;
            }

            return asNumber ? parseFloat(breakpoints[breakpoint].value) : breakpoints[breakpoint].value;

        };

        return {

            /**
             * available plugs
             * plugComponentContext: function (componentContext, context, app) {}
             * plugActionContext: function (actionContext, context, app) {}
             * plugStoreContext: function (storeContext, context, app) {}
             */

            plugStoreContext: (storeContext, context, app) => {

                storeContext.importMedia = {
                    getBreakpoints: getBreakpoints,
                    getActive: getActiveBreakpoint,
                    getValue: getBreakpointValue,
                    isGreaterThan: isBreakpointActive,
                    isLessThan: isBreakpointNotActive
                };

                return storeContext;

            },

            /**
             * Allows context plugin settings to be persisted between server and client. Called on server
             * to send data down to the client
             * @method dehydrate
             */
            dehydrate: () => {
                /*return {};*/
            },

            /**
             * Called on client to rehydrate the context plugin settings
             * @method rehydrate
             * @param {Object} state Object to rehydrate state
             */
            rehydrate: (state) => {
            }
        };
    },

    /**
     * Allows dehydration of application plugin settings
     * @method dehydrate
     */
    dehydrate: () => {
        /*return {}*/
    },

    /**
     * Allows rehydration of application plugin settings
     * @method rehydrate
     * @param {Object} state Object to rehydrate state
     */
    rehydrate: (state) => {
    }
};

export default importMedia;
