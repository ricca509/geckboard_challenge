import React from 'react';
import ReposStore from '../../stores/ReposStore';
import ReposActions from '../../actions/ReposActions';
import RepoDetails from '../RepoDetails/RepoDetails.react.js';

class RepoDetailsController extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            repo: {}
        };
    }
    componentDidMount() {
        ReposStore.listen(this.onChange.bind(this));

        ReposActions.getRepo(this.props.params.username, this.props.params.name);
    }
    componentWillUnmount() {
        ReposStore.unlisten(this.onChange.bind(this));
    }
    render () {
        return (
            <div>
                <RepoDetails repo={this.state.repo} />
            </div>
        );
    }
    onChange (state) {
        this.setState(state);
    }
}

RepoDetailsController.propTypes = {};
RepoDetailsController.defaultProps = {};

export default RepoDetailsController;
