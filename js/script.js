let day, month, year, century, DayOfTheWeek, gender, male, female ,result;
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let FemaleNames=["Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama"];

function fetchInputs(){
  day=parseInt(document.getElementById(dayID).value));
  month=parseInt(document.getElementById(monthID).value));
  year=parseInt(document.getElementById(yearID).value));
  century=parseInt(document.getElementById(centuryID);
  validate();
}
function validate(){
  if (day <= 0) {
    alert("please enter valid day")
  }
  else if (month <= 0) {
    alert("enter valid month");
  }
}

console.log(day, month, year, century);
function calculateDay(){
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
                  result =  "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  result = "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  result =  "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  result =  + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  result = + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  result = "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  result = + "Your akan name is " + maleNames[6];
                break;
                default:
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    result =  "Your akan name is " + FemaleNames[0];
                  break;
                  case 1 || -1:
                    result = "Your akan name is adwoa " + FemaleNames[1];
                  break;
                  case 2 || -2:
                    result =  "Your akan name is"; +FemaleNames[2]
                  break;
                  case 3 || -3:
                    result =  + "Your akan name is";+FemaleNames[3]
                  break;
                  case 4 || -4:
                    result = + "Your akan name is" +FemaleNames[4];

                  break;
                  case 5 || -5:
                    result = "Your akan name is" +FemaleNames[5];
                  break;
                  case 6 || -6:
                    result = + "Your akan name is" +FemaleNames[6];
                  break;

              }
        break
        default:
          text="invalid inputs"
    }
}
console.log(result);
function printResult(){
  document.getElementById("nameOutput").innerHTML=result;
}
