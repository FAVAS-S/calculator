function display(n) {
    output.value +=n;
}

// clear ac
function clearAll() {
    output.value = "";

}

function evaluateExp() {
    output.value=eval(output.value);
}




function removelast() {
    currentExp = output.value;
    output.value = currentExp.slice(0, -1)
}