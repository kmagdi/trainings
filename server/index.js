const express=require('express')
const cors=require('cors')

const app = express();

//const auth=require('./routes/auth')
const routerIntezmenyek=require('./routes/intezmenyek')
//const agazatok=require('./routes/agazatok')
//const szakmak=require('./routes/szakmak')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors());
//app.use('/login',auth)
app.use('/api/intezmenyek',routerIntezmenyek)
//app.use('/api/agazatok',agazatok)
//app.use('api/szakmak',szakmak)

app.listen(5000,()=>console.log('server listening on port 5000...'))