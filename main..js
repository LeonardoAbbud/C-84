

// O código cria um objeto canvas e um contexto 2D
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


// Define as dimensões


roverWidth = 100;
roverHeight = 90;


// Carrega duas imagens (uma para o fundo e outra para o personagem do jogo)


backgroundImage = "mars1.jpg";


roverImage = "rover.png";


roverX = 10;
roverY = 10;


function add() {


    backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
    backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
    backgroundImgTag.src = backgroundImage;   // carregar a imagem


    roverImgTag = new Image(); //definindo uma variável com uma nova imagem
    roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
    roverImgTag.src = roverImage;   // carregar a imagem
}


// uploadBackground desenha uma imagem de fundo em um elemento canvas


function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
 // uploadrover desenha uma imagem de um veículo (rover) na tela.


function uploadrover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}




window.addEventListener("keydown", myKeyDown);




 // O evento keydown é acionado quando o usuário pressiona uma tecla no teclado.


 // A função myKeyDown é executada em resposta a esse evento.


 // PARAMOS AQUI
 


function myKeyDown(e)


{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}


function up()
{
    // Verifica se a coordenada y do rover é maior ou igual a zero.


    // *Se for verdadeira, isso significa que o rover não atingiu o limite superior da tela
    //e ainda pode se mover para cima. Nesse caso, as seguintes ações são executadas


    if(roverY >=0)
    {
        // A variável roverY é atualizada, subtraindo 10 do seu valor atual
        roverY = roverY - 10;
        console.log("When up arrow is pressed,  x = " + roverX + " | y = " +roverY);
         uploadBackground();
         uploadrover();
    }
}
function down()
{
    if(roverY <=500)
    {
        roverY =roverY+ 10;
        console.log("When down arrow is pressed,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
         uploadrover();
    }
}
function left()
{
    if(roverX >= 0)
    {
        roverX =roverX - 10;
        console.log("When left arrow is pressed,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
         uploadrover();
    }
}
function right()
{
    if(roverX <= 700)
    {
        roverX =roverX + 10;
        console.log("When right arrow is pressed,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
        uploadrover();
   }
}
   


