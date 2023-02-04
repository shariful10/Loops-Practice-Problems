var numbers = [45, 87, 89, 56, 32, 51, 25, 31, 70, 120];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number >= 70){
        continue;
    }
    console.log(number);
}