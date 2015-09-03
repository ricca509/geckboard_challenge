import React from 'react/addons';
import Repos from '../Repos.react.js';
import RepoItem from '../../RepoItem/RepoItem.react.js';

const TestUtils = React.addons.TestUtils;

describe('The Repos component', function () {
    beforeEach(() => {
        let repos = ['a', 'b'];
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<Repos repos={repos} />);

        this.component = shallowRenderer.getRenderOutput();
    });

    it('should render the right component', () => {
        expect(this.component.props.className).toBe('repos');
    });

    it('should render the right number of repositories', () => {
        expect(this.component.props.children.length).toBe(2);
    });

    it('should render them correctly', () => {
        let comp1 = this.component.props.children[0];
        let comp2 = this.component.props.children[1];

        expect(comp1.props.repo).toBe('a');
        expect(comp2.props.repo).toBe('b');
    });
});
