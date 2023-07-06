import calcAverageNegativeAndPositive from "./calcAveragePositive";

test("produce average of positive and negative number in numbers array",()=> {
    expect(calcAverageNegativeAndPositive([10, -100, 20, -200, -3])).toStrictEqual([15, -101]);
});