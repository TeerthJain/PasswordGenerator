let characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "*",
  "_",
];

let p1 = document.getElementById("pass1");
let p2 = document.getElementById("pass2");

let p3 = document.getElementById("pass3");
let p4 = document.getElementById("pass4");
let classPasswords = document.getElementById("passwords");
let pCopy = document.getElementById("pCopy1");
let num = document.getElementById("numsize");

function generate() {
  classPasswords.style.visibility = "visible";
  pCopy.textContent = "Click on the boxes to copy the passwords.";
  let pSize = num.value;
  if (pSize == null || pSize.length == 0 || pSize == "") {
    pSize = 12;
  }
  p1.textContent = randompass(pSize);
  p2.textContent = randompass(pSize);

  p3.textContent = randompass(pSize);
  p4.textContent = randompass(pSize);
}
function randompass(pSize) {
  let pass = "";
  for (let i = 0; i < pSize; i++) {
    pass += characters[Math.floor(Math.random() * 59)];
  }
  return pass;
}

function copy1() {
  let text = p1.innerText;
  setClipboard(text);
}
function copy2() {
  let text = p2.innerText;
  setClipboard(text);
}

function copy3() {
  let text = p3.innerText;
  setClipboard(text);
}
function copy4() {
  let text = p4.innerText;
  setClipboard(text);
}
function setClipboard(text) {
  var type = "text/plain";
  var blob = new Blob([text], { type });
  var data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    function () {
      /* success */
      console.log("successfuly coped");
    },
    function () {
      console.log("failed to copy");
    }
  );
}
