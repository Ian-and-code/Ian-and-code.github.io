let pyodide;
let output_buffer = "";

// Función para inicializar Pyodide cuando se carga la página
async function main() {
    pyodide = await loadPyodide();
    console.log('Pyodide está listo y cargado.');
    
    // Redirige la salida de la consola de Python a una variable de JavaScript
    pyodide.runPython("import sys\n" +
                     "from io import StringIO\n" +
                     "sys.stdout = sys.stderr = StringIO()");
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
        // Redirige la salida temporalmente para capturarla
        await pyodide.runPythonAsync(codigo);
        let stdout = pyodide.runPython("sys.stdout.getvalue()");
        salida.textContent = stdout || 'Ejecución completada.';
        
        // Limpia el buffer de salida de Python para la próxima ejecución
        pyodide.runPython("sys.stdout = sys.stderr = StringIO()");

    } catch (error) {
        // Si hay un error en el código Python, lo muestra en la salida
        salida.textContent = `Error:\n${error}`;
    }
}
