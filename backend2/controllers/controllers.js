const homepage=(req,res)=>{
    res.send("I am home page");
}
const productpage =(req,res)=>{
    res.send("I am product page");
}
const aboutpage =(req,res)=>{
    res.send("I am about page");
}
const contactpage =(req,res)=>{
    res.send("I am contact page");
}
module.exports ={
    homepage,
    productpage,
    contactpage,
    aboutpage
}