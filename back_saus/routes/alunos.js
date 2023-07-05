var express = require('express');
var router = express.Router();
const alunoService = require ("../services/aluno.service.mongo")

//VERSÃO SEM MONGOOSE
/*
var alunoService = require("../services/servicesMongo/aluno.service.mongo")
var loginRouter = require ("../routes/login")


router.get(
    "/listar"
    ,
    (req, res, next) => {
        res.json(alunoService.listar())
    }
)

router.get(
    "/minhasReservas/:matricula"
    ,
    (req, res, next) => {
        res.json(alunoService.verReservas(req.params.matricula))
    }
)
*/

//VERSÃO COM MONGOOSE --- Colocar Abaixo daqui

router.post(
    "/cadastrarAluno",
    (req, res, next) => {
        alunoService.cadastrar(req, res)
    }
)

module.exports = router