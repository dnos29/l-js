function loadScript(src, callback){
    setTimeout(() => {
        callback();
    }, 5000);
}

loadScript("src", function(){
    console.log("Callback funtion")
})
// callback in callback
loadScript("src", function(){
    console.log("Callback funtion 1");
    loadScript("src2", function(){
        console.log("Callback function 2");
    })
})
// Pyramid of Doom