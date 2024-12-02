import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import { MenuItem, MenuPropsPanel } from '~/components/menu-props-panel/menu-props-panel';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};
const menuItems: MenuItem[] = [
    {
        label: 'File',
        subMenu: [
            { label: 'New Tab', shortcut: '⌘ T' },
            { label: 'New Window', shortcut: '⌘ N' },
            { label: 'New Incognito Window', disabled: true },
            { label: 'Print…', shortcut: '⌘ P' },
        ],
    },
    {
        label: 'Edit',
        subMenu: [
            { label: 'Undo', shortcut: '⌘ Z' },
            {
                label: 'Redo',
                shortcut: '⇧ ⌘ Z',
            },
        ],
    },
    {
        label: 'View',
    },
    {
        label: 'daniel',
    },
];

export default function HomePage() {
    return <MenuPropsPanel menuItems={menuItems} />;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
