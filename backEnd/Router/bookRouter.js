const router= require('express').Router();
const  Books= require('../Models/books');

//post request
router.post('/add', async(req,res) => {
    try{
        const data= req.body;
        const newBook = await Books.create(data);
        res.status(200).json({
            message: "Added the new details",
            data: newBook
        })

    }catch(err){
        console.log(err);
    }
})

router.get('/getBook/:id', async(req,res) => {
    const id =req.params.id;
    try{
        const data = await Books.findById(id);
        res.status(200).json({
            message: "Found the book", 
            data : data
        })
    }catch(err){ 
        console.log(err);
    }
})

//get request
router.get('/getBooks', async(req,res) => {
    try{
        const data = await Books.find({});
        res.status(200).json({
            message: "Found the book", 
            data : data
        })
    }catch(err){ 
        console.log(err);
    }
})

router.get('/getBook/:id' , async(req,res) => {
    const id =req.params.id;
    try{
        const data = await Books.findById(id);
        res.status(200).json({
            message:"Found the book with particular id",
            data:data
        })
    }
    catch(err){
        console.log(err);
    }
})


router.put('/update/:id' , async(req,res) => {
    const id= req.params.id;
    try{
        const newRecord={name: req.body.name, description: req.body.description , author: req.body.author, image: req.body.image, price: req.body.price}; 
        const data= await Books.findByIdAndUpdate(id,newRecord);
        res.status(200).json({
            message: "Upadate the Data",
            data: data
        })
    }catch(err){
        console.log(err)
    }
})

router.delete('/deleteBook/:id' , async(req,res) => {
    const id= req.params.id;
    try{
        const data= await Books.findByIdAndRemove(id)
        res.status(200).json({
            message: "Deleted the Data",
            data: data
        })
    }catch(err){
        console.log(err)
    }
})


module.exports = router;