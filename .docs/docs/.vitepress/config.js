/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
    title: 'Inertia Vue Table',
    base: '/inertia-vue-table/',
    outDir: '../../docs/',
    themeConfig: {
        sidebar: {
            '/guide/': sidebarGuide(),
        },
        algolia: {
            appId: 'PJ0PW79NSC',
            apiKey: '016a824de5ad3697e323467f17e9f8c4',
            indexName: 'inertia-vue-table'
        },
    }

};

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
