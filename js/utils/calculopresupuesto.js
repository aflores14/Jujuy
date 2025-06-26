export async function iniciarPresupuesto(presupuesto){    
    localStorage.setItem("prespuesto", JSON.stringify(presupuesto));
    const ll = JSON.parse(localStorage.getItem("prespuesto"));
    return ll;
}

export function calcularPrespuesto(apellidoYnombre,fecha,salon,idsservicios){
    let p = buscarPresupuesto();
    p.apellidoYnombre = apellidoYnombre;
    p.fecha = fecha;
    p.tematica = salon.titulo;
    p.valorTotal = salon.valor;
    if(p.listaServiciosSeleccionados.length==0){
        p.listaServiciosSeleccionados.push(servicio);
        p.valorTotal = p.valorTotal + servicio.valor;
    }else{
        const l = listarServicios();
        p.listaServiciosSeleccionados.forEach(item=>{
            if(!idsservicios.include(item.id)){
                p.valorTotal = p.valorTotal + item.valor;
            }
        });
        if(band){
            p.listaServiciosSeleccionados.push(servicio);
            p.valorTotal = p.valorTotal + servicio.valor;
        }
    }
    localStorage.setItem("prespuesto", JSON.stringify(presupuestoActual));
    return p;
}

function buscarPresupuesto(){
    const ll = JSON.parse(localStorage.getItem("prespuesto"));
    return ll;
}