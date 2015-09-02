import alt from '../alt';
import repoServices from '../services/repoServices';

class ReposActions {
    getRepos (username) {
        console.log('fetching:', username);
        this.dispatch();

        return repoServices.getRepos(username)
            .then((repos) => {
                this.actions.updateRepos(repos);
            })
            .catch(() => {});
    }

    updateRepos (repos) {
        this.dispatch(repos);
    }

    getRepo (username, reponame) {
        this.dispatch();

        return repoServices.getRepo(username, reponame)
            .then((repo) => {
                return repoServices.getRepoAdditionalInfo(repo.languages_url)
                .then((languages) => {
                    this.actions.updateRepo({
                        repo: repo,
                        languages: languages
                    });
                })
            })
            .catch(() => {});
    }

    updateRepo (repo) {
        this.dispatch(repo);
    }
}

module.exports = alt.createActions(ReposActions);
