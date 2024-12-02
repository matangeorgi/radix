import { createBoard } from '@wixc3/react-board';
import { MenuPropsPanel } from '../../../src/components/menu-props-panel/menu-props-panel';

export default createBoard({
    name: 'MenuPropsPanel',
    Board: () => <MenuPropsPanel />,
});
