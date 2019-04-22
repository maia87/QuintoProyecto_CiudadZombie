/* Tenemos un objeto que representa a los obstaculos. Entre sus parametros
se destaca la potencia, la cual indica cuanto danio hace al chocar al jugador*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  /*Se implementa el metodo chocar(jugador) para que al chocar con un obstaculo
  el jugador pierda vidas.*/
  this.chocar = function(jugador){
    jugador.perderVidas(this.potencia);
    this.potencia = 0;
  }
}
