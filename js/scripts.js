var work = function() {
    var get = document.getElementById("d").value;
    var dt = get.split("-");
    var d = new Date();
    d.setFullYear(parseInt(dt[0]));
    d.setFullMonth(parseInt(dt[1])-1);
    d.setDate(parseInt(dt[2]));
    var date =d.getDay();
    document.getElementById("demo").innerHTML = date;

    var male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female_names = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];

    var akan_name = "";
    if(getGender() == "male"){
        akan_name = male_names[date];
    }
    else{
        akan_name = female_names[date];
    }
    document.getElementById("demo").innerHTML = akan_name;
}

function getGender(){}