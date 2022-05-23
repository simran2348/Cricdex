const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const { check, validationResult } = require('express-validator')

const User = require('../schema/UserSchema')

//@route    POST api/user
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check(
      'password',
      'Please enter a password  with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body
    try {
      let user = await User.findOne({ email })
      const userName = await User.findOne({ name })

      if (userName) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Username Already Exists' }] })
      }

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Email Already Exists' }] })
      }

      user = new User({
        name,
        email,
        password
      })
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        process.env.REACT_APP_JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
