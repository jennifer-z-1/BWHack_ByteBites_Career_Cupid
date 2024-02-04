"use strict";

let chat = ["Evelyn Turner", "Liam Parker", "Sophia Bennett", "Noah Foster", "Olivia Mitchell", "Ethan Reynolds", "Ava Hayes", "Logan Carter", "Isabella Gray", "Mason Cooper"];
let chat_text = ["Hi guys I am Evelyn", "Hello I'm Liam", "Hey it's Sophia", "Hi everyone, I am Noah", "Hiii I'm Olivia", "Helloo, I'm Ethan", "Hey I am Ava", "Hey it's Logan", "Hiiiii, I'm Isabella", "Hello! I am Mason"];

let discussDiv = document.getElementById('discussion_list');
for (let i = 0; i < chat.length; i++) {
    discussDiv.innerHTML += '<b>' + chat[i] + '</b><br>' + chat_text[i] + '<br>' + '<br>';
}

let chat_box = document.getElementById("discussion");
chat_box.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("btn_enter").click()
    }
});

$("#btn_enter").click(() => {
    let text_message = $('#discussion').val();
    discussDiv.innerHTML += '<b>Rose Park</b><br>' + text_message + '<br>' + '<br>';
    $('#discussion').val('');
});