export async function iniciarPresupuesto(){    
    let ls = JSON.parse(localStorage.getItem("servicios"));
    for(let indice =0 ; indice<ls.length;indice++){
        ls[indice].selecprespuesto = "n";
    }
    localStorage.setItem("servicios", JSON.stringify(ls));
    let p = {
        "id":0,
        "apellidoYnombre":"_______________",
        "fecha":"_______________",
        "tematica":"_______________",
        "valorTotal":0,
        "serviciosSeleccionados":[]
    }
    localStorage.setItem("prespuesto", JSON.stringify(p));
    const ll = JSON.parse(localStorage.getItem("prespuesto"));
    return ll;
}

export function calcularPrespuesto(apellidoYnombre,fecha,salon){
    let p = buscarPresupuesto();
    p.apellidoYnombre = apellidoYnombre;
    p.fecha = fecha;
    p.tematica = salon.titulo;
    p.valorTotal = parseFloat(salon.valor);
    const servicios = JSON.parse(localStorage.getItem("servicios"));
    p.serviciosSeleccionados = [];
    servicios.forEach(element => {
        if(element.selecprespuesto=="s"){
            p.serviciosSeleccionados.push(element);
            p.valorTotal = parseFloat(p.valorTotal) + parseFloat(element.valor);
        }
    });
    localStorage.setItem("prespuesto", JSON.stringify(p));
    return p;
}

export function selecServicioPresupuesto(id){
    let ll = JSON.parse(localStorage.getItem("servicios"));
    for(let indice =0 ; indice<ll.length;indice++){
        if(ll[indice].id==id){
            if(ll[indice].selecprespuesto=="s"){
                ll[indice].selecprespuesto = "n";
            }else{
                ll[indice].selecprespuesto = "s";
            }
        }
    }
    localStorage.setItem("servicios", JSON.stringify(ll));
}

function buscarPresupuesto(){
    const ll = JSON.parse(localStorage.getItem("prespuesto"));
    return ll;
}