function setup() {
  createCanvas(800, 800);
}

let olhoX;
let olhoY;

let corRosto = "#FF5722";  // Cor inicial do rosto
let corOlhos = "white";    // Cor inicial dos olhos
let corBoca = "black";     // Cor inicial da boca
let corNariz = "#3F51B5";  // Cor inicial do nariz

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  // Desenha o rosto com cor variável
  fill(corRosto);
  circle(400, 400, 600); // Rosto centralizado
  
  // Desenha os olhos com cor variável
  fill(corOlhos);
  circle(350, 300, 60); // Olho esquerdo
  circle(450, 300, 60); // Olho direito
  
  // Desenha a boca com cor variável
  fill(corBoca);
  arc(400, 450, 200, 100, 0, PI); // Boca

  // Desenha o nariz com cor variável
  fill(corNariz);
  triangle(400, 320, 370, 350, 430, 350); // Nariz
  
  // Desenha as sobrancelhas
  strokeWeight(5);
  line(320, 270, 380, 260); // Sobrancelha esquerda
  line(420, 260, 480, 270); // Sobrancelha direita

  // Atualiza a posição das pupilas com base no movimento do mouse
  olhoX = map(mouseX, 0, width, 350, 450);
  olhoY = map(mouseY, 0, height, 270, 330);
  
  // Desenha as pupilas
  fill("black");
  circle(olhoX, olhoY, 20); // Pupila esquerda
  circle(olhoX + 100, olhoY, 20); // Pupila direita
  
  // Muda a cor do rosto ao pressionar a tecla 'C'
  if (keyIsPressed && key === 'c') {
    corRosto = color(random(255), random(255), random(255)); // Cor aleatória para o rosto
    corOlhos = color(random(255), random(255), random(255)); // Cor aleatória para os olhos
    corBoca = color(random(255), random(255), random(255)); // Cor aleatória para a boca
    corNariz = color(random(255), random(255), random(255)); // Cor aleatória para o nariz
  }
  
  // Exibe as coordenadas do mouse se estiver pressionado
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}