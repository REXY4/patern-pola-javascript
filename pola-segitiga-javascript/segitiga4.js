const kotak = (num) =>{
let hasil = '';
for(i = 0;i < num;i++){
  hasil += '\n'
    for(j = 0;j < num;j++){
      hasil += ' '
    if(i + j == num -1){
      break;
    }
    }
  for(k = 0;k < num;k++){
    hasil += ' *'
    if(k == i){
      break;
    }
  }


 }


return hasil;
}

console.log(kotak(20));
