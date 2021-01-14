


var socket=io()
var json={
    title:"",
    options:{},
    password:"",
}




$("form").submit(function(event){
    console.log(document.querySelector('#title').value)
    console.log(document.querySelector('#message').value)
    console.log(document.querySelector('#icon').value)
    console.log(document.querySelector('#password').value)

    event.preventDefault();
    json.title=document.querySelector('#title').value;
    json.password=document.querySelector('#password').value;
    json.options.body=document.querySelector('#message').value;
    json.options.icon=document.querySelector('#icon').value;
    json.options.data="syuuf ayhan"
    json.options.timestamp=Date.now();


    socket.emit("notification",json)
    //return ekleriz çünkü bir kere gönder ve göndermeyi kes demiş oluruz
    return false
})