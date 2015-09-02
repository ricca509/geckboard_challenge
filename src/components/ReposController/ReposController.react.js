import React from 'react';
import Repos from '../Repos/Repos.react.js';
import ReposStore from '../../stores/ReposStore';
import ReposActions from '../../actions/ReposActions';

class ReposController extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            repos: []
        };
    }
    componentDidMount() {        
        let user = this.props.params.username ? this.props.params.username : 'ricca509';
        ReposStore.listen(this.onChange.bind(this));

        ReposActions.getRepos(user);
    }
    componentWillUnmount() {
        ReposStore.unlisten(this.onChange.bind(this));
    }
    render () {
        return (
            <div>
                <Repos repos={this.state.repos} />
            </div>
        );
    }
    onChange (state) {
        this.setState(state);
    }
}

ReposController.propTypes = {};
ReposController.defaultProps = {};

export default ReposController;
