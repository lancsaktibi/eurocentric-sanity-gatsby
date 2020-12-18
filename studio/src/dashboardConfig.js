export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fdcc777bb4c0123c8704988',
                  title: 'Sanity Studio',
                  name: 'eurocentric-sanity-gatsby-studio',
                  apiId: '3d789755-2c31-4b1b-b286-2ba6ee93493d'
                },
                {
                  buildHookId: '5fdcc7776e0c5a1897d00d99',
                  title: 'Blog Website',
                  name: 'eurocentric-sanity-gatsby',
                  apiId: '0b4ad49c-5406-40e6-b3b6-2acc7cde34f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lancsaktibi/eurocentric-sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://eurocentric-sanity-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
