function setup() {
  createCanvas(800, 600);
  background(135, 206, 235);  // Cor do céu (light blue)
  
  drawMountains();
  drawHouse(100, 350);
  drawHouse(300, 350);
  drawBuilding(500, 270);
  drawBuilding(600, 270);
  drawBuilding(700, 270);
}

function drawMountains() {
  fill(169, 169, 169);  // Cor das montanhas (cinza)
  beginShape();
  vertex(0, 400);
  vertex(200, 150);
  vertex(400, 400);
  vertex(600, 100);
  vertex(800, 400);
  endShape(CLOSE);
}

function drawHouse(x, y) {
  // Corpo da casa
  fill(139, 69, 19);  // Cor marrom para a casa
  rect(x, y, 100, 100);
  
  // Telhado da casa
  fill(255, 0, 0);  // Cor vermelha para o telhado
  triangle(x, y, x + 50, y - 50, x + 100, y);
  
  // Janela da casa
  fill(0, 0, 255);  // Cor azul para a janela
  rect(x + 30, y + 30, 30, 30);
}

function drawBuilding(x, y) {
  // Corpo do prédio
  fill(169, 169, 169);  // Cor cinza para o prédio
  rect(x, y, 60, 150);
  
  // Janelas do prédio
  fill(0, 0, 255);  // Cor azul para as janelas
  rect(x + 10, y + 20, 20, 20);
  rect(x + 30, y + 20, 20, 20);
  rect(x + 10, y + 50, 20, 20);
  rect(x + 30, y + 50, 20, 20);
  rect(x + 10, y + 80, 20, 20);
  rect(x + 30, y + 80, 20, 20);
}
