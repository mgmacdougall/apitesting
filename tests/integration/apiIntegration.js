const newman = require('newman');

newman.run({
	collection: require('./IntegrationTests.postman_collection.json'),
	reporters: 'cli',
});
