import repoServices from '../repoServices';

describe('The Repo service', function () {
    beforeEach(() => {
        spyOn(window, 'fetch').and.callFake(() => {
            return  Promise.resolve({
                json: function () { return 'values'; }
            });
        });
    });

    describe('#getRepos(username)', () => {
        it('should call the right URL', () => {
            repoServices.getRepos('ricca509');

            expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/users/ricca509/repos', jasmine.any(Object));
        });

        it('should get the repos for a given user', (done) => {
            repoServices.getRepos('ricca509')
                .then((resp) => {
                    expect(resp).toBe('values');
                    done();
                });
        });
    });

    describe('#getRepo(username, reponame)', () => {
        it('should call the right URL', () => {
            repoServices.getRepo('ricca509', 'acidseed');

            expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/repos/ricca509/acidseed', jasmine.any(Object));
        });

        it('should get the repo', (done) => {
            repoServices.getRepo('ricca509', 'acidseed')
                .then((resp) => {
                    expect(resp).toBe('values');
                    done();
                });
        });
    });

    describe('#getRepoAdditionalInfo(url)', () => {
        it('should call the URL passed in the arguments', () => {
            repoServices.getRepoAdditionalInfo('testUrl');

            expect(window.fetch).toHaveBeenCalledWith('testUrl', jasmine.any(Object));
        });

        it('should get additional infos for a repo', (done) => {
            repoServices.getRepoAdditionalInfo('testUrl')
                .then((resp) => {
                    expect(resp).toBe('values');
                    done();
                });
        });
    });
});
