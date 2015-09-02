import React from 'react';
import routes from './routes/routes.react.js';
import Router from 'react-router';

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler params={state.params} />, document.querySelector('[data-role="react-app"]'));
});
