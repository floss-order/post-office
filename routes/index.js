const express = require('express')
const router = express.Router()
const db = require('../db.js')


router.get('/', async (req, res) => {
    try {
        let results = await db.getSubscriptions()
        res.json(results)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router