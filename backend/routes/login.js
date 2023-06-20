const express = require('express')
const {
    createClient, getClient, getClients
} = require('../controllers/clientController')

const Client = require('../models/clientModel')

const router = express.Router()

//GET all logins
router.get('/', (getClients))

//GET a single login
router.get('/:id', (getClient))

//POST a new login
router.post('/', createClient
)

//DELETE a new login
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new login'})
})

//UPDATE a new login
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new login'})
})

module.exports = router