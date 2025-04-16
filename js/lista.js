class Lista extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Guardar los temas antes de modificar el innerHTML
        const temas = Array.from(this.querySelectorAll('tema-item'));

        // Limpiar el contenido del componente y construir la estructura
        this.innerHTML = `
            <link rel="stylesheet" href="css/index.css"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <style>
                #container {
                    display: flex;
                    width: 100%;
                    margin: 20px 0;
                }
                #temaContainer {
                    max-height: 600px;
                    overflow-y: auto;
                    padding: 10px;
                    width: 300px;
                    margin-right: 20px;
                    scrollbar-width: thin;
                    scrollbar-color: #888 #f1f1f1;
                }
                #temaContainer::-webkit-scrollbar {
                    width: 8px;
                }
                #temaContainer::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                #temaContainer::-webkit-scrollbar-thumb {
                    background-color: #888;
                    border-radius: 10px;
                }
                #temaContainer::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
                .tema {
                    cursor: pointer;
                    padding: 8px;
                    /* Se ha eliminado el borde de separación entre los temas */
                }
                .tema:hover {
                    background-color: #f0f0f0;
                }
                .titulo {
                    font-weight: bold;
                }
                .subtitulo {
                    font-style: italic;
                    font-size: 0.9em;
                    color: #555;
                }
                #contenido {
                    padding: 10px;
                    flex-grow: 1;
                    min-width: 300px;
                }
            </style>
            <div id="container">
                <div id="temaContainer"></div>
                <div id="contenido">Selecciona un tema</div>
            </div>
        `;

        const temaContainer = this.querySelector('#temaContainer');
        const contenidoDiv = this.querySelector('#contenido');

        temas.forEach((tema, index) => {
            const titulo = tema.querySelector('titulo')?.innerHTML || `Tema ${index + 1}`;
            const subtitulo = tema.querySelector('subtitulo')?.innerHTML || '';

            // Clonar el tema y eliminar los elementos de título para mostrar solo el contenido
            const clone = tema.cloneNode(true);
            clone.querySelectorAll('titulo, subtitulo').forEach(el => el.remove());
            const contenidoHTML = clone.innerHTML;

            const div = document.createElement('div');
            div.classList.add('tema');

            div.innerHTML = `
                <div class="titulo">${titulo}</div>
                ${subtitulo ? `<div class="subtitulo">${subtitulo}</div>` : ''}
            `;

            div.addEventListener('click', () => {
                contenidoDiv.innerHTML = contenidoHTML;
            });

            temaContainer.appendChild(div);
        });
    }
}

window.customElements.define("mi-lista", Lista);
