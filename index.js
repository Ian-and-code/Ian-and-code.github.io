const app = document.querySelector('#app')
const md = fetch('/Index.md').then((response) => response.text()).then((text) => {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    app.innerHTML = html
  })
