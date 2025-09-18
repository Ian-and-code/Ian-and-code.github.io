// Lista de paquetes (podés añadir más fácilmente)
const packages = [
    {
        name: "Logical",
        description: "Paquete de ejemplo para operaciones lógicas.",
        whl: "simple/Logical/Logical-0.1.0-py3-none-any.whl",
        tar: "simple/Logical/Logical-0.1.0.tar.gz"
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
        <a href="${pkg.whl}">Descargar .whl</a><br>
        <a href="${pkg.tar}">Descargar .tar.gz</a>
    `;
    
    container.appendChild(div);
});
