var name;
var color;

function getName(){
    name = $('#textName').val();
    console.log(name);
    $('#banner').hide();
    color = randomColor();
    console.log(color);
}


function randomColor(){
    var words = "123456789ABCDEF";
    var color = "#";
    for(var i = 0; i <6;++i){
        color +=words[Math.floor(Math.random()*16)];
    }
    return color;
}

function sendMess(){
    firebase.database().ref('mess').push().set({
        name:name,
        text:$('#textChat').val(),
        color:color,
        time: new Date().toLocaleTimeString()
    })
}




firebase.database().ref('mess').on("child_added",function (sn){
    $('#chatBoard').append("<div style='float: left; color:"+sn.val().color+"; width:inherit'>"+sn.val().name+": "+sn.val().text+" <div class='clock'>"+sn.val().time+"</div></div><br>");
})