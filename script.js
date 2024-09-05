var a=document.getElementById("one");
var b=document.getElementById("two");
var c=document.getElementById("name");
var d=document.getElementById("age");
var e=document.getElementById("course");
var f=document.getElementById("email");
var three=document.getElementById("three")

a.addEventListener("click",function(){
    /* event.preventDefault() */
    var g=document.createElement("tr")
    /* g.setAttribute("class","three")  */
    g.innerHTML=`<td>${c.value}</td>
    <td>${d.value}</td>
    <td>${e.value}</td>
    <td>${f.value}</td>
    <button onclick='deleteitem(event)' style="padding:5px 10px; text-align:center; margin-left:30px; margin-top:5px; margin-bottom:5px; cursor:pointer;">delete</button>`
    b.append(g)
})
function deleteitem(event){
    event.target.parentElement.remove()
}
 
function deleteitemone(){
    three.remove()
}