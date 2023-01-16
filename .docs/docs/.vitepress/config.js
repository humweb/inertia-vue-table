module.exports = {
	title: 'Inertia Vue Table',
    base: '/inertia-vue-table/',
    themeConfig: {

        // nav: nav(),
        sidebar: {
            '/guide/': sidebarGuide(),
        },
    }
}

function nav() {
    return [
        {
            text: 'Docs',
            activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
            items: [
                { text: 'Guide', link: '/guide/introduction' },
                { text: 'Tutorial', link: '/tutorial/' },
                { text: 'Examples', link: '/examples/' },
                { text: 'Quick Start', link: '/guide/quick-start' },
            ]
        },
    ]
}
        function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'What is this?', link: '/guide/what-is-inertiavuetable' },
                { text: 'Getting Started', link: '/guide/getting-started' },
            ]
        },
        {
            text: 'Backend',
            collapsible: true,
            items: [
                { text: 'Resources', link: '/guide/resources' },
                { text: 'Fields', link: '/guide/fields' },
            ]
        },
        {
            text: 'Frontend',
            collapsible: true,
            items: [
                { text: 'Props', link: '/guide/props' },
                { text: 'Slots', link: '/guide/slots' },
            ]
        },

    ]
}
