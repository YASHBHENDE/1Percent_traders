import express from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/post', async (req, res) => {
    const stockName :string = req.body.stockName
    const userid = req.headers.userId as string
 
    if (!userid) {
        return res.status(400).json({ "msg": "User ID is required" })
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userid }
        })

        if (!user) {
            return res.status(404).json({ "msg": "User not found" })
        }

        const newStock = await prisma.userStocks.create({
            data: {
                stocks: stockName,
                user: {
                    connect: { id: userid }
                }
            }
        })
        res.status(201).json(newStock)
    } catch (error: any) {
        res.status(500).json({ "msg": "An error occurred", "error": error.message })
    }
})

router.get('/get', async (req, res) => {
    const userid = req.headers.userId as string

    if (!userid) {
        return res.status(400).json({ "msg": "User ID is required" })
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userid },
            include: { watchlist: true }
        })

        if (!user) {
            return res.status(404).json({ "msg": "User not found" })
        }

        res.json(user.watchlist)
        // console.log(user.watchlist)
    } catch (error: any) {
        res.status(500).json({ "msg": "An error occurred", "error": error.message })
    }
})

router.delete('/delete', async (req, res) => {
    const stock_id = req.body.stock_id
    const userid = req.headers.userId as string

    if (!userid) {
        return res.status(400).json({ "msg": "User ID is required" })
    }

    try {
        const userStock = await prisma.userStocks.findUnique({
            where: { id: stock_id }
        })

        if (!userStock) {
            return res.status(404).json({ "msg": "Stock not found" })
        }

        if (userStock.userId !== userid) {
            return res.status(403).json({ "msg": "Unauthorized" })
        }

        await prisma.userStocks.delete({
            where: { id: stock_id }
        })

        res.json({ "msg": "Stock deleted successfully" })
    } catch (error: any) {
        res.status(500).json({ "msg": "An error occurred", "error": error.message })
    }
})

export default router
