import {describe, expect, it} from "@jest/globals";
import { sum } from "./index";

describe("Sum module", () => {
    // it('Adds 1 + 2 equal to eqaul to 3', ()=>{
    //     expect(sum(1, 2)).toBe(3);
    // })

    // it('Adds 5 + 2 equal to eqaul to 3', ()=>{
    //     expect(sum(5, 2)).toBe(7);
    // })

    // it('Adds -1 + -2 equal to eqaul to 3', ()=>{
    //     expect(sum(-1, -2)).toBe(-3);
    // })

    const tests: [number, number, number][] = [
        [1, 2, 3],
        [5, 2, 7],
        [-1, -2, -3],
    ]
    tests.forEach(([a, b, c], index:Number) => {
        it(`Adds ${a} + ${b} is eqaul to ${c}`, () => {
            expect(sum(a, b)).toBe(c)
        })
    })

})
