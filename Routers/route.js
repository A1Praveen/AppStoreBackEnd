const express = require('express')
const { deleteUser, getUser, postUser } = require('../Controllers/controller')


const router = express.Router()

router.get('/',getUser)
router.delete('/:id',deleteUser)
router.post('/use',postUser)

module.exports = router;
