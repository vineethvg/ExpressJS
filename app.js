const fs = require('fs');
const express = require('express')
const app = express();
const router = express.Router();

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/sample.json`)
);

getAllUsers = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: {
            users
        }
    });
};
app.use('/api/v1/users', router)
router
    .route('/')
    .get(getAllUsers);


const port = 3000;
app.listen(port, () => {
    console.log(`Server running at ${port}....`);
})
