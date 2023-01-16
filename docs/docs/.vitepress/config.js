module.exports = {
	title: 'Inertia Vue Table',
    themeConfig: {

        nav: nav(),
        sidebar: {
            '/guide/': sidebarGuide(),
            // '/config/': sidebarConfig()
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
                // { text: 'Style Guide', link: '/style-guide/' },
                {
                    text: 'Vue 2 Docs',
                    link: 'https://v2.vuejs.org'
                },
                {
                    text: 'Migration from Vue 2',
                    link: 'https://v3-migration.vuejs.org/'
                }
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
