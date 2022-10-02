function Validate(str){
            const regex = new RegExp(/\S[a-zA-Z]+[0-9]+[@][g][a-z]{4}[.][c][a-z]{2}/);
            if(regex.test(str)){
                        console.log("true");
            }else {
                        console.log("false");
            }
}
export {Validate};