import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';  
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoutes.js';

// App config
const app = express()
const PORT = process.env.PORT || 4000
const allowedOrigins = [
  'https://mern-ecommerce-project-sigma.vercel.app',  
  'https://mern-ecommerce-project-crpi.vercel.app',  
  'http://localhost:5173',
  'http://localhost:5174'  
]
// Connect to DB & Cloudinary
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter) 

app.get('/', (req, res) => {
  res.send('API working')
})

// Start server
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
