function factorial_nuevo(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}