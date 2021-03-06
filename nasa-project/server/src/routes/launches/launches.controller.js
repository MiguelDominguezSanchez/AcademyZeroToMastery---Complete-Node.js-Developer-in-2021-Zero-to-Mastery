const { getAllLaunches, addNewLaunch } = require('../../models/launches.model')

function httpGetAllLaunches(req, res) {
	return res.status(200).json(getAllLaunches())
}

function httpAddLaunch(req, res) {
	const launch = req.body

	launch.launchDate = new Date(launch.launchDate)

	addNewLaunch(launch)
	res.status(201).json(launch)
}

module.exports = {
	httpGetAllLaunches,
	httpAddLaunch,
}
