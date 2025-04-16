class Navegacion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="css/nav.css"/>
       <link rel="stylesheet" href="css/dark-mode.css"/>
    
        <nav class="navbar navbar-expand-lg navbar-light fixed-top color px-3">
        <div class="container-fluid">
          <a class="titulo-rodolfo fw-bold fs-5 text-white" href="#"></a>
          
          <button class="navbar-toggler" id="btn-toggle" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link text-white" href="index.html">Javascript</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="node.html">Node.js</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="typescript.html">Typescript</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="java.html">Java</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="php.html">PHP</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="python.html">Python</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="mysql.html">mySQL</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="mongodb.html">MongoDB</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="sql.html">SQL</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="documentacion.html">Documentación</a></li>
            </ul>
            <!-- Aquí insertas tu componente modo oscuro -->
            <mi-modo-oscuro style="width: 40px; height: 40px; object-fit: cover; margin-left: 700px;"></mi-modo-oscuro>
          </div>
        </div>
      </nav>
    
    `;

     // Comportamiento del toggle personalizado
     const toggleBtn = this.shadowRoot.getElementById("btn-toggle");
     const menu = this.shadowRoot.getElementById("menu");
 
     toggleBtn.addEventListener("click", () => {
       menu.classList.toggle("show");
     });
 
     console.log("Componente <mi-navegacion> cargado correctamente");
   }
}

customElements.define("mi-navegacion", Navegacion);

