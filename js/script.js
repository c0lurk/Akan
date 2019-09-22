let day, month, year, century, DayOfTheWeek, gender, male, male;
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function fetchInputs(){
  day=document.getElementById(dayID);
  month=document.getElementById(monthID);
  year=document.getElementById(yearID);
  century=document.getElementById(centuryID);
}
function calculateDay{
  fetchInput();
  DayOfTheWeek= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )% 7
  return(math.floor(DayOfTheWeek));
}
function checkGender(){
  gender = document.getElementsByName("genderID");
  if(gender[0].checked == true){
    male = "male";
  }else if(gender[1].checked == true){
    female = "female";
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("nameOutput").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("nameOutput").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("nameOutput").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("nameOutput").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("nameOutput").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("nameOutput").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("nameOutput").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("nameOutput").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                  break;
                  case 1 || -1:
                    document.getElementById("nameOutput").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                  break;
                  case 2 || -2:
                    document.getElementById("nameOutput").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                  break;
                  case 3 || -3:
                    document.getElementById("nameOutput").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                  break;
                  case 4 || -4:
                    document.getElementById("nameOutput").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                  break;
                  case 5 || -5:
                    document.getElementById("nameOutput").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                  break;
                  case 6 || -6:
                    document.getElementById("nameOutput").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                  break;

              }
        break
        default:
          text="invalid inputs"
    }
}

