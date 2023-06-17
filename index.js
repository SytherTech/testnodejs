const express = require('express')

const app = express();

app.use(express.json())

const blogs = [
    {"id": 1 , "name":"First Blog" , "Date":"23/21/2"},
    {"id": 2 , "name":"Second Blog" , "Date":"23/21/2"},
    {"id": 3 , "name":"Third Blog" , "Date":"23/21/2"}
]

app.get('/' , (req , res)=>{
    res.send("Hello World")
})

app.get('/api/blog/:id/:name/:title' , (req , res)=>{
    res.send(req.params)
})

app.get('/api/blog/:id/:name',(req , res)=>{
    const blog = blogs.find(c => c.id == req.params.id || c.name == req.params.name);
    if(!blog) res.status(404).send('Blog Not Found')
    res.send(blog)
})

const port = process.env.port || 3000;
app.listen(port , (err)=>{
    if(err)
    {
        return;
    }

    console.log('Server Running On Port ${port}')
})