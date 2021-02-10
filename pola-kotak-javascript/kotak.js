const kotak = (num) =>{
let hasil = '';
for(i = 1;i <= num;i++){
  for(j = 1 ; j <= num;j++ ){

  hasil += '* ';
}
  hasil += '\n'
}

return hasil;
}

console.log(kotak(5));
