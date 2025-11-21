const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');


const router = express.Router();


router.get('/me', auth, async (req, res) => {
res.json(req.user);
});


router.put('/me', auth, async (req, res) => {
const { name } = req.body;
try {
req.user.name = name || req.user.name;
await req.user.save();
res.json(req.user);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
});


module.exports = router;