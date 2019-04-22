var Jugador = {
  /* el sprite contiene la ruta de la imagen */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
}


Jugador.mover = function(x,y){
  if(x>0){
    this.sprite = "imagenes/auto_rojo_derecha.png";
    this.ancho = 30;
    this.alto = 15;
  } else if(x<0) {
    this.sprite = "imagenes/auto_rojo_izquierda.png";
    this.ancho = 30;
    this.alto = 15;
  } else if(y>0){
    this.sprite = "imagenes/auto_rojo_abajo.png";
    this.ancho = 15;
    this.alto = 30;
  } else if(y<0){
    this.sprite = "imagenes/auto_rojo_arriba.png";
    this.ancho = 15;
    this.alto = 30;
  }
  this.x += x;
  this.y += y;
};

Jugador.perderVidas = function(cantVidas) {
  this.vidas -= cantVidas;
}
