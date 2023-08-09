


 let b=document.getElementById("btn");
 b.addEventListener ("click" ,Info)
function Info ()
{
  console.log("hello");
  let firstname=document.getElementById("1").value;
  let lastname=document.getElementById("2").value;
  let age=document.getElementById("3").value;

  

  if(firstname===""||firstname===null)
    {
      alert("Firstname must be filled");
     
    }
  
   if(lastname===""||lastname===null)
   
    {
      alert("Lastname must be filled");
     
    }
  
   if(age===""||age===null)
   
    {
      alert("Age must be filled");
      
    }
     
}

 
