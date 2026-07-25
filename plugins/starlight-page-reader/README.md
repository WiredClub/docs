# starlight-page-reader

Adiciona o componente `PageReader` abaixo do ToC do Starlight.

```js
starlightPageReader({ pages: true })
starlightPageReader({ pages: ['vamos-comecar/**', 'guias-praticos/*'] })
```

Quando `PageSidebar` já foi sobrescrito, o plugin não substitui o componente e exibe um alerta. Nesse caso, o override deve importar e renderizar `PageReader` manualmente.
