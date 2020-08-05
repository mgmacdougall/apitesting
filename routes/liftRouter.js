const express = require('express');

function routes(Lifts) {
	const router = express.Router();
	// filter the lifts
	router
		.get('/lifts', (req, res) => {
			let query = {};
			if (req.query.completed) {
				query.completed = req.query.completed;
			}
			if (req.query.name) {
				console.log(req.query);

				query.workoutName = req.query.name;
			}
			Lifts.find(query, (err, lifts) => {
				if (err) {
					return res.send(err);
				}
				return res.json(lifts);
			});
		})
		.delete('/lifts', (req, res) => {
			let query = {};
			if (req.query.name) {
				query.workoutName = req.query.name;
			}

			Lifts.findOneAndDelete(query, (err, lifts) => {
				if (err) {
					return res.send(err);
				} else {
					return res.json({ message: 'Object deleted' });
				}
			});
		});
	// Route for getting a single item
	router
		.get('/lifts/:liftID', (req, res) => {
			Lifts.findById(req.params.liftID, (err, lift) => {
				if (err) {
					return res.send(err);
				}
				return res.json(lift);
			});
		})
		.put((req, res) => {
			Lifts.findById(req.params.liftID, (err, lift) => {
				if (err) {
					return res.send(err);
				}

				return res.json(lift);
			});
		});

	router.post('/lifts', (req, res) => {
		const lift = new Lifts(req.body);
		lift.save(lift);
		return res.status(201).json(lift);
	});

	return router;
}

module.exports = routes;
