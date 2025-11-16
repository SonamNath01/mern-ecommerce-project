//placing orders using COD Method
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
const placeOrder = async (req, res) => {
    try{
        const userId = req.user.id;
        const{items,amount,address,phone}= req.body;
        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            phone:phone,
            date:Date.now(),
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId,{cartData:{}});
        res.json({success:true,message:"Order placed successfully"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
//placing porders using stripe Method
const placeOrderStripe = async (req, res) => {
}
//placing orders using razorpay Method
const placeOrderRazorpay = async (req, res) => {
}
//All orders data for Admin Panel
const allOrders = async (req, res) => {
}
//User Order Data for frontend
const userOrders = async (req, res) => {
    try{
        const userId = req.user.id;
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}
//update order status from admin panel
const updateStatus = async (req, res) => {
}
export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus};
 