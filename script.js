let pyodide;

// Función para inicializar Pyodide cuando se carga la página
async function main() {
    pyodide = await loadPyodide();
    console.log('Pyodide está listo y cargado.');
}

// Llama a la función principal
main();

// Esta función se ejecuta cuando el usuario hace clic en el botón "Ejecutar"
async function ejecutarCodigo() {
    const editor = document.getElementById('editor');
    const salida = document.getElementById('salida');
    const codigo = editor.value;

    salida.textContent = 'Ejecutando...';

    try {
        // Ejecuta el código de Python y captura la salida
        const resultado = await pyodide.runPythonAsync(codigo);
        salida.textContent = resultado || ''; // Si no hay salida, muestra un string vacío
    } catch (error) {
        // Si hay un error en el código Python, lo muestra en la salida
        salida.textContent = `Error:\n${error}`;
    }
}
