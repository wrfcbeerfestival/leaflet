import React from 'react';
import { withRouter } from 'react-router-dom';

const GA_TRACKING_ID = 'UA-121835940-3';

class GoogleAnalytics extends React.Component {
    componentWillUpdate ({ location, history }) {
        const gtag = window.gtag;
        if (location.pathname === this.props.location.pathname) {
            // don't log identical link clicks (nav links likely)
            return;
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0

        if (history.action === 'PUSH' &&
            typeof(gtag) === 'function') {
            gtag('config', GA_TRACKING_ID, {
                'page_location': window.location.href,
                'page_path': location.pathname
            });
        }
    }

    render () {
        return null;
    }
}

export default withRouter(GoogleAnalytics);