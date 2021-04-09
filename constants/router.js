export const AXIOS_ROUTER = {
  introduction: {
    displayName: 'Introduction',
    menu: null,
    previous: null,
    next: 'setup',
  },
  setup: {
    displayName: 'Setup',
    menu: 'GETTING STARTED',
    previous: 'introduction',
    next: 'usage',
  },
  usage: {
    displayName: 'Usage',
    menu: 'GETTING STARTED',
    previous: 'setup',
    next: 'options',
  },
  options: {
    displayName: 'Options',
    menu: 'GETTING STARTED',
    previous: 'usage',
    next: 'extend',
  },
  extend: {
    displayName: 'Extending axios',
    menu: 'API',
    previous: 'options',
    next: 'helpers',
  },
  helpers: {
    displayName: 'Helpers',
    menu: 'API',
    previous: 'extend',
    next: 'migration',
  },
  migration: {
    displayName: 'Migration guides',
    menu: 'MIGRATION',
    previous: 'helpers',
    next: 'releases',
  },
  releases: {
    displayName: 'Releases',
    menu: 'COMMUNITY',
    previous: 'migration',
    next: null,
  },
}
