import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

    render() {
        const pageTitle = 'About - React, Flux, Gulp Started';

        return (
            <div>
                <Helmet title={pageTitle} />
                <h1>About</h1>
                <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize
                    customer directed convergence without revolutionary
                    ROI.
                </p>
                <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. Dramatically maintain clicks-and-mortar
                    solutions without functional solutions.
                </p>
                <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. Dynamically innovate
                    resource-leveling customer service for state of the art
                    customer service.
                </p>
            </div>
        );
    }

}
