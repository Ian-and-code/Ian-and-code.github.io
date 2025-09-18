// Lista de paquetes (podés añadir más fácilmente)
const packages = [
    {
        name: "Logical",
        description: "Paquete de ejemplo para operaciones lógicas.",
        link: "https://ian-and-code.github.io/simple/Logical/index.html"
    }
];

// Generar HTML dinámicamente
const container = document.getElementById("packages-container");

packages.forEach(pkg => {
    const div = document.createElement("div");
    div.className = "package";
    
    div.innerHTML = `
        <h2>${pkg.name}</h2>
        <p>${pkg.description}</p>
        <a href="${pkg.link}">Pagina del modulo</a>
    `;
    
    container.appendChild(div);
});
