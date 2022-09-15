// import './style.css'
// import { collection, getDocs } from "firebase/firestore";
// import { db } from './firebase';

// async function getData (){
//     const querySnapshot = await getDocs(collection(db, "FocusHours"));
//     querySnapshot.forEach((doc) => {
//         console.log(doc)
//       console.log(`${doc.id} => ${doc.data().Time}`);
//     });
// }
// getData()
var startButton = document.getElementById("start-btn");
var buttonStatus = true;
var defaultValue ="0:10";
var titleIcon = document.getElementById("titleIcon");
var switchShort = document.getElementById("switchShort")
var switchLong = document.getElementById("switchLong")
var switchDefault = document.getElementById("switchDefault")
const root = document.querySelector(':root');
var myInterval

// Color settings
const redTemplate = {
    '--primary-color':' #e6575b',
    '--secondary-color': 'rgb(244, 170, 165, 25%)'}
const greenTemplate = {
    '--primary-color':' #0aafa7',
    '--secondary-color': 'rgb(255, 255, 255,15%)'}
const blueTemplate = {
    '--primary-color':' #0a8abd',
    '--secondary-color': 'rgb(255, 255, 255,15%)'}

// function getData(){
//     const querySnapshot = await getDocs(collection(db, "FocusHours"));
//     querySnapshot.forEach((doc) => {
//         console.log(doc)
//       console.log(`${doc.id} => ${doc.data().Time}`);
//     });
// }

// getData()




startButton.onclick = function(){
        if (buttonStatus == true) {
            updateIcon()
            buttonStatus = false;
            startButton.innerHTML = "STOP"
            myInterval = setInterval(myTimer, 1000)
        } else {
            updateIcon()       
            startButton.innerHTML = "START"
            myStopFunction()
        }
}

// Switching to Short Break mode
switchShort.onclick = () =>{changeMode(event,"5:00",greenTemplate)}

// Switching to Long Break mode
switchLong.onclick = () =>{changeMode(event,"10:00",blueTemplate)}

// Switching to Default mode
switchDefault.onclick = () =>{changeMode(event,"25:00",redTemplate)}

function myStopFunction(){
    console.log('Timer paused')
    clearInterval(myInterval)
    // reset buttonStatus boolean state
    buttonStatus = true;
}

function myTimer(){
//    Get current HTML value
    var currentValue = document.getElementById("timestring").innerHTML
    console.log("currentvalue",currentValue)
    var a = currentValue.split(':')
    console.log("values of a ",a)

    // convert strings into integers

    var seconds = parseInt(a[0])*60 + parseInt(a[1])
    var d = seconds - 1
    console.log('seconds value', d)

    // convert seconds back to minutes and seconds
    var m = Math.floor (d % 3600 / 60)
    var s = Math.floor (d % 3600 % 60)

    // Add padding to the string to make sure it is 2 digits
    s = String(s).padStart(2,'0')

    var updatedTime = m + ":" + s

    document.getElementById("timestring").innerHTML = updatedTime
    document.getElementById("titleDetails").innerHTML = `${updatedTime} - Time to Focus!`

    if (updatedTime == "0:00"){
        // play audio sound when timer hits 0:00
        var snd = new Audio('./mixkit-classic-alarm-995.wav')
        snd.play();
        myStopFunction()

        // reset values back to default
        document.getElementById("timestring").innerHTML = defaultValue
        startButton.innerHTML = "START"
    }
}

function updateIcon(){
    if(buttonStatus == true){
        titleIcon.setAttribute("href","https://cdn-icons-png.flaticon.com/512/877/877712.png")
    } else {
        titleIcon.setAttribute("href","https://cdn-icons-png.flaticon.com/512/877/877763.png")
    } 
}

function resetTo (defaultValue){
    // Stops the countdown and resets the value to specified input argument
    myStopFunction()
    document.getElementById("timestring").innerHTML = defaultValue
    startButton.innerHTML = "START"
}

function changeMode (event, defaultValue,templateChoice){
    // Confirms with user if want to switch to other timer while current timer is running
    if (buttonStatus == false){
        var confirmStatus = confirm("The timer is still running, are you sure you want to switch?");

        if (confirmStatus == false ){
            event.preventDefault();
        } else{
            resetTo(defaultValue)
            // set multiple css variables
            const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
            setVariables(templateChoice)
        }
    } 
    // Switches to other mode 
    else{
        console.log("Nothing happens")
        resetTo(defaultValue)
        // set multiple css variables
        const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
        setVariables(templateChoice)
    }
}

    
// let template1 = document.querySelector('#template1')
// console.log(template1.content)
// let content = template1.content.cloneNode(true)
// content.querySelector('p').style.color= "orange"

// // content.p.innerHTML = "1st template"
// document.body.appendChild(content)

// let content2 = template1.content.cloneNode(true)
// content2.querySelector('p').style.color = "blue"
// document.body.appendChild(content2)
