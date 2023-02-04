// for (var i = 0; i < 20; i++){
//     console.log(i);
//     if (i > 5){
//         break;
//     }
// }

// var roastGiven = 0;
// while (roastGiven < 10){
//     console.log('Roast Den, Gift item anchi');
//     roastGiven++;
//     if (roastGiven > 4){
//         break;
//     }
// }

var items = ['bottol', 'pen', 'book', 'laptop'];
for (var i = 0; i < items.length; i++){
    var item = items[i];
    if (item == 'pen'){
        break;
    }
    console.log(item);
}



var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    continue;
  }
  console.log(marks[i]);
};