
const usermodle = require("../model/userModel")

exports.getAllUser = ({request : req, response :res}) => {
 res.body = usermodle.getter()
}

exports.addUser = ({request : req, response :res}) => {
    const {name} = req.body
    const data = usermodle.setter(name)
    res.body = "data added properyly"
}