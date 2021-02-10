const kotak = (num) =>{
let hasil = '';
for(i = 1;i <= num;i++){
  for(j = 1 ; j <= num;j++ ){

     if( i == num || j == num || 3 % 2 == i || 3%2 == j){

    hasil += '* '
  }else{
    hasil += '  '
  }

}
  hasil += '\n'
}

return hasil;
}

console.log(kotak(10));
