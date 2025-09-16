import { describe, expect, it, vi } from "vitest";
import  request  from "supertest";
import app from "./app";
import { prismaClient } from "./__mocks__/db";
// import { prismaClient } from "./db";


// console.log(prismaClient)
vi.mock("./db")

describe("Post /sum", () => {
    it("Should return the sum of two numbers", async () => {
        prismaClient.sum.create.mockResolvedValue({
            id: 1,
            a: 1,
            b: 2,
            result: 3
        })
        
        // Vi Spy
        vi.spyOn(prismaClient.sum, "create");

        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });

        expect(prismaClient.sum.create).toHaveBeenCalledWith({
            data: {
                a: 1,
                b: 2,
                result: 3
            }
        })

        // const wait = await new Promise((resolve, rej)=>{
        //     setTimeout(()=> resolve(true), 2000)
        // })

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
}) 