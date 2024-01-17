let userscore = 0;
let compscore = 0;
let total = 0;
let hed = document.querySelector("h1");
let choices = document.querySelectorAll(".choice");
let score = document.querySelector(".msgcnt");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let score_1 = document.querySelector("#score_1 ");
let score_2 = document.querySelector("#score_2");
let hide = document.querySelector(".hide");
let hid = document.querySelector(".hid");
let newx = document.querySelector(".new");
let butn = document.querySelector(".butn");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");

let comram = () => {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let randm = Math.floor(Math.random() * 3);
  return arr[randm];
};
let checkwin = (getuser, ans) => {
  if (
    (ans === "ROCK" && getuser === "SCISSORS") ||
    (ans === "PAPER" && getuser === "ROCK") ||
    (ans === "SCISSORS" && getuser === "PAPER")
  ) {
    score.classList.remove("styleDraw");
    score.classList.remove("style_won");
    score.classList.add("style_loose");

    score.innerHTML = "YOU LOSE ! TRY AGAIN";
    compscore++;
    comp.innerHTML = compscore;
  } else if (ans === getuser) {
    score.classList.remove("style_loose");
    score.classList.remove("style_won");
    score.classList.add("styleDraw");
    score.innerHTML = "GAME DRAW ! PLAY AGAIN";
  } else {
    score.classList.remove("style_loose");
    score.classList.remove("styleDraw");
    score.classList.add("style_won");
    score.innerHTML = "YOU WON ! CONGRATULATIONS";
    userscore++;
    user.innerHTML = userscore;
  }
  total++;
  console.log(total);
  tol(total, compscore, userscore);
};
let playgame = (getuser) => {
  console.log(`USER CHOICE IS ${getuser}`);
  rock.innerHTML = `(${getuser})`;
  let ans = comram();
  console.log(`COMP CHOICE IS ${ans}`);
  paper.innerHTML = `(${ans})`;
  checkwin(getuser, ans);
};

choices.forEach((choice) => {
  hed.classList.remove("heading");
  hide.classList.remove("hide");
  hid.classList.add("hid");
  choice.addEventListener("click", () => {
    hed.classList.add("heading");
    paper.classList.remove("paper");
    rock.classList.remove("rock");
    let getuser = choice.getAttribute("id");
    playgame(getuser);
  });
});

let reset = () => {
  userscore = 0;
  user.innerHTML = 0;
  compscore = 0;
  comp.innerHTML = 0;

  score.innerHTML = "GO FOR YOUR MOVE , GAME IS OF 10 POINTS";
  score.classList.remove("style_loose");
  score.classList.remove("styleDraw");
  score.classList.remove("style_won");

  score.classList.add("msgcnt");
  hed.classList.remove("heading");
  total = 0;
};

let tol = (total, compscore, userscore) => {
  if (total === 20) {
    finalwin(compscore, userscore);
    butn.addEventListener("click", () => {
      hid.classList.add("hid");
      hide.classList.remove("hide");
      reset();
    });
  }
};

let finalwin = (compscore, userscore) => {
  hide.classList.add("hide");
  paper.classList.add("paper");
  rock.classList.add("rock");
  hid.classList.remove("hid");
  console.log(newx);
  if (userscore > compscore) {
    newx.innerText = `THE FINAL WINNER OF THE GAME IS YOU  !  `;
  } else if (userscore === compscore) {
    newx.innerText = `HENCE, DRAW. PLAY AGAIN !  `;
  } else {
    newx.innerText = `THE FINAL WINNER OF THE GAME IS OPPONENT !   `;
  }
};
