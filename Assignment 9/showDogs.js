
function showDogs(data,outputElement){
   for(let i=0;i<data.length;i++){
      addDog(data[i],outputElement);
   }
}

function addDog(dog,outputElement){
   const canvas=document.createElement("canvas");
   canvas.width=100;
   canvas.height=100;
   canvas.style.border="1px solid black";
   outputElement.appendChild(canvas);
   const ctx=canvas.getContext("2d");
   ctx.translate(50,45);
   
   //name
   ctx.fillStyle="black";
   ctx.textAlign="center";
   ctx.font="15px Arial";
   ctx.fillText(dog.name,0,45);

   //head
   const scaleFactor=0.5+0.5*dog.age/5;
   ctx.scale(scaleFactor,scaleFactor);
   ctx.beginPath();
   ctx.fillStyle=dog.furr;
   ctx.arc(0,0,30,0,Math.PI*2);
   ctx.fill();
   ctx.stroke();

   // nose
   ctx.beginPath();
   ctx.fillStyle="black";
   ctx.arc(0,10,5,0,Math.PI*2);
   ctx.fill();

   // mouth 
   ctx.beginPath();
   ctx.arc(0,20,5,Math.PI,Math.PI*2);
   ctx.stroke();

   // eyes
   ctx.beginPath();
   ctx.fillStyle="white";
   ctx.ellipse(-10,-5,7,10,0,0,Math.PI*2);
   ctx.fill();
   ctx.stroke();
   ctx.beginPath();
   ctx.fillStyle=dog.eyes;
   ctx.arc(-9,-3,4,0,Math.PI*2);
   ctx.fill();
   //
   ctx.beginPath();
   ctx.fillStyle="white";
   ctx.ellipse(10,-5,7,10,0,0,Math.PI*2);
   ctx.fill();
   ctx.stroke();
   ctx.beginPath();
   ctx.fillStyle=dog.eyes;
   ctx.arc(9,-3,4,0,Math.PI*2);
   ctx.fill();

   // ears
   ctx.beginPath();
   ctx.fillStyle=dog.furr;
   ctx.ellipse(-24,-5,9,25,0.3,0,Math.PI*2);
   ctx.fill();
   ctx.stroke();
   //
   ctx.beginPath();
   ctx.fillStyle=dog.furr;
   ctx.ellipse(24,-5,9,25,-0.3,0,Math.PI*2);
   ctx.fill();
   ctx.stroke();
}
