class ManzDevHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <header>
        <h1>Manz.dev</h1>
        <img src="https://manz.dev/manz-logo.svg" alt="Manz.dev">
      </header>
    `;
  }
}

customElements.define("manzdev-header", ManzDevHeader);
