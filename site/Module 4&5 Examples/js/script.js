var string = "hello";
string += " World";
string = string + " world";
console.log(string + "!");




console.log((5+4)/3);
console.log(undefined/5)
console.log(5/undefined)
function test1 (a) {
    a=15
    console.log(a/5);
}
test1();


// equality
var x = 4, y = 4;
if (x==y) {
    console.log("x=4 is equal to y=4")
}
x = "4"
if (x==y) {
    console.log("x='4' is equal to y=4")
}

// strict equality
if (x === y) {
    console.log("Strict: x='4' is equal to y=4");
}
else {
    console.log("strict: x='4' is not equal to y=4");
}

if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever excecute");
}
else {
    console.log ("All False");
}


if (true && "hello" && 1 && -1 && "false") {
    console.log("All true")
}