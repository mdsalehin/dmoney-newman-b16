const newman = require('newman');
require('dotenv').config();
newman.run({
   collection: `https://api.postman.com/collections/47470180-0b1eaa65-a8c7-4c0b-b5d0-dac0d9401ef8?access_key=${process.env.PMAT_KEY}`,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
