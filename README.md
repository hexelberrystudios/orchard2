# Orchard

> A Vue.js project with vue 2.0, vue-router and vuex starter kit for server side rendering.

## Build Setup

``` bash
npm install
npm run build
npm start
```

## Development Setup

```bash
npm install
npm run dev
```

## Hoodie Setup
``` mkdir -p .hoodie/data/hoodie-config ```

## Technologies/Concepts used

Vue.js 2.0
Vuex
Hoodie
PouchDB
CouchDB
Webpack
ESLint
Hapi
Isomorphic Rendering

## Technologies/Concepts in progress

Service Workers
Progressive Web App
Progressive Enhancement (works without Javascript)
Accessibility (AA compliance, research AAA compliance)

## CouchDB Views in Hoodie

hoodie.store.findAll()
  .then((docs) => {
    return docs.filter(doc => doc.date) // filter out docs that have no date field
  })
  .then((docsWithDateField) => {
    // do your thing
  })

## Architectural Notes

"value" is a reserved property on fields. Do not create a field with a value property, since that's the property that gets used when assigning a value to the field.
"name" is a reserved property on fields. This will be the field id used by the store.

## @TODO:

- ** move server framework to Nuxt (https://nuxtjs.org/) **
- Generate uuid on the client/server for new hoodie items