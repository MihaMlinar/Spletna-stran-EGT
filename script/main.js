const content1 = document.querySelector("#content1"),
arrow1 = document.querySelector("#arrow1"),
clickRešitev1 = document.querySelector(".clickRešitev1"),
content2 = document.querySelector("#content2"),
arrow2 = document.querySelector("#arrow2"),
clickRešitev2 = document.querySelector(".clickRešitev2"),
content3 = document.querySelector("#content3"),
arrow3 = document.querySelector("#arrow3"),
clickRešitev3 = document.querySelector(".clickRešitev3"),
content4 = document.querySelector("#content4"),
arrow4 = document.querySelector("#arrow4"),
clickRešitev4 = document.querySelector(".clickRešitev4"),
content5 = document.querySelector("#content5"),
arrow5 = document.querySelector("#arrow5"),
clickRešitev5 = document.querySelector(".clickRešitev5"),
content6 = document.querySelector("#content6"),
arrow6 = document.querySelector("#arrow6"),
clickRešitev6 = document.querySelector(".clickRešitev6");

const textRešitve = document.querySelector(".rešitve__celota--text");

const arr = [
{
    id:1,
    nodeOne:arrow2,
    nodeTwo:content2,
    nodeThree: clickRešitev2
},
{
    id:2,
    nodeOne:arrow3,
    nodeTwo:content3,
    nodeThree: clickRešitev3
},
{
    id:3,
    nodeOne:arrow4,
    nodeTwo:content4,
    nodeThree: clickRešitev4
},
{
    id:4,
    nodeOne:arrow5,
    nodeTwo:content5,
    nodeThree: clickRešitev5
    
},
{
    id:5,
    nodeOne:arrow6,
    nodeTwo:content6,
    nodeThree: clickRešitev6
}
]

for(let i = 0; i < arr.length; i++) {
    arr[i].nodeThree.addEventListener("click", () => {
        arr[i].nodeOne.classList.toggle("rotateArrow");
        arr[i].nodeTwo.classList.toggle("add");
    })
}

// Item one / rešitve
clickRešitev1.addEventListener("click",() => {
    content1.classList.toggle("add");
    arrow1.classList.toggle("rotateArrowOpen");
});

// // Predstavitev - *
const predstavitevCont = document.querySelector(".predstavitev__content"),
predstavitevText = document.querySelector(".predstavitev__content--text"),
vizija = document.querySelector("#vizija"),
vizijaVsebina = document.querySelector("#vizijaVsebina"),
vrednote = document.querySelector("#vrednote"),
vrednoteVsebina = document.querySelector("#vrednoteVsebina");

// Poslanstvo
let itemStatePoslovanje = "open";
const minusSign = document.querySelector(".plusIconMinus");
const plusSign = document.querySelector(".plusIconPlus");

predstavitevCont.addEventListener("click", () => {
    if(itemStatePoslovanje === "open"){
        plusSign.style.transform = "rotate(180deg)";
        minusSign.style.transform = "rotate(90deg)";
        itemStatePoslovanje = "closed";
    }
    else {
        plusSign.style.transform = "rotate(0deg)";
        minusSign.style.transform = "rotate(0deg)";
        itemStatePoslovanje = "open"
    }
    
    predstavitevText.classList.toggle("d-none");
});

// Vizija 
let itemStateVizija = "closed";
const minusSignVizija = document.querySelector(".plusIconMinusVizija");
const plusSignVizija = document.querySelector(".plusIconPlusVizija");

vizija.addEventListener("click", () => {
    if(itemStateVizija === "open"){
        plusSignVizija.style.transform = "rotate(90deg)";
        minusSignVizija.style.transform = "rotate(180deg)";
        itemStateVizija = "closed";
    }
    else {
        minusSignVizija.style.transform = "rotate(0deg)";
        plusSignVizija.style.transform = "rotate(0deg)";
        itemStateVizija = "open"
    }
    vizijaVsebina.classList.toggle("d-none");
});

// Vrednote
let itemStateVrednote = "closed";
const minusSignVrednote = document.querySelector(".plusIconMinusVrednote");
const plusSignVrednote = document.querySelector(".plusIconPlusVrednote");

vrednote.addEventListener("click", () => {
    if(itemStateVrednote === "open"){
        plusSignVrednote.style.transform = "rotate(90deg)";
        minusSignVrednote.style.transform = "rotate(180deg)";
        itemStateVrednote = "closed";
    }
    else {
        minusSignVrednote.style.transform = "rotate(0deg)";
        plusSignVrednote.style.transform = "rotate(0deg)";
        itemStateVrednote = "open"
    }
    vrednoteVsebina.classList.toggle("d-none");
});

// Pravno obvestilo
const pravnoObvestilo = document.querySelector("#pravnoObvestilo");
const pravnoObvestiloStyle = document.querySelector(".pravnoObvestilo");
const pravnoObvestiloClose = document.querySelector(".pravnoObvestilo__closingIcon")

pravnoObvestilo.addEventListener("click", () => {
    pravnoObvestiloStyle.classList.remove("d-none");
})

pravnoObvestiloClose.addEventListener("click", () => {
    console.log("click");
    pravnoObvestiloStyle.classList.add("d-none");
})

pravnoObvestiloStyle.addEventListener("click", (event) => {
    event.stopPropagation();
    pravnoObvestiloStyle.classList.add("d-none");
})

// Politika zasebnosti
const politikaZasebnosti = document.querySelector("#politikaZasebnosti");
const politikaZasebnostiStyle = document.querySelector(".politikaZasebnosti");
const politikaZasebnostiClose = document.querySelector(".politikaZasebnosti__closingIcon")

politikaZasebnosti.addEventListener("click", () => {
    politikaZasebnostiStyle.classList.remove("d-none");
})

politikaZasebnostiClose.addEventListener("click", () => {
    console.log("click");
    politikaZasebnostiStyle.classList.add("d-none");
})

politikaZasebnostiStyle.addEventListener("click", (event) => {
    event.stopPropagation();
    politikaZasebnostiStyle.classList.add("d-none");
})