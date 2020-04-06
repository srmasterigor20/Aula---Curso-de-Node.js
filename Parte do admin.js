const express = require('express')
const router = require('express').Router();


router.get('/',(req, res)=> {
   res.render(__dirname +'/admin/index')
})

router.get('/POST', (req, res) => {
     res.send("Pagina de categoriasasa")
})

router.get("/categorias", (req, res) => {
	res.send("Pagina de categoria")
})


module.exports = router
