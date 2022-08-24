let personImg = document.querySelector(`#person-img`);
let author = document.querySelector(`#author`);
let job = document.querySelector(`#job`);
let info = document.querySelector(`.info`);
let prevBtn = document.querySelector(`.prev-btn`);
let nextBtn = document.querySelector(`.next-btn`);
let randomBtn = document.querySelector(`.random-btn`);
// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currentItem = 0;

window.addEventListener(`DOMContentLoaded`, () => {
  showPerson(currentItem);
});

let showPerson = (person) => {
  let items = reviews[person];
  personImg.src = items.img;
  author.textContent = items.name;
  job.textContent = items.job;
  info.textContent = items.text;
};
nextBtn.addEventListener(`click`, () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener(`click`, () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener(`click`, () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
/*let personOne = reviews.find(function(details){
  return details.id===1
})
let personTwo = reviews.find(function(details){
  return details.id===2
})
let personThree = reviews.find(function(details){
  return details.id===3
})
let personFour = reviews.find(function(details){
  return details.id===4
})




function personOneInfo() {
  author.textContent = personOne.name
  personImg.src= personOne.img
  job.textContent = personOne.job
  info.textContent = personOne.text
}
function personTwoInfo() {
  author.textContent = personTwo.name
  personImg.src= personTwo.img
  job.textContent = personTwo.job
  info.textContent = personTwo.text
}
function personThreeInfo() {
  author.textContent = personThree.name
  personImg.src= personThree.img
  job.textContent = personThree.job
  info.textContent = personThree.text
}
function personFourInfo() {
  author.textContent = personFour.name
  personImg.src= personFour.img
  job.textContent = personFour.job
  info.textContent = personFour.text
}
let newArray = [personFourInfo(), personTwoInfo(), personThreeInfo(), personOneInfo()]
console.log(newArray[1]);

prevBtn.addEventListener(`click`, function(){
  newArray[2]
  // personOneInfo()
  // personTwoInfo()
  // personThreeInfo()
  // personFourInfo()
})




/*let nameList = reviews.map(function(details){
  return details.name
})
console.log(nameList);
  prevBtn.addEventListener(`click`,function(){
    author.textContent = nameList[0], nameList[1]
    // for (let i = 0; i < nameList.length; i++) {
    //   const list = nameList[i];
    //   console.log(list);
    //   author.textContent = list
      
    // }
  })*/
