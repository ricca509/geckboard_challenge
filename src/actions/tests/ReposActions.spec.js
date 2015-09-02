import alt from '../../alt';
import ReposActions from '../ReposActions';
import repoServices from '../../services/repoServices';

describe('The ResposActions', function () {
    beforeEach(() => {
        spyOn(alt.dispatcher, 'dispatch');
        spyOn(repoServices, 'getRepos').and.callFake(() => {
            return  Promise.resolve('values');
        });
    });

    describe('#getRepos(username)', () => {
        beforeEach(() => {
            spyOn(ReposActions, 'updateRepos');
        });

        it('dispatches the correct data', (done) => {
            ReposActions.getRepos('test')
                .then(() => {
                    expect(alt.dispatcher.dispatch.calls.first().args[0].action).toBe('ReposActions.getRepos');
                    expect(alt.dispatcher.dispatch.calls.first().args[0].data).toBeUndefined();
                    expect(ReposActions.updateRepos).toHaveBeenCalledWith('values');

                    done();
                });
        });
    });

    describe('#updateRepos(repos)', () => {
        it('dispatches the correct data', () => {
            ReposActions.updateRepos(['a', 'b']);

            expect(alt.dispatcher.dispatch.calls.first().args[0].action).toBe('ReposActions.updateRepos');
            expect(alt.dispatcher.dispatch.calls.first().args[0].data).toEqual(['a', 'b']);
        });
    });


    // The same applies to the other two identical methods, so skipping them 
});
