var name = "uri";

console.log(name);

var age = 26;

console.log(age);

var ignasiAge = 32;
var ageDiff = age - ignasiAge;

console.log(ageDiff);


if (age < 21) {
    console.log("you are not older than 21");
} else if (age > 21) {
    console.log("you are older than 21");
}


if (age < ignasiAge) {
    console.log("ignasi is oldest than you");
} else if (age = ignasiAge) {
    console.log("you have the same age as ignasi");
} else if (age > ignasiAge) {
    console.log("ignasi is younger than you");
}

//sin loops//


var array = ["uri", "andrew", "anna", "anna", "claudia", "elvira", "ernest", "josep", "lin", "luis", "oscar", "vasil", "raul", "santi", "andy", "patrick", ];


console.log(array);

console.log(array[0]);

console.log(array[array.length - 1]);

//con loops//

for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            element = array[i];
            array[i] = array[j];
            array[j] = element;
        }
    }
}

console.log(array);
console.log(array[0]);
console.log(array[array.length - 1]);


var arrayage = [27, 30, 23, 18, 25, 32, 28, 34, 43, 24, 27, 19, 35, 29, 26, 32];

var i = 0


while (i < arrayage.length) {
    console.log(arrayage[i]);
    i++;
}

var j = 0

while (j < arrayage.length) {
    j++;
    if (arrayage[j] % 2 == 0) {
        console.log(arrayage[j]);

    }

}

var k = 0


for (var k = 0; k < arrayage.length; k++) {
    if (arrayage[k] % 2 == 0) {
        console.log(arrayage[k]);
    }
}

var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]

var min = Math.min.apply(Math, arr)
console.log(min)


var max = Math.max.apply(Math, arr)
console.log(max)

//con funciones//


var biggest = arr[0]


function findMax(arry) {
    for (i = 0; i < arry.length; i++) {
        if (biggest < arry[i]) {
            biggest = arry[i]
        }
    }
    console.log(biggest)
}

findMax(arr);


var small = arr[0]

function findMin(arr) {
    for (i = 0; i < arr.length; i++) {
        if (small > arr[i]) {
            small = arr[i]
        }
    }
    console.log(small)
}

findMin(arr);

//ejercicio 5//

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 5;

function arrayindex(array, index) {
    console.log(array[index]);
}

arrayindex(array, index);

//ejercicio 6//

var arrayt = [3, 3, 3, 3, 3, 3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

var repetedValues = [];

function bubble_sort(arrayt) {
    for (var i = 0; i < arrayt.length; i++) {
        for (var j = i + 1; j < arrayt.length; j++) {
            if (arrayt[i] == arrayt[j]) {
                if (!repetedValues.includes(arrayt[i])) {
                    repetedValues.push(arrayt[i]);
                }
            }
        }
    }
    console.log(repetedValues);
}

bubble_sort(arrayt);


//forma A//
myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());

//Con funcion//
function colors(str) {
    var r = str.toString()

    console.log(r)
}

colors(myColor);





function reverse_numbers(f) {
    f = f + "";
    return f.split("").reverse().join("");
}
console.log(reverse_numbers(32443));

function alphabet_order(gel) {
    return gel.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));




function uppercase(string) {

    var array1 = string.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("prince of persia"));



function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));
