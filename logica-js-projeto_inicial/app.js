alert('Boas vindas ao jogo do número secreto!');
 let numeroSecreto= 4;
 console.log(numeroSecreto);
 let chute=prompt('Escolha um nomero entre 1 e 30.');
 
if(chute == numeroSecreto){
    //poderia ser com o uso de ` crase ao invés de aspas e o uso de `${}` 
    //alert(`Parabéns você acertou! É o ${numeroSecreto}` );
    alert('Parabéns você acertou! É o numero ' + numeroSecreto );
 } else{
    alert("Você errou!  :( ");
 }
