const mongoose = require('mongoose');
const { Schema } = mongoose;

const trackingModel = new Schema({
	workoutName: String,
	description: String,
	focus: String,
	numExercises: Number,
	totalWeightLifted: [{ type: Number, default: 0 }],
	completed: Boolean,
});

module.exports = mongoose.model('lifts', trackingModel);
