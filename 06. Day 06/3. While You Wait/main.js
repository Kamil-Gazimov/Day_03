function BDayCount (){
    var daysUntilMyBirthday = 0;  
    console.log(daysUntilMyBirthday + " days until my birthday");
    if (daysUntilMyBirthday >= 30){
      console.log("It's a long way to go");
    }
    else if(daysUntilMyBirthday < 30 && daysUntilMyBirthday >= 5){
      console.log("Almost there, it's coming!");
    }
    else if(daysUntilMyBirthday < 5 && daysUntilMyBirthday > 0){
      console.log("It's here! :D");
    }
    else if(daysUntilMyBirthday == 0){
      console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
    }
  }
  
  BDayCount();
  