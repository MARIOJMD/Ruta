import Base from "./Base.js";

let btn = document.querySelector("#agregar");
btn.addEventListener("click", recoger);

function recoger(){
  let nombreBase = document.querySelector("#base").value;
  let minutos = document.querySelector("#minutos").value;

  agregar(nombreBase, minutos);
}

function agregar(base, minutos){
  let objBase = {
    nombreBase: nombreBase,
    minutos: minutos
  }

  ruta.agregarBase(objBase)

  impresion(objBase);
}

function impresion(base){
  let info = document.querySelector("#info");
  let row = info.insertRow(-1);
  let cellNombreBase = row.insertCell(0);
  let cellMinutos = row.insertCell(1);
  row.insertCell(2);

  cellBase.innerHTML = base.nombreBase;
  cellMinutos.innerHTML = base.minutos;
  addEliminar(row, base);
}

addEliminar(row, base){
  
}
