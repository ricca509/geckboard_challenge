import React from 'react';
import Router from 'react-router';
import App from '../components/App/App.react.js';
import ReposController from '../components/ReposController/ReposController.react.js';
import RepoDetailsController from '../components/RepoDetailsController/RepoDetailsController.react.js';

var Route = Router.Route;

var routes = (
    <Route handler={App} path="/">
        <Route name="main" handler={ReposController} path="/repos/:username"></Route>
        <Route name="details" handler={RepoDetailsController} path="/repo/:username/:name"></Route>
    </Route>
);

export default routes;
