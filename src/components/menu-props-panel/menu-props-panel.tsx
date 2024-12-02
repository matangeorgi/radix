import { Content, Item, Menu, Portal, Root, Trigger } from '@radix-ui/react-menubar';

export interface MenuPropsPanelProps {
    className?: string;
    menuItems: MenuItem[];
}

export interface MenuItem {
    label: string;
    shortcut?: string;
    disabled?: boolean;
    subMenu?: MenuItem[];
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MenuPropsPanel = ({ className, menuItems }: MenuPropsPanelProps) => {
    return (
        <Root className={className}>
            {menuItems.map((item, index) => (
                <Menu key={index}>
                    <Trigger>{item.label}</Trigger>
                    {item.subMenu && <MenuItem {...item} />}
                </Menu>
            ))}
        </Root>
    );
};

export const MenuItem = ({ shortcut, disabled, subMenu }: MenuItem) => {
    return (
        <Portal>
            <Content>
                <Menu>
                    {subMenu?.map((item, index) => (
                        <Item key={index} disabled={item.disabled}>
                            <Trigger>{item.label}</Trigger>
                        </Item>
                    ))}
                </Menu>
            </Content>
        </Portal>
    );
};
