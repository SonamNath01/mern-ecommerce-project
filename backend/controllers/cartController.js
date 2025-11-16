import userModel from '../models/userModel.js';

// ----------------------
// 📦 Add product to user cart
// ----------------------
export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;  
    const { itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) return res.json({ success: false, message: "User not found" });

    const cartData = userData.cartData || {};

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Item added", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ----------------------
// ✏️ Update user cart
// ----------------------
export const updateCart = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) return res.json({ success: false, message: "User not found" });

    const cartData = userData.cartData || {};

    if (quantity <= 0) {
      if (cartData[itemId]?.[size]) {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      if (!cartData[itemId]) cartData[itemId] = {};
      cartData[itemId][size] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart updated", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ----------------------
// 🛒 Get user cart
// ----------------------
export const getUserCart = async (req, res) => {
  try {
    const userId = req.user.id;  

    const userData = await userModel.findById(userId);
    if (!userData) return res.json({ success: false, message: "User not found" });

    res.json({ success: true, cartData: userData.cartData || {} });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
