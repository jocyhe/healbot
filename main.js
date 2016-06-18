var prevmsgs = false;
    
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

function handleKeyPress(e) {
    var key=e.keyCode || e.which;
    if (key==13){
        send();
    }
}

window.onload = function() {
    botReplies("Hi! How are feeling today?");
    $("body").css('background-image','url(http://66.media.tumblr.com/tumblr_m0lex1xRC71rrt2v9o1_400.gif)');
}

function reply(msg) { 
    if (prevmsgs == false) {
        if (msg.match(/happy|good|excited/)) {
            botReplies("Yay! Here are some motivational posts to do something productive!");
            $("body").css('background-image','url(https://40.media.tumblr.com/55dc8567bdb0c3848e9f2bc09500b629/tumblr_niwtrlQWsF1sf4mo1o1_500.jpg)');
        }    
        if (msg.match(/bored|lonely|tired/)) { 
            botReplies("Don't worry, I'll find something fun for you!");
            ("https://www.coldstonecreamery.com/assets/img/products/signaturecakes/signature-cakes-cakebatterconfetti.jpg", "img");
            botReplies("Are you still bored?");
            $("body").css('background-image', 'url(http://s6.favim.com/orig/151213/kawaii-super-cute-tumblr-narwal-background-Favim.com-3759846.jpg)');
        }
        if (msg.match(/sad|depressed/)) { 
            botReplies("It's okay! I'll find a cure for you!");
            setTimeout(function() {
                botReplies("https://www.youtube.com/watch?v=k9LUY8guDaU","video");
            }, 2000);
            setTimeout(function() {
               botReplies("Are you still " + msg.match(/sad|depressed/) + "?");  
            }, 15000);
            $("body").css('background-image', 'url(https://67.media.tumblr.com/41cdcb2f6ba9fc25e45aa5e2673feee4/tumblr_nlmt7weC1x1sf4mo1o1_500.jpg)');
        }
        prevmsgs = true;
    }
    if (prevmsgs==true) {
        if (msg.match(/no|nah|nope|not/)) {
            botReplies("healBot's job is done! Visit me again!")
            }
        if (msg.match(/yes|yeah|yep|si|definitely|sure/)) {
            botReplies("Generating another cure...")
            setTimeout(function() {
                botReplies("https://s-media-cache-ak0.pinimg.com/736x/41/ee/f0/41eef07e886d7938b3671c6a46420c02.jpg", "img");
            }, 2000);
            setTimeout(function() {
                botReplies("Is healBot's job done?")
            }, 2000);
        }
    }
}

function botReplies(msg, type) {
    if (type=="img") {
        var bot = document.createElement("img");
        bot.src=msg;
    } else if(type=="video") {
        var d = document.createElement("div");
        d.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/k9LUY8guDaU" frameborder="0" allowfullscreen></iframe>';
        var bot = d.firstChild;
    } else {
        var bot = document.createElement("p");
        var bottext= document.createTextNode("healBot: " + msg);
        bot.appendChild(bottext);
    }
    document.getElementById("oldtext").appendChild(bot);
    
    var oldtext = document.getElementById("oldtext");
    oldtext.scrollTop=oldtext.scrollHeight;
}
