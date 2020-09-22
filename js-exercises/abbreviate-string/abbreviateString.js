import { isString } from "util";

function abbreviateString(str) {

    const inputNameArr = str.split(" ");


    if(inputNameArr.length > 1){
       var abbrString=inputNameArr[0] + " " + inputNameArr[inputNameArr.length - 1].charAt(0).toUpperCase() + ".";
    }

    return abbrString;

}

export { abbreviateString };
