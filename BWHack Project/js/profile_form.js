"use strict";

let interest_list = "Accessibility, Accounting information systems (AIS), Agile, Ajax, Analytics, AngularJS, App development, Application development, Application Programming Interface (APIs), Artificial intelligence, Auditing, Augmented reality, Blockchain, Blogging, Bootstrap, Broadband policy, Business continuity, Business Intelligence (BI), Business process analysis, Cascading Style Sheets (CSS), Change management, Cloud computing, Cognitive computing, Collaborative systems, Consumer applications and technologies, Content management systems, Conversational design, Crowdfunding, Crowdsourcing, Customer relationship management (CRM), Cyber-law, Cyber-security, Dashboards, Data analytics, Data mining, Data science, Data warehousing, Database management systems, Decision support systems (DSS), Design, Digital business models, Digital divide, Digital entrepreneurship, Digital innovation, Digital marketing, E-commerce, E-government, Electronic medical record (EMR), Enterprise architecture, Enterprise Resource Planning (ERP), Entity Relationship Modeling (ER Modeling), Esports, Expert systems, Extensible Markup Language (XML), Extract, transform, load (ETL), Financial Technology (FinTech), Geographic information systems (GIS), Governance, Green computing, Healthcare IT, Home automation, Human resource management systems, Identity management, Information architecture, Information overload, Integration, Intellectual property, Internet of things (IoT), JavaScript, jQuery, JSON, Knowledge management, Machine learning, Mobile application development, Mobility, Natural language processing (NLP), Network neutrality, Neural decision making, Node.js, NoSQL, Online communities, Online learning, Open data, Open source, Payment systems, Peer-to-peer (P2P), Personalization, PHP, Platform as a Service (PaaS), Platforms and ecosystems, Plugin development, Portals, Privacy, Programming, Project management, Python, ReactJS, Requirements analysis, Responsive Web Design (RWD), RESTful, RFID, Risk management, Robotics, Ruby on Rails, Sales force automation, Scripting, Search engine optimization (SEO), Serverless computing, Single Page Applications (SPA), Social media, Software as a service (SaaS), Software development methodologies, Software development tools, Software testing, Sourcing (outsourcing/RFP/contracts), Statistics, Structured Query Language (SQL), Supply chain management (SCM), Systems analysis, Systems thinking, Transaction processing systems (TPS), Usability, User Experience Design (UX), Value and cost/benefits, Virtual reality, Virtual teams, Virtual worlds, Virtualization, Visualization, Web 2.0, Web analytics, Web application frameworks, Web design, Wireframing, Wireless";
let interest_options = interest_list.split(', ');
// console.log(interest_options);

for (let i = 0; i < interest_options.length; i++) {
    let option = document.createElement('option');
    option.text = interest_options[i];
    option.value = interest_options[i].toLowerCase();
    document.getElementById('interest').appendChild(option);
}

let dei_list = "American Indian or Alaska Native, Asian, Black or African American, Native Hawaiian or Other Pacific Islander, Women, First Generation, Non-binary, LGBT+, Disability, International in US, Veteran";
let dei_checkbox = dei_list.split(', ');
//console.log(dei_checkbox);

let checkbox_dei = document.getElementById('dei_checkboxes');
for (let i = 0; i < dei_checkbox.length; i++) {
    let DEIcheckbox = document.createElement('input');
    DEIcheckbox.type = 'checkbox';
    DEIcheckbox.name = 'deiCheckbox';
    DEIcheckbox.value = dei_checkbox[i].toLowerCase();

    let label = document.createElement('label');
    label.textContent = dei_checkbox[i];

    checkbox_dei.appendChild(DEIcheckbox);
    checkbox_dei.appendChild(label);
    $('#dei_checkboxes').append("<br>");
}

$('#show_work').hide();
$('#show_internship').hide();
$('#show_research').hide();
$('#show_extracurriculars').hide();
$('#show_conferences').hide();
$('#show_other').hide();

function getSelectedValue() {
    let selected_val = document.getElementById('experiences').value;
    // console.log(selected_val)
    if (selected_val == 'work') {
        $('#show_work').show();
    } else if (selected_val == 'internship') {
        $('#show_internship').show();
    } else if (selected_val == 'research') {
        $('#show_research').show();
    } else if (selected_val == 'extracurriculars') {
        $('#show_extracurriculars').show();
    } else if (selected_val == 'conferences') {
        $('#show_conferences').show();
    } else if (selected_val == 'other') {
        $('#show_other').show();
    } else {
        $('#show_work').hide();
        $('#show_internship').hide();
        $('#show_research').hide();
        $('#show_extracurriculars').hide();
        $('#show_conferences').hide();
        $('#show_other').hide();
    }
    /*
        if (selected_val == 'work') {
            $('#show_work').show();
            $('#show_internship').hide();
            $('#show_research').hide();
            $('#show_extracurriculars').hide();
            $('#show_conferences').hide();
            $('#show_other').hide();
        } else if (selected_val == 'internship') {
            $('#show_work').hide();
            $('#show_internship').show();
            $('#show_research').hide();
            $('#show_extracurriculars').hide();
            $('#show_conferences').hide();
            $('#show_other').hide();
        } else if (selected_val == 'research') {
            $('#show_work').hide();
            $('#show_internship').hide();
            $('#show_research').show();
            $('#show_extracurriculars').hide();
            $('#show_conferences').hide();
            $('#show_other').hide();
       } else if (selected_val == 'extracurriculars') {
           $('#show_work').hide();
           $('#show_internship').hide();
           $('#show_research').hide();
           $('#show_extracurriculars').show();
           $('#show_conferences').hide();
           $('#show_other').hide();
       } else if (selected_val == 'conferences') {
           $('#show_work').hide();
           $('#show_internship').hide();
           $('#show_research').hide();
           $('#show_extracurriculars').hide();
           $('#show_conferences').show();
           $('#show_other').hide();
       } else if (selected_val == 'other') {
           $('#show_work').hide();
           $('#show_internship').hide();
            $('#show_research').hide();
            $('#show_extracurriculars').hide();
            $('#show_conferences').hide();
            $('#show_other').show();
        } else {
            $('#show_work').hide();
            $('#show_internship').hide();
            $('#show_research').hide();
            $('#show_extracurriculars').hide();
            $('#show_conferences').hide();
            $('#show_other').hide();
        }
    */
}

function showPassword() {
    var x = document.getElementById("signInPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

$("#btn_signup").click(() => {
    if (document.getElementById('username').value == '') {
        alert('Please put a username.');
        $('#username').addClass('alert alert-danger');
    }
    if (document.getElementById('signInPassword').value == '') {
        alert('Please put a password.');
        $('#signInPassword').addClass('alert alert-danger');
    }
    if (document.getElementById('name').value == '') {
        alert('Please put in your name.');
        $('#name').addClass('alert alert-danger');
    }
    if (document.getElementById('contact').value == '') {
        alert('Please put in your contact.');
        $('#contact').addClass('alert alert-danger');
    }
    if (document.getElementById('interest').value == '') {
        alert('Please put in your interest.');
        $('#interest').addClass('alert alert-danger');
    }
    if (document.getElementById('education').value == '') {
        alert('Please put in your educational background.');
        $('#education').addClass('alert alert-danger');
    }
    if (document.getElementById('location').value == '') {
        alert('Please put in your location and timezone.');
        $('#location').addClass('alert alert-danger');
    } else {
        $('#name').removeClass('alert alert-danger');
        $('#contact').removeClass('alert alert-danger');
        $('#interest').removeClass('alert alert-danger');
        $('#education').removeClass('alert alert-danger');
        $('#username').removeClass('alert alert-danger');
        $('#signInPassword').removeClass('alert alert-danger');
        alert('done');
    }
});

$("#btn_remove_work").click(() => {
    $('#show_work').hide();
    document.getElementById("work_experiences").value = "";
});

$("#btn_remove_internship").click(() => {
    $('#show_internship').hide();
    document.getElementById("internship_experiences").value = "";
});

$("#btn_remove_research").click(() => {
    $('#show_research').hide();
    document.getElementById("research_experiences").value = "";
});

$("#btn_remove_extracurriculars").click(() => {
    $('#show_extracurriculars').hide();
    document.getElementById("extracurriculars_experiences").value = "";
});

$("#btn_remove_conferences").click(() => {
    $('#show_conferences').hide();
    document.getElementById("conferences_experiences").value = "";
});

$("#btn_remove_other").click(() => {
    $('#show_other').hide();
    document.getElementById("other_experiences").value = "";
});