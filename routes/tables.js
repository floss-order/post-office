const express = require('express')
const router = express.Router()
const db = require('../db.js')


router.get('/subscriptions', async (req, res) => {
    try {
        let results = await db.getSubscriptions()
        res.render('tables/subscriptions.ejs', {results})
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/subscriptions', async (req, res) => {
    let queryString = req.body.query
    try {
        await db.query(queryString)
        res.redirect('subscriptions/')
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router