var a = true;
var b = '';

if (b) {
    console.log(`a == true`);
} else {
    console.log(`a == false`);
}

/**
 * undefined, null
 * 0, '', NaN
 */
var status = undefined;
if (!status) {
    console.log(status);
}

if (status == 0) {
    console.log(`blocked`);
} else if(status == -1) {
    console.log(`inactive`);
} else {
    console.log(`active`);
}

var status2 = 1;

status2 == 1 ? console.log(`111`) : console.log(`!111`);

status2 != 1 && console.log(`1111`);