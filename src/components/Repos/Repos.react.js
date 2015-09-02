import React from 'react';
import RepoItem from '../RepoItem/RepoItem.react.js';
import './Repos.scss';

class Repos extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    getReposComponents () {
        return this.props.repos.map((repo, key) => {
            return <RepoItem key={key} repo={repo} />
        });
    }

    render () {
        let repos = this.getReposComponents();

        return (
            <div className="repos">
                { repos }
            </div>
        );
    }
}

Repos.propTypes = {};
Repos.defaultProps = {};

export default Repos;
