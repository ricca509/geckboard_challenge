var alt = require('../alt');
import _ from 'underscore';
var ReposActions = require('../actions/ReposActions');

class ReposStore {
    constructor() {
        this.state = {
            repos: [],
            repo: {}
        };

        this.bindListeners({
            handleGetRepos: ReposActions.GET_REPOS,
            handleUpdateRepos: ReposActions.UPDATE_REPOS,
            handleGetRepo: ReposActions.GET_REPO,
            handleUpdateRepo: ReposActions.UPDATE_REPO
        });
    }

    handleGetRepos () {
        this.setState({
            repos: []
        });
    }

    handleUpdateRepos (repos) {
        this.setState({
            repos: repos
        });
    }

    handleGetRepo () {
        this.setState({
            repo: {}
        });
    }

    handleUpdateRepo (options) {
        let repo = _.extend(options.repo, { languages: options.languages });
        
        this.setState({
            repo: repo
        });
    }
}

module.exports = alt.createStore(ReposStore, 'ReposStore');
