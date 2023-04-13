function obtenerMensaje() {
  let mensaje = document.getElementById("input-text").value;
  return mensaje;
}

function encriptar() {
  let mensaje = obtenerMensaje().toLowerCase();

  // Ciclo para recorrer todo el mensaje en busca de las 'llaves' para la encriptacion.
  if (mensaje.length != 0) {
    let mensajeEncriptado = ""
    for (let i = 0; i < mensaje.length; i++) {

      switch (mensaje[i]) {
        case 'a':
          mensajeEncriptado += 'ai'
          break;
        case 'e':
          mensajeEncriptado += 'enter'

          break;
        case 'i':
          mensajeEncriptado += 'imes'

          break;
        case 'o':
          mensajeEncriptado += 'ober'

          break;
        case 'u':
          mensajeEncriptado += 'ufat'
          break;
        default:
          mensajeEncriptado += mensaje[i]
          break;
      }

    }

    mensajeFinal = `
    <div class="d-grid mx-auto">
    <h3 class=" text-center" id="cifrado">${mensajeEncriptado}</h3>
    <button type="button" class="btn btn-lg btn-outline-primary px-5 mx-2 " onClick="copiar('cifrado')">Copiar texto</button> 
    </div>
    `
    var secc = document.getElementById("seccionMensaje");
    secc.innerHTML = mensajeFinal;

  }
  else {
    mensajeNada = `
    <div class="card " style="border: none;">
    <div class="card-body ">
        <img src="/assets/Muñeco.png" class="card-img img-responsive imgmuñeco" alt="...">
        <h4 class="card-subtitle mb-2 text-center text-body-secondary mt-5 h4text">Ningún mensaje fue encontrado</h4>
        <p class="card-text text-center">Ingresa el texto que desees encriptar o desencriptar.</p>
    </div>
    </div>
    `
    var secc = document.getElementById("seccionMensaje");
    secc.innerHTML = mensajeNada
    alert("No ha escrito ningun mensaje.")
  }
}

function desencriptar() {
  let mensaje = obtenerMensaje().toLowerCase();

  // Ciclo para recorrer todo el mensaje en busca de las 'llaves' para la encriptacion.
  if (mensaje.length != 0) {
    while (mensaje.includes('ai') ||
      mensaje.includes('enter') ||
      mensaje.includes('imes') ||
      mensaje.includes('ober') ||
      mensaje.includes('ufat')) {

      mensaje = mensaje.replace('ai', 'a')
      mensaje = mensaje.replace('enter', 'e')
      mensaje = mensaje.replace('imes', 'i')
      mensaje = mensaje.replace('ober', 'o')
      mensaje = mensaje.replace('ufat', 'u')
    }

    let mensajeDesencriptado = mensaje

    mensajeFinal = `
    <div class="d-grid mx-auto">
    <h3 class=" text-center" id="cifrado">${mensajeDesencriptado}</h3>
    <button type="button" class="btn btn-lg btn-outline-primary px-5 mx-2 " onClick="copiar('cifrado')">Copiar texto</button> 
    </div>
    `
    secc = document.getElementById("seccionMensaje");
    secc.innerHTML = mensajeFinal;
  }
  else {
    mensajeNada = `
    <div class="card " style="border: none;">
    <div class="card-body ">
        <img src="/assets/Muñeco.png" class="card-img img-responsive imgmuñeco" alt="...">
        <h4 class="card-subtitle mb-2 text-center text-body-secondary mt-5 h4text">Ningún mensaje fue encontrado</h4>
        <p class="card-text text-center">Ingresa el texto que desees encriptar o desencriptar.</p>
    </div>
    </div>
    `
    var secc = document.getElementById("seccionMensaje");
    secc.innerHTML = mensajeNada
    alert("No ha escrito ningun mensaje.")
  }
}

function mostrarMensaje() {
  return encriptado;
}

function copiar(id_elemento) {
  let aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("Mensaje copiado en el portapapeles");
}
