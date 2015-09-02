import _ from 'underscore';

const OPTIONS = { method: 'GET',
       mode: 'cors',
       cache: 'default' };

let services = {
    getRepos (username) {
        // https://api.github.com/users/ricca509/repos
        let url = _.template('https://api.github.com/users/<%= username %>/repos');

        return fetch(url({ username: username }), OPTIONS)
            .then((response) => {
                return response.json();
            });
    },

    getRepo (username, reponame) {
        // https://api.github.com/repos/ricca509/acidseed
        let url = _.template('https://api.github.com/repos/<%= username %>/<%= reponame %>');

        return fetch(url({ username: username, reponame: reponame }), OPTIONS)
            .then((response) => {
                return response.json();
            });
    },

    getRepoAdditionalInfo (url) {
        return fetch(url, OPTIONS)
            .then((response) => {
                return response.json();
            });
    }
};

export default services;
