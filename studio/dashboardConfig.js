export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61ebb1d683f6718ff40b4582',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qgwtrj7m',
                  apiId: '5ca91c0a-009f-4978-bd84-5749d11c27ca'
                },
                {
                  buildHookId: '61ebb1d783f6718bae0b4804',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6xidtxyu',
                  apiId: '5930a3a1-eadb-4fa0-b6dc-3ae1bcb34443'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hkrone74/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6xidtxyu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
