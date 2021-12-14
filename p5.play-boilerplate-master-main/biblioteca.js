function instouching(triangulo1,triangulo2){
    if (triangulo1.x - triangulo2.x < triangulo2.width / 2 + triangulo1.width / 2 
      &&  triangulo2.x - triangulo1.x  < triangulo2.width / 2 + triangulo1.width / 2 
      && triangulo1.y - triangulo2.y < triangulo2.height / 2 + triangulo1.height / 2 
      && triangulo2.y - triangulo1.y  < triangulo2.height / 2 + triangulo1.height / 2 
      ) {
    return true;
  }
  else{
   return false 
  }
  }