/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
    title: 'Inertia Vue Table',
    base: '/inertia-vue-table/',
    outDir: '../docs/',
    themeConfig: {

        // nav: nav(),
        sidebar: {
            '/guide/': sidebarGuide(),
        },
        algolia: {
            appId: 'W5CY2S9LMZ',
            apiKey: 'c73409be45109b0c282f41b517909a34',
            indexName: 'inertia-vue-table'
        },
    },

};

function nav() {
    return [
        {
            text: 'Docs',
            activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
            items: [
                {text: 'Guide', link: '/guide/introduction'},
                {text: 'Tutorial', link: '/tutorial/'},
                {text: 'Examples', link: '/examples/'},
                {text: 'Quick Start', link: '/guide/quick-start'},
            ],
        },
    ];
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                {text: 'What is this?', link: '/guide/what-is-inertiavuetable'},
                {text: 'Getting Started', link: '/guide/getting-started'},
            ],
        },
        {
            text: 'Backend',
            collapsible: true,
            items: [
                {text: 'Resources', link: '/guide/resources'},
                {text: 'Fields', link: '/guide/fields'},
            ],
        },
        {
            text: 'Frontend',
            collapsible: true,
            items: [
                {text: 'Props', link: '/guide/props'},
                {text: 'Slots', link: '/guide/slots'},
            ],
        },

    ];
}
