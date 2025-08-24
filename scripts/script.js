class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <h1>Manz.dev</h1>
        <ul>
          <li> <a href="index.html">principal</a></li>
          <li> <a href="Estudios.html">estudios</a></li>
      </footer>
    `;
  }
}

customElements.define("my-footer", MyFooter);
