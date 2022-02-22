/*create a variable to hold your array of images. Populate this array with
your saved images.*/
var imageList = [];
imageList[0] = "images/alien.jpg";
imageList[1] = "images/angry_cat.jpg";
imageList[2] = "images/cute_robot.jpg";
imageList[3] = "images/sad_doggo.jpg";
imageList.push("images/scoob.png");

var lastImg;

//create and save an 'img' element to a variable using createElement
/*alternatively, you can have your img element already created in your
  index.html file and use getElementById here*/
var img = document.createElement("img");

//create and save a 'button' element to a variable using createElement
/*alternatively, you can have the 'button' element already created in your
index.html file and use getElementById here*/
var button = document.getElementById("aButn");

//this is a comment

/*equip your button with an event listener that calls your custom function
whenever the button is clicked.*/
button.addEventListener("click",generateImage);

/*define a function that displays a random image from your array*/
function generateImage(){
    /*create a LOCAL variable that will hold a randomly generated integer
        to be used as the index value of your image array*/
    let randomImg = Math.floor(Math.random() * 5);
    while(lastImg != null && lastImg == randomImg)
    {
        randomImg = Math.floor(Math.random() * 5);
    }
    lastImg = randomImg;
    /*call the variable that is holding the img element and populate it with
        the randomly selected image from your array*/
    img.src = imageList[randomImg];
    document.body.appendChild(img);
    
}
