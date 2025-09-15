import express from "express";
import z from "zod";

const app = express();

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.use(express.json());

app.post("/sum", (req, res) => {
    // const { a, b } = req.body;
    const parsedSumObj = sumInput.safeParse(req.body);

    if(!parsedSumObj.success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const answer = parsedSumObj.data.a + parsedSumObj.data.b;

    res.json({
        answer
    })
})


export default app;