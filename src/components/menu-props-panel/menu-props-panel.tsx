import { Item, NavigationMenuProps, Root } from '@radix-ui/react-navigation-menu';
import { NavLink } from '@remix-run/react';

export interface MenuPropsPanelProps extends NavigationMenuProps {
    className?: string;
    children?: React.ReactNode;
}

export interface MenuItem {
    label: string;
    className?: string;
    /** @format link */
    to: string;
    subtitle?: string;
    backgroundSrc?: string;
    iconAlignment?: 'left' | 'right';
    icon?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Menu = ({ className, children }: MenuPropsPanelProps) => {
    return <Root className={className}>{children}</Root>;
};

export const MenuItem = ({ label, className, to }: MenuItem) => {
    return (
        <Item className={className}>
            <NavLink to={to}>{label}</NavLink>
        </Item>
    );
};
