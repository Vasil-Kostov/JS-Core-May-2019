class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        const a = Math.pow(p1.x - p2.x, 2);
        const b = Math.pow(p1.y - p2.y, 2);
        const distance = Math.sqrt(a + b);

        return distance;
    }
}