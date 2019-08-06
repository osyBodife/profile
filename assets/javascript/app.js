
 
//  let dogs ={
//      raining: true,
//      noise:"Woof",
//      makeNoise: 
//          function () {
//             console.log(dogs.noise);

//             dogs.makeNoise();
         
            
//          }
//      }


// function RPG (name, profession, gender,age, strength, hitpoints, printStats){
//     this.name=name;
//     this.profession=String(profession);
//     this.gender-String(gender);
//     this.age=parseInt(age);
//     this.strength=parseInt(strength);
//     this.hitpoints=parseInt(hitpoints);
//     this.printStats=function(){
//         console.log(RPG);
//     };
//     this.isAlive=function(){
//         if (this.hitpoints>0){
//             console.log("alive");
//         }else{
//             console.log("Not Alive")
//         }


//     }

// }

// var player1=new RPG("John", "boxer", "Male", 20, 5, 10);
// console.log(player1);


// var player2=new RPG("James", "Rapper", "Male", 20, 5, 0);
// console.log(player1.printStats());
 
// console.log(player1.isAlive());
// console.log(player2.isAlive());
//###
// Instructions

// Remember Tamagotchis? They were those little toys that contained "digital pets" which you could feed, pet, play with, and care for. Kind of like Furbies but a whole lot less terrifying. Over the next thirty minutes or so, you are going to create your own basic Tamagotchi clone using constructors.

// Create a constructor called "DigitalPal" which will create four properties and four methods...

// The first property is "hungry" and it initially starts out as false

// The second property is "sleepy" and it initially starts out as false

// The third property is "bored" and it initially starts out as true

// The fourth property is "age" and it initially starts out at 0

// The first method is "feed()" - If hungry is true, print "That was yummy!", set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."

// The second method is "sleep()" - If sleepy is true, print Zzzzzzzz, set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."

// The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"

// The fourth method is "increaseAge()" - This method runs within the sleepy() method when the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing "Happy Birthday to me! I am "+age+" old!"

// Create a variable named "Dog" that is set to a new DigitalPal before adding the following unique properties/methods to it...

// Outside - Initially set to false

// Bark() - Prints out "Woof! Woof!" when run

// goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs Bark(). If outside is true, prints "We're already outside though..."

// goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."

// Make a second variable named "Cat" that is set to a new DigitalPal and add the following methods to it:

// HouseCondition - Initially set to 100... But not for long...

// meow() - prints out "Meow! Meow!" when run

// destroyFurniture() - Lowers HouseCondition by 10 and prints MUAHAHAHAHA! TAKE THAT FURNITURE! to the screen. Also sets bored to false and sleepy to true. If HouseCondition is equal to 0, then this should not run anymore.

// buyNewFurniture() - Raises HouseCondition by 50 and prints "Are you sure about that?" to the screen.

// Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!

// BONUS: Make it so your Tamagotchis run off of user-input. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.

// function DigitalPal(hungry, sleepy, bored, age){

//     this.hungry=false;
//     this.sleepy=false;
//     this.bored=true;
//     this.age=0;
//     this.feed=function (){
//         if(!this.hungry){
//             console.log("Thats yummy");
//             this.hungry=false;
//             this.sleepy=true;
//         }else{
//             console.log( "No thanks! I'm full.");
//         }



//     }
//     this.sleep=function(){
//         if(!this.sleepy){
//             console.log("Zzzzzzz");
//             this.bored=true;
//             this.sleepy=false;
//             increaseAge();

//         }else{

//             console.log ("No way! I am not tired")
//         }
//     }
//         this.play=function(){
//             if(!this.bored){
//                 console.log("Yay! Let\'s play");
//                 this.bored=false;
//             this.hungry=true;

//             }else{
//                 console.log("Not right now. Later?")

//         }
//     }
//     this.increaseAge=function(){
//         this.age++;
//         console.log("Happy Birthday to me! I am "+age+" old!")


//     }
    // The first method is "feed()" - If hungry is true, print "That was yummy!",
    //set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."

    // The second method is "sleep()" - If sleepy is true, print Zzzzzzzz, set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."
    
    // The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"
    
    // The fourth method is "increaseAge()" - This method runs within the sleepy() method when the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing "Happy Birthday to me! I am "+age+" old!"
    
    // Create a variable named "Dog" that is set to a new DigitalPal before adding 
    //the following unique properties/methods to it...
    
    // Outside - Initially set to false
    
    // Bark() - Prints out "Woof! Woof!" when run
    
    // goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs Bark(). If outside is true, prints "We're already outside though..."
    
    // goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."
    
    // Make a second variable named "Cat" that is set to a new DigitalPal and add the following methods to it:
    
    // HouseCondition - Initially set to 100... But not for long...
    
    // meow() - prints out "Meow! Meow!" when run
    
    // destroyFurniture() - Lowers HouseCondition by 10 and prints MUAHAHAHAHA! TAKE THAT FURNITURE! to the screen. Also sets bored to false and sleepy to true. If HouseCondition is equal to 0, then this should not run anymore.
    
    // buyNewFurniture() - Raises HouseCondition by 50 and prints "Are you sure about that?" to the screen.
    
    // Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!
    
    // BONUS: Make it so your Tamagotchis run off of user-input. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.

// }
//  var Dog= new DigitalPal (true, true,true, 1);
//  console.log(Dog);
//  console.log(Dog.feed);
//  console.log(Dog.hungry);

console.log(process.argv);
let action =process.argv[2];
//from the process.argv array 
// create an new array starting from 3rd item
//convert to a string
//reomve all the
let searchTerm=process.argv.slice(3).toString().replace(/,/g , " ");

console.log(action);
console.log(searchTerm);