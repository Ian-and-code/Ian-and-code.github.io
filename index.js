const app = document.querySelector('#app')
const md = fetch('https://github.com/Ian-and-code/Ian-and-code.github.io/blob/main/index.js').then((response) => response.text()).then((text) => {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    app.innerHTML = html
  })
