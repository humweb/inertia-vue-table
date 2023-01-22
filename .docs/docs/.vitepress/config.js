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
        }
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
