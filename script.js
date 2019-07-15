var actKind=[
  "Leave money on a vending machine for someone",
  "Bake cookies for the elderly",
  "Serve at a homeless shelter",
  "Pick up litter on the beach",
  "Let someone go in front of you in line",
  "Give a stranger a compliment",
  "Make dinner for a family in need",
  "Insert coins into someone’s parking meter",
  "Buy flowers to hand out on the street",
  "Leave letters of encouragement on people’s cars",
  "Buy a movie ticket for the person behind you",
  "Pay for someone’s meal at a restaurant",
  "Write letters to soldiers",
  "Donate your clothes to an orphanage",
  "Participate in a fundraiser",
  "Use your allowance to donate to a charity",
  "Hold open the doors for people",
  "Thank a teacher with a gift",
  "Donate your old clothes to the Salvation Army",
  "Help a senior with their groceries",
  "Walk a neighbor’s dog",
  "Babysit for free",
  "Hand out pizza to the homeless",
  "Plant a tree",
  "Sit with someone alone at school",
  "Buy an ice cream cone for a child",
  "Prepare a meal for your family",
  "Give your parents a hug or a call"]

var color=["#AED6F1", "yellow", "green" ]

  var button = document.getElementById('heart');

  button.addEventListener("click", function(){
     var numberText = randNum(actKind);
     var numberBack = randNum(color);
     changeText(numberText);
     changeBackground(numberBack);

  })

  function randNum(array){
    var randDeci = Math.random();
    var randBig = randDeci * array.length;
    var random = Math.floor(randBig);
    // console.log(random);
    return random;
  }



    function changeText(someNum){
    var text = document.getElementById('text');
    text.innerHTML = actKind[someNum];
  }

  function changeBackground(someNum1){
    var color = document.getElementByClass('fullpage');
    color.style.backgroundColor = color[someNum1];
  }
