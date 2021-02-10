const kotak = (num) =>{
let hasil = '';
for(i = 0;i < num;i++){
  for(j = 0 ; j < num;j++ ){

  hasil += '* ';

  if(i + j == 4){
    break;
  }
}
  hasil += '\n'
}

return hasil;
}

console.log(kotak(5));
