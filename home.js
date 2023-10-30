

function home(){
    document.querySelector(".homepage").style.display = "block"
    document.querySelector(".maincalories").style.display = "none"
    document.querySelector(".mainbmi").style.display = "none"
}
function calories(){
    document.querySelector(".maincalories").style.display = "block"
    document.querySelector(".homepage").style.display = "none"
    document.querySelector(".mainbmi").style.display = "none"
}
function bmi(){
    document.querySelector(".mainbmi").style.display = "block"
    document.querySelector(".maincalories").style.display = "none"
    document.querySelector(".homepage").style.display = "none"
}
function calculate(){
    let calcgrander = document.getElementById("calcgrander").value
    let calcweight = document.getElementById("calcweight").value
    let calclength = document.getElementById("calclength").value
    let calcage = document.getElementById("calcage").value
    if(calcweight != "" && calclength != "" && calcage != "" && calcgrander.includes("Male")){
    let calcresult = 10 * +calcweight + 6.25 * +calclength - 5 * +calcage + 5
    document.querySelector(".alert-success").style.display = "block"
    document.querySelector(".alert-success").innerHTML ="Your Average Calories Per Day Is: " + calcresult + "Calorie"
    document.querySelector(".alert-danger").style.display = "none"
    }
    else if(calcweight != "" && calclength != "" && calcage != "" && calcgrander.includes("Female")){
    let calcresult = 10 * +calcweight + 6.25 * +calclength - 5 * +calcage - 161
    document.querySelector(".alert-success").style.display = "block"
    document.querySelector(".alert-success").innerHTML ="Your Average Calories Per Day Is: " + calcresult + "Calorie"
    document.querySelector(".alert-danger").style.display = "none"
    }
    else{
    document.querySelector(".alert-danger").style.display = "block"
    document.querySelector(".alert-success").style.display = "none"
    }
}
function btnbmi(){
    let bmiweight = document.getElementById("bmiweight").value 
    let bmilength = document.getElementById("bmilength").value
    let bmiresult = bmiweight / ((bmilength / 100) * (bmilength / 100))
    if(bmiweight != "" && bmilength != ""){
    document.querySelector(".result-bmi").style.display = "block"
    document.querySelector(".result-bmi").innerHTML = "Your BMI: " + bmiresult 
    document.querySelector(".error-bmi").style.display = "none"
    }else{
    document.querySelector(".error-bmi").style.display = "block"
    document.querySelector(".result-bmi").style.display = "none"
    document.querySelector(".under").style.display = "none"
    document.querySelector(".healthy").style.display = "none"
    document.querySelector(".over").style.display = "none"
    }
    if(bmiresult >= 25){
    document.querySelector(".over").style.display = "block"
    document.querySelector(".under").style.display = "none"
    document.querySelector(".healthy").style.display = "none"
    }else if(bmiresult <= 24.9 && bmiresult >= 18.5){
        document.querySelector(".healthy").style.display = "block"
        document.querySelector(".under").style.display = "none"
        document.querySelector(".over").style.display = "none"
    }else if(bmiresult < 18.5){
        document.querySelector(".under").style.display = "block"
        document.querySelector(".healthy").style.display = "none"
        document.querySelector(".over").style.display = "none"
    }else{
        document.querySelector(".under").style.display = "none"
        document.querySelector(".healthy").style.display = "none"
        document.querySelector(".over").style.display = "none"
    }
} 
// onload = home()




