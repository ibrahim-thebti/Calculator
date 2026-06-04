let displayvalue="";
function appendtodisplay(value){
    displayvalue=displayvalue+value;
    updatedisplay()
}
function updatedisplay(){
    document.getElementById('display').value=displayvalue;
}
function calculdisplay(){
    try {
        res = eval(displayvalue);
        if(String(res).indexOf('.')!=-1){
            res=String(res)
            p=res.indexOf('.')
            res=res.substring(0,p+5)
            document.getElementById("result").value =res+" =";
        }
        document.getElementById("result").value =res+" =";
    }
      catch (error) {
        document.getElementById("result").value = "Error";
      }
}
function cleandisplay(){
    displayvalue="";
    document.getElementById('display').value="0";
    document.getElementById('result').value="";
}
function deletedisplay(){
    displayvalue=displayvalue.substring(0,(displayvalue.length)-1)
    if(displayvalue==""){
        document.getElementById('display').value="0";
        document.getElementById('result').value="";
    }
    else{
        document.getElementById('display').value=displayvalue;
        document.getElementById('result').value="";
    }
}
var mood = document.querySelector('.mode')
var container = document.querySelector('.container')
var par = document.querySelector('p')
var layer = document.querySelector(".layer")
mood.addEventListener('click',function(){
    mood.classList.toggle('active');
    container.classList.toggle('active');
    par.classList.toggle('active');
    layer.classList.toggle('active');

})
const rate = document.querySelector(".rating");
const btn = document.querySelector("button");
const open = document.querySelector('.open')
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = ()=>{
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = ()=>{
    rate.classList.remove('active');
  }
  return false;
}
open.addEventListener('click',function(){
    rate.classList.toggle('active');
})