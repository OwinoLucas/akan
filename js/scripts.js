var work = function() {
    var get = document.getElementById("d").value;
    var dt = get.split("-");
    var d = new Date();
    d.setFullYear(parseInt(dt[0]));
    d.setMonth(parseInt(dt[1])-1);
    d.setDate(parseInt(dt[2]));
    var date =d.getDay();

    var male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female_names = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var days = day[date - 1];

    var akan_name = "";
    if(getGender() == "male"){
        akan_name = male_names[date];
        alert("your akan name is " + akan_name + " you were born on a " + days);
    }
    else if (getGender() == "female"){
        akan_name = female_names[date] 
        alert("Your akan nam ==e is " + akan_nam  + " you were born on a " + days);
    }
    else{
        alert("Input valid content");
    }
}

function getGender() { 
    var gender;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.checked === true){
        //alert("male");
        gender = "male";
    }
    else if (female.checked === true){
        //alert("female");
        gender = "female";
    }
    return gender;
}