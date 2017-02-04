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

## CouchDB Views in Hoodie

hoodie.store.findAll()
  .then((docs) => {
    return docs.filter(doc => doc.date) // filter out docs that have no date field
  })
  .then((docsWithDateField) => {
    // do your thing
  })

## @TODO:

- Update all form elements to use vuex
- Add route event listener that clears the form object every time the route changes (maybe?)
- Complete New Item Page