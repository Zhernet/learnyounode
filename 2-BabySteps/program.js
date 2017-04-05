let myArgs = process.argv.slice(2);
let sum = 0;
for (let i = 0; i < myArgs.length; i++) {
    sum += Number(myArgs[i]);
}
console.log(sum);
