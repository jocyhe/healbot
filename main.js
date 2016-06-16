function send() {
    var msg =  document.getElementById("reply").value;
    var para = document.createElement("p");
    var node = document.createTextNode("You: " + msg);
    para.appendChild(node);
    var element = document.getElementById("oldtext");
    element.appendChild(para);
    document.getElementById("reply");
    reply(msg);
    document.getElementById("reply").value = "";
}

window.onload = function() {
    botReplies("Hi! How are feeling today?");
}

function reply(msg) { 
    if (msg.match(/happy|glad|excited/)) {
        botReplies("Good!")
    }    
    if (msg.match(/bored/)) { 
        botReplies("Don't worry, I'll find something fun for you!");
        botReplies("https://www.coldstonecreamery.com/assets/img/products/signaturecakes/signature-cakes-cakebatterconfetti.jpg", "img");
    }
    if (msg.match(/sad/)) { 
        botReplies("It's okay! I'll find a cure for you!");
        botReplies("https://www.youtube.com/watch?v=k9LUY8guDaU","video")
    }
}

function botReplies(msg, type) {
    if (type=="img") {
        var bot = document.createElement("img");
        bot.src=msg;
    } else if(type=="video") {
        var d = document.createElement("div");
        d.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/k9LUY8guDaU" frameborder="0" allowfullscreen></iframe>';
        var bot = d.firstChild;
    } else {
        var bot = document.createElement("p");
        var bottext= document.createTextNode("healBot: " + msg);
        bot.appendChild(bottext)
    }
    document.getElementById("oldtext").appendChild(bot);
}





