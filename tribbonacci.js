function T_seq(n) {
    var seq = [0, 0, 1];
    if (n < 3) return seq.slice(0, n);
    for (var i = 3; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2] + seq[i - 3]);
    }
    return seq;
}


