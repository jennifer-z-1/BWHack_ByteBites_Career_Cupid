"use strict";

let chat = ["Amelia Brooks", "Jameson Reed", "Harper Morgan", "Alexander Price", "Charlotte Hughes", "William Sullivan", "Abigail Peterson", "Benjamin Wallace", "Emily Foster", "Henry Mitchell"];
let chat_text = ["Hi everyone, my name is Amelia. I'm a freshman MIS Major at Temple University. Does anyone have any advice they can share?", "Career fair is definitely a must-do. The Career Fair can be really helpful for getting internships and even job opportunities. Make sure to prepare your resume and practice your elevator pitch before you go.", "Don't underestimate the power of networking. Start building relationships with your classmates, professors, and even alumni. Temple has a vast network, and you never know where these connections might lead in the future", "My advice would be to stay curious and proactive in your learning. Engage with your courses, ask questions, and pursue subjects that genuinely interest you.", "Hi Amelia! One thing I wish I knew as a freshman is the importance of time management. College life can be overwhelming with the freedom and the number of responsibilities you have. Start using a planner or a digital calendar to keep track of your assignments, exams, and any social activities. It really helps to visualize how you're allocating your time!", "One thing I'd suggest is to start thinking about your career early on. It's never too soon to get internships, even in your freshman year. They provide invaluable experiences and help you build a professional network. ", "Keep an open mind and be willing to step out of your comfort zone. Try new clubs, take a class outside your major, or study abroad if you can. College is a time of exploration, and you never know what new passions you might discover.", "One of the best pieces of advice I can give you is to start coding projects outside of class as early as possible. Whether it’s a personal website, a mobile app, or a data analysis project, real-world applications of what you're learning will deepen your understanding and make your resume stand out.", "My advice is to keep up with industry trends and technologies outside of your coursework. Follow tech blogs, listen to podcasts, and join relevant online communities. This will not only enhance your learning but also help you in networking and interviews.", "I recommend learning version control with Git and GitHub as soon as you can. It’s essential for collaborating on coding projects, tracking changes in your work, and showcasing your projects to potential employers."];

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