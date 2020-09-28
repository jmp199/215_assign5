var wrapper = document.body;
var data =[
  {
    color: "Red",
    cool:0
  },
    {
    color: "Blue",
    cool:0
  },
  {
  color: "Green",
    cool:0
  }
];
var elements = [];

function character(color,coolness,obj){
  var that=this;
  this.color= color;
  this.cool=coolness;
  this.ele=document.createElement("div")
  

  this.colorEle=document.createElement("h1");
    this.coolEle=document.createElement("h3");
  this.colorEle.innerHTML=this.color;
  this.coolEle.innerHTML="0";
  this.ele.appendChild(this.colorEle);
  this.ele.appendChild(this.coolEle);
 
  this.ele.addEventListener("click", function(){
     that.countCool();
  })
  wrapper.appendChild(this.ele);
}

character.prototype.countCool=function(){
  this.cool++;
    this.coolEle.innerHTML = this.cool+0;
};



for(var i=0; i<data.length;i++){
  elements.push(new character(data[i].color,data[i].cool))
}