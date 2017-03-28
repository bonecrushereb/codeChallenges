
function recur(n, op) { return (op) ? op.call(op, n) : n; }
function zero(op)     { return recur(0, op); }
function one(op)      { return recur(1, op); }
function two(op)      { return recur(2, op); }
function three(op)    { return recur(3, op); }
function four(op)     { return recur(4, op); }
function five(op)     { return recur(5, op); }
function six(op)      { return recur(6, op); }
function seven(op)    { return recur(7, op); }
function eight(op)    { return recur(8, op); }
function nine(op)     { return recur(9, op); }

function plus(num) {
    return function(res) {
        return res + num;
    };
}
function minus(num) {
    return function(res) {
        return res - num;
    };
}
function times(num) {
    return function(res) {
        return res * num;
    };
}
function dividedBy(num) {
    return function(res) {
        return res / num;
    };
}
