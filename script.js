/**=============================================================
*                          SELECTORS                            
==============================================================**/

const girls = document.querySelector(".girls");
const victory = document.querySelector(".victory");
const messageElem = document.querySelector(".message");

/**=============================================================
*                          EVENTS                            
==============================================================**/

document.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("girl")) return;

  const randColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  const randRotation = (Math.random() * 2 - 1) * 3;

  messageElem.style.transform = `translate(-50%) rotate(${randRotation}deg)`;
  messageElem.style.background = randColor;

  console.log(counter);
  if (counter === message.length) {
    messageElem.textContent = "";
    victory.classList.remove("hidden");
    counter = 0;
  } else {
    messageElem.textContent = message[counter];
    victory.classList.add("hidden");
    counter++;
  }
});

/**=============================================================
*                          FUNCTIONS                            
==============================================================**/

function buildGirls() {
  for (let i = 0; i < 10; i++) {
    const girl = document.createElement("img");
    girl.src = `images/girl${i + 1}.png`;
    girl.classList.add("girl");

    if (i % 2 == 0) {
      girl.classList.add("medium");
    } else {
      girl.classList.add("small");
    }
    girl.style.left = `${i * 11}%`;

    girls.append(girl);
  }
}

/**=============================================================
*                          MAIN                            
==============================================================**/
let counter = 0;
const message = ["konstantin", "prihodi", "v", "subbotu", "na", "pokurku"];

buildGirls();
