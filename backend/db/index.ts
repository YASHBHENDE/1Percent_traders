import mongoose, { Schema } from "mongoose";


mongoose.connect('mongodb+srv://yashabhaybhende:yDNiVSuVfrjyeMXY@cluster0.g6nsvuo.mongodb.net/1traders')

const UserSchema = new Schema({
    email:String,
    username:String,
    password:String,
    Watchlist:[{type: mongoose.Schema.Types.ObjectId, ref: 'UserStocks'  }]
})

const UserStocksSchema = new Schema({
    stocks:{ type: String }
})

export const User = mongoose.model('User',UserSchema)
export const UserStocks = mongoose.model('UserStocks',UserStocksSchema)

export const API_KEY = 'W7SQ33B555SMMCAB'