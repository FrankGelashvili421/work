//First homework. 

const season = (celsius) => {
    const spring = (celsius) => {
        if(celsius >= 10 && celsius < 20){
            return true; 
        }
        return false; 
    }

const summer = (celsius) => {
    if(celsius >= 20 && celsius < 40 ){
        return true;
    }
    return false;
}

const autumn = (celsius) =>{
    if(celsius >= 5 && celsius <16){
        return true;
    }
    return false;
}
const winter = (celsius) => {
    if(celsius >= -5 && celsius < 10){
        return true;
    }
    return false;
}

const Sspring = spring(celsius);
const Ssummer = summer(celsius);
const Sautumn = autumn(celsius);
const Swinter = winter(celsius)

switch(true){
    case Sspring :
        console.log(" it's spring")
        break;
    case Ssummer:
        console.log("it's Summer")
        break;
    case Sautumn:
        console.log("it's autumn")
        break;
    case Swinter:
        console.log("it's winter")
        break;
    default:
        console.log("Error.404! set proper celsius")
}
}
season(24) //set any celsius

//sum understanding things there :))