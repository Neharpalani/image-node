const map = require('../Schema/mapSchema');


exports.add = async(req, res) => {
    try {
        // console.log(req.body);
        // const salt = await bcrypt.genSalt(10);
        // req.body.password = await bcrypt.hash(req.body.password, salt)
        const userData = new map(req.body);
        console.log(userData)
        await userData.save();
        res.json({ message: "image added successfully", data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
};
exports.getAll = async(req, res) => {


    try {

        let userData = await map.find()

        res.json(userData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }

}