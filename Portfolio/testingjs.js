async function fetching_data(){
    const dataa= await (await fetch("http://localhost:8000/inbox")).json();
    // console.log(dataa);
    const datearray=[];
    dataa.forEach(date=>{
        datearray.push(date.sentAt);
    })
    
    datearray.push("Fri May 12 2023 18:29:03 GMT+0530 (India Standard Time)")
    datearray.sort((a,b)=>new Date(b) - new Date(a));
    console.log(datearray)
}

fetching_data();