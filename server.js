'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
    console.log(hash);
    // at this point we would save this hash to the database
    bcrypt.compare(myPlaintextPassword, hash).then(res => {
        console.log(res);
    });
});

// bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//     console.log(hash);
//     bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
//         console.log(res);
//     });
// });
//END_ASYNC

//START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
