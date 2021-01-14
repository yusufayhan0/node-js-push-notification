

function notifyMe(title, options) {
    if (!("Notification") in window) {
        alert("notifikasyonlar desteklenmiyor")
    }
    //granted izin verilmiş demektir
    //permissionda zaten izin demektir 
    //grantedde tarayıcıda notifikasyonlara izin verilmiş demektir
    else if (Notification.permission === "granted") {
        var notification = new Notification(title, options)
        console.log(Notification.prototype)
        notification.onclick = function (event) {
            event.preventDefault()
            window.open("http://www.youtube.com/", "_blank")
        }
    }
    
    else if (Notification.permission !== "denied") {
        Notification.requestPermission()
        .then(function(permission){
            if (permission === "granted") {
                var notification = new Notification(title, options)
                notification.onclick = function (event) {
                    event.preventDefault()
                    window.open("http://www.youtube.com/", "_blank")
                }
            }
        })
    }
}


        


var socket = io()
socket.on("notification",function(json){
    
    notifyMe(json.title,json.options)
    
})
