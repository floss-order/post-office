const mysql = require('mysql')
require('dotenv').config()


//MySQL initialization
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user:  process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

let postOfficeDb = {}

//Fetch all recievers from the db
postOfficeDb.getRecievers = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ПОЛУЧАТЕЛИ', (err, results) => {
            if(err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

//Fetch all subscription from the db
postOfficeDb.getSubscriptions = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ПОДПИСКИ', (err, results) => {
            if(err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

//Fetch all editions from the db
postOfficeDb.getEditions = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ИЗДАНИЯ', (err, results) => {
            if(err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

postOfficeDb.query = (queryString) => {
    return new Promise((resolve, reject) => {
        pool.query(queryString, (err, results) => {
            if(err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

//Export db model
module.exports = postOfficeDb
