const express=require('express');
const app=express();
const port=process.env.PORT||3001;


app.set('view engine','ejs')




const books=[
    {title:"Atomic habit",author:"james clear",description:"tiny changes remarkable results"},
    {title:"Neermathalam poothakalam",author:"kamala suraya",description:"A book which bears the flowering memories of life"},
    {title:"Ram c/o Aanadhi",author:"akhilp darmajan",description:"This best selling book is about Sriram"}
]


//const user="Amaya"

app.get('/',(req,res)=>{
    res.render('layout',{books})
});
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});