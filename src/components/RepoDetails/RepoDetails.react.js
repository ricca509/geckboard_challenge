import React from 'react';
import moment from 'moment';
import Router from 'react-router';
import _ from 'underscore';
import './RepoDetails.scss';

let Link = Router.Link;

class RepoDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    getLanguages () {
        let lines = _.chain(this.props.repo.languages)
            .values()
            .reduce((memo, value) => {
                return memo + value;
            }, 0)
            .value();

        let percentages = _.map(this.props.repo.languages, (languageLines, key) => {
            return {
                lang: key,
                perc:Math.ceil(languageLines/lines * 100)
            }
        });

        return percentages.map((percentage, key) => {
            return (
                <li key={key} className="repoDetails-perc group">
                    <b className="repoDetails-perc-lang">{percentage.lang}</b>
                    <br />
                    <span className="repoDetails-perc-perc">{percentage.perc}%</span>
                </li>
            );
        });
    }

    render () {
        return (
            <div className="repoDetails">
                <div className="group">
                    <div className="repoDetails-title">
                        <span className="repoDetails-name">{ this.props.repo.name }</span> &middot; <span className="repoDetails-updated">Last updated { moment(this.props.repo.updated_at).fromNow() }</span>
                    </div>

                    <div className="repoDetails-counts">
                        <ul>
                            <li>
                                w { this.props.repo.watchers_count }
                            </li>
                            <li>
                                s { this.props.repo.stargazers_count }
                            </li>
                            <li>
                                f { this.props.repo.forks_count }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="repoDetails-description group">
                    { this.props.repo.description }
                </div>
                <ul className="repoDetails-percentages">
                    { this.getLanguages() }
                </ul>
                <Link
                    to="main"
                    className="repoDetails-link"
                    params={{ username: this.props.repo.owner ? this.props.repo.owner.login : '' }}>
                    Back to list
                </Link>
            </div>
        );
    }
}

RepoDetails.propTypes = {};
RepoDetails.defaultProps = {

};

export default RepoDetails;
