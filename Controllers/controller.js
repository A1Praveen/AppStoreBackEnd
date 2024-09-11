const User = require("../Models/model");

exports.postUser = async (req, res) => {
    try {
     if(req.query){
      const queryObject={...req.query}
      var query = await User.find(queryObject)
     }else {
      var query = await User.find()
     }
     res.status(200).json(query)
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };


  
  exports.getUser = async (req, res) => {
    try {
     if(req.query){
      const queryObject={...req.query}
      var query = await User.find(queryObject)
     }else {
      var query = await User.find()
     }
     res.status(200).json(query)
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };

  

exports.deleteUser = async (req, res) => {
    try {
      const resData = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Deleted",
        data: resData,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal error",
      });
    }
  };


