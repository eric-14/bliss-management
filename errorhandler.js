const errorhandler = (req,res)=>{
    res.status(404).json({message: "Error try another page"});
}