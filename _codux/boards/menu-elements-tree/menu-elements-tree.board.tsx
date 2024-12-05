import { createBoard } from '@wixc3/react-board';
import NavigationMenuDemo from '~/components/menu-elements-tree/menu-elements-tree';

export default createBoard({
    name: 'MenuElementsTree',
    Board: () => <NavigationMenuDemo />,
});
