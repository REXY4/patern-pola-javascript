const kotak = (num) =>{
let hasil = '';
for(i = 1;i <= num;i++){
  for(j = 1 ; j <= num;j++ ){

  hasil += '* ';

  if(i == j){
    break;
  }
}
  hasil += '\n'
}

return hasil;
}

console.log(kotak(5));
