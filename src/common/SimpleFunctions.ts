export class SimpleFunctions{
    public static degToRad(d) {
        return d * Math.PI / 180;
    }

    public static rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    public static emod(x, n) {
        return x >= 0 ? (x % n) : ((n - (-x % n)) % n);
    }


}