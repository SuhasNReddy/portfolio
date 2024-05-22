const { json } = require("express");
// const nodemailer=require("nodemailer");
module.exports={
    get_landing_page:(req,res)=>{
        res.render("portfolio")
    },
    get_allmails:async (req,res)=>{
      const page=Number( req.query.p || 0);
      console.log("P",page);
      const limit=10;
      try{
       const response= (await fetch(`http://localhost:8000/inbox?_sort=id&_order=desc&_start=${page*limit}&_limit=${limit}`));

       const totalcount=Number(response.headers.get('X-Total-Count'));

       const data=await response.json();
       
       data.sort((a,b)=>new Date(b.sentAt) - new Date(a.sentAt));
      //  console.log(data,totalcount,"Total",typeof totalcount);
        res.render("allmails",{data,limit,page,totalcount});
      }catch(er)
      {
        res.send(`Some Error occured While Fetching the mails ${er}`)
      }
      
    },

    get_mail_id:async (req,res)=>{
      const mailid=req.params.id;
      // const data= await (await fetch(`http://localhost:8000/inbox/${mailid}`)).json();

      const updatedata={
        alread:true
      }

      try{
          const data=await (await fetch(`http://localhost:8000/inbox/${mailid}`,{
            method:"PATCH",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedata)
          })).json();

          res.render("mail",{data});
      }catch(eerr){
        res.send(`Some error : ${eerr}`);
      }
      

      
    }
    

}

let array=[1,2,3,]
console.log(array.pop(3))