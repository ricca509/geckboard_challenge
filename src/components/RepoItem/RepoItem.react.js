import React from 'react';
import Router from 'react-router';
import './RepoItem.scss';

let Link = Router.Link;

class RepoItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        console.log('', this.props.repo);

        return (
            <div className="repoItem group">
                <Link
                    to="details"
                    className="repoItem-link"
                    params={{ name: this.props.repo.name, username: this.props.repo.owner.login }}>
                    { this.props.repo.name }                    
                </Link>

                <div className="repoItem-counts">
                    <ul>
                        <li>
                            { this.props.repo.watchers_count }
                        </li>
                        <li>
                            { this.props.repo.stargazers_count }
                        </li>
                        <li>
                            { this.props.repo.forks_count }
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}

RepoItem.propTypes = {};
RepoItem.defaultProps = {};

export default RepoItem;
