import alt from '../../alt';
import ReposStore from '../ReposStore';
import ReposActions from '../../actions/ReposActions';

describe('The ReposStore', function () {
    it('should listen for GET_REPOS action', () => {
        let data = null;
        let action = ReposActions.GET_REPOS;

        alt.dispatcher.dispatch({action, data});

        expect(ReposStore.getState().repos).toEqual([]);
    });

    it('should listen for UPDATE_REPOS action', () => {
        let data = ['a', 'b'];
        let action = ReposActions.UPDATE_REPOS;

        alt.dispatcher.dispatch({action, data});

        expect(ReposStore.getState().repos).toEqual(['a', 'b']);
    });

    // Same here, not testing the other methods as they are essentially the same
});
