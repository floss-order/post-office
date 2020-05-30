const express = require('express')
const router = express.Router()
const db = require('../db.js')


router.get('/recievers', async (req, res) => {
    try {
        let results = await db.getSubscriptions()
        res.render('recievers.ejs', {results})
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router