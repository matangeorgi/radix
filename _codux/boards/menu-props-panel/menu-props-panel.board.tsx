import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../src/components/menu-props-panel/menu-props-panel';

export default createBoard({
    name: 'MenuPropsPanel',
    Board: () => <Menu />,
});
