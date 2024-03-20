import React, { useEffect, useState } from "react";

function Data(){
const [records,setRecords]=useState([])

useEffect(()=>{fetch("https://localhost:9876/numbers/e").then(res=>res.json()).then(d=>setRecords(d)).catch(e=>console.log(e))
},[])


return(
<div>
    <ol>
        {records.map((list)=>(<li>{list.numbers}</li>))}
    </ol>
</div>
    )
}

export default Data;
