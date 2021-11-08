export default class Base{
  constructor(base){
    this._nombreBase = base.nombreBase;
    this._minutos = base.minutos;
    this._siguienteBase = null;
    this._baseAnterior = null;
  }
  get nombreBase(){
    return this._nombreBase;
  }
  get minutos(){
    return this._minutos;
  }
  get siguienteBase(){
    return this._siguienteBase;
  }
  set siguienteBase(val){
    this._siguienteBase = val;
    return this._siguienteBase;
  }
  get baseAnterior(){
    return this._baseAnterior;
  }
  set baseAnterior(val){
    this._baseAnterior = val;
    return this._baseAnterior;
  }
  toString(){

  }
}
