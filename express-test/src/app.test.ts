import { describe, expect, it } from "@jest/globals";
import  request  from "supertest";
import app from "./app";

describe("Post /sum", () => {
    it("Should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });

        // const wait = await new Promise((resolve, rej)=>{
        //     setTimeout(()=> resolve(true), 2000)
        // })

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
}) 