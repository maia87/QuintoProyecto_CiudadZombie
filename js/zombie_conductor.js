/* ZombieConductor tiene algunas diferencias con ZombieCaminante.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  //se coloca la propiedad que difiere con el objeto Enemigo
  this.direccion = direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/*La definicion del movimiento de los trenes esta pensada para que cuando lleguen
al final del camino reinicien en el punto de partida. Y no para que vayan y vuelvan*/
ZombieConductor.prototype.mover = function() {
  if (this.direccion == 'v') {
    this.y += this.velocidad;
    if (this.y > this.rangoMov.hastaY) {
      this.y = this.rangoMov.desdeY;
    }
  }
  if (this.direccion == 'h'){
    this.x += this.velocidad;
    if (this.x > this.rangoMov.hastaX) {
      this.x = this.rangoMov.desdeX;
    }
  }
};

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(jugador.vidas);
}
