import express from "express";
import z from "zod";
import { prismaClient } from "./db";


const app = express();

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.use(express.json());



app.post("/sum", async (req, res) => {
    // const { a, b } = req.body;
    const parsedSumObj = sumInput.safeParse(req.body);

    if(!parsedSumObj.success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const answer = parsedSumObj.data.a + parsedSumObj.data.b;
    
    const response = await prismaClient.sum.create({
        data: {
            a: parsedSumObj.data.a,
            b: parsedSumObj.data.b,
            result: answer
        }
    })

    res.json({
        id: response.id,
        answer
    })
})


export default app;