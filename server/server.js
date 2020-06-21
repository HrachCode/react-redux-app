const express = require('express')
const app = express()
const server = require('http').createServer(app);
const path = require('path')
const port = process.env.PORT || 5000
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')


app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

 if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join (__dirname, './','build');
  app.use (express.static (publicPath));
  app.get ('*', (req, res) => { 
       
      res.sendFile (path.join (publicPath, 'index.html')); 
   })
   }
app.get('/fetch', async (req,res)=>{
  try {
    const data = await axios.get('https://api.mocki.io/v1/13f44462')

      res.json(data.data)
  } catch (error) {
    console.log(error);
    
  }
  
})


      

app.use((req,res,next)=>{
  const error = new Error('Note Found');
  error.status = 404;
  next(error)
})
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  })
})

server.listen(port, function () {
  console.log('Server is running on port: ' + port)
})