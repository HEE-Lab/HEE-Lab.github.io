import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '242'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '14f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd7e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ec1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'dd8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '62f'),
    exact: true
  },
  {
    path: '/advisor',
    component: ComponentCreator('/advisor', 'b4a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '771'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '50e'),
    exact: true
  },
  {
    path: '/blog/swe',
    component: ComponentCreator('/blog/swe', '46f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a24'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e4a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '7f1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'bd4'),
    exact: true
  },
  {
    path: '/blog/tags/hydraulics',
    component: ComponentCreator('/blog/tags/hydraulics', '9a3'),
    exact: true
  },
  {
    path: '/blog/tags/swe',
    component: ComponentCreator('/blog/tags/swe', '6f4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '49c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9e6'),
    exact: true
  },
  {
    path: '/members',
    component: ComponentCreator('/members', '96b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4aa'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c0c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
