const express = require('express')
const router = express.Router()
const db = require('../db.js')


//Recievers route
router.get('/recievers', async (req, res) => {
    try {
        let results = await db.getRecievers()
        res.render('tables/recievers.ejs', {results})
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/recievers', async (req, res) => {
    let queryString = req.body.query
    console.log(queryString)
    try {
        await db.query(queryString)
        res.redirect('/tables/recievers')
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

//Subscriptions route
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
    console.log(queryString)
    try {
        await db.query(queryString)
        res.redirect('/tables/subscriptions')
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

//Editions route
router.get('/editions', async (req, res) => {
    try {
        let results = await db.getEditions()
        res.render('tables/editions.ejs', {results})
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/editions', async (req, res) => {
    let queryString = req.body.query
    console.log(queryString)
    try {
        await db.query(queryString)
        res.redirect('/tables/editions')
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})


//Editions that has subscriptions route
router.get('/editions_has_subscriptions', async (req, res) => {
    try {
        let results = await db.getEditionsSubscriptions()
        res.render('tables/editions_has_subscriptions.ejs', {results})
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/editions_has_subscriptions', async (req, res) => {
    let queryString = req.body.query
    console.log(queryString)
    try {
        await db.query(queryString)
        res.redirect('/tables/editions_has_subscriptions')
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})


//Export tables router
module.exports = router