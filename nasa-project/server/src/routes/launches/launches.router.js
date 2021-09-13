const express = require('express')
const {
	httpGetAllLaunches,
	httpAddNewLaunch,
} = require('./launches.controller')

const launchesRouter = express.Router()

// /planets/
launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)

module.export = launchesRouter
