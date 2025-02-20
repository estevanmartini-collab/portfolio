let a = 1;
let b = -3;
let c = 2;

let delta = b ** 2  - 4 * a * c

if (delta < 0) {
    console.log("Sem raízes reais (delta negativo).\n");
}   else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Uma raiz real:");
    console.log("x =", x.toFixed(2), "\n");
}

if (delta >= 0){
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log("Duas raízes reais:");
    console.log("x1 =", x1.toFixed(2));
    console.log("x2 =", x2.toFixed(2), "\n");
}                                                                                                                               