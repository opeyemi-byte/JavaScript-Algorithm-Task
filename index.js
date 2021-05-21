// Question 1

function convertFahrToCelsius(fahr) {
    if (typeof fahr === "string" || typeof fahr === "number") {
        const fTemp = parseInt(fahr);
        const fToCel = (fTemp - 32) * 5 / 9;
        const result = `${fTemp.toFixed(4)}\xB0F is ${fToCel.toFixed(4)}\xB0C.`;
        console.log(result);
    }

    if (Array.isArray(fahr)) {
        console.log(`[${fahr}] is not a valid number but a/an Array`);
    }

    if (typeof fahr === 'object') {
        let value = JSON.stringify(fahr);
        console.log(`[${fahr}] is not a valid number but a/an object.`)
    };
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 3, 4, 5]);
convertFahrToCelsius({ temp: 0 })


// Question 2

function checkYuGiOh(n) {
    let array = [];
    if (isNaN(n) || n === null) {
        console.log(`invalid parameter: '${n}'`);
    } else {
        for (let i = 1; i <= n; i++) {
            if (n === 1) {
                return 1;
            } else {
                if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                    array.push("yu-gi-oh");
                } else if (i % 2 === 0 && i % 3 === 0) {
                    array.push("yu-gi");
                } else if (i % 2 === 0 && i % 5 === 0) {
                    array.push("gi-oh");
                } else if (i % 2 === 0) {
                    array.push("yu");
                } else if (i % 3 === 0) {
                    array.push("gi");
                } else if (i % 5 === 0) {
                    array.push("oh");
                } else {
                    array.push("" + i);
                }
            }

        }
        console.log(array);
    }
};

checkYuGiOh(3);
checkYuGiOh("fizzbuzz is meh")
checkYuGiOh("5")