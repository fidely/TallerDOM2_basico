function calcularPresupuesto() {
    let ninvitados = parseInt(document.getElementById("numero-inv").value);
    let costoComida = parseInt(document.getElementById("cost-comida").value);
    let costoBebida = parseInt(document.getElementById("cost-bebida").value);
    let decoracion = parseInt(document.getElementById("cost-decor").value);
    let musica = parseInt(document.getElementById("cost-musica").value);
    let propinas = parseInt(document.getElementById("propina-porc").value);

    let total_comida = ninvitados*costoComida;
    document.getElementById("comida-total-s").innerText =total_comida.toLocaleString('es-CO');

    let total_bebida = ninvitados*costoBebida;
    document.getElementById("bebida-total-s").innerText =total_bebida.toLocaleString('es-CO');

    let total_decoracion = ninvitados*decoracion;
    document.getElementById("decoracion").innerText =total_decoracion.toLocaleString('es-CO');

    let total_musica =ninvitados*musica;
    document.getElementById("musica").innerText =total_musica.toLocaleString('es-CO');

    let subtotal = total_comida + total_bebida + total_decoracion + total_musica;
    document.getElementById("subtotal").innerText =subtotal.toLocaleString('es-CO');

    let total_propinas = subtotal * (propinas / 100);
    document.getElementById("propina").innerText =total_propinas.toFixed(1).toLocaleString('es-CO');

    let total_general =subtotal+propinas;
    document.getElementById("total-general").innerText =total_general.toLocaleString('es-CO');

    let costo_invitado = total_general / ninvitados;
    document.getElementById("costo-inv").innerText =costo_invitado.toLocaleString('es-CO');
    
}