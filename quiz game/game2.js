function userChoise()
{
    let select = document.getElementById("selection");
    let choise = select.selectedIndex;
    gameChoise = select.options[choise].text;
    sessionStorage.setItem("usersChoise", gameChoise);
    window.open("Game.html");
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        document.getElementById("image").innerHTML="";
        let img = document.createElement("img");
        img.src = quiz.getQuestionIndex().img;
        img.width = '250';
        img.height = '250';
        document.getElementById("image").appendChild(img);

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    document.getElementById("sc").innerHTML= quiz.score;
    document.getElementById("message").innerHTML = quiz.message;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function nextQuestion()
{
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getNextQuestionIndex().text;

        document.getElementById("image").innerHTML="";
        let img = document.createElement("img");
        img.src = quiz.getQuestionIndex().img;
        img.width = '250';
        img.height = '250';
        document.getElementById("image").appendChild(img);

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function prevQuestion()
{
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getPrevQuestionIndex().text;

        document.getElementById("image").innerHTML="";
        let img = document.createElement("img");
        img.src = quiz.getQuestionIndex().img;
        img.width = '250';
        img.height = '250';
        document.getElementById("image").appendChild(img);

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

var Flag = [
    new Question("What is this flag?",
        ["ספרד","ירדן", "איטליה"],
        "ספרד",
        "img/1.jpg"
        ),
    new Question("What is this flag?",
        ["קולומביה","ישראל", "איטליה"],
        "איטליה",
        "img/2.jpg"
        ),
    new Question("What is this flag?",
        ["ספרד","ארצות הברית", "איטליה"],
        "ארצות הברית",
        "img/3.jpg"
        ),

    new Question("What is this flag?",
        ["קפריסין","ארגנטינה", "איטליה"],
        "ארגנטינה",
        "img/4.jpg"
        ),
    new Question("What is this flag?",
        ["מקסיקו","ישראל", "מצרים"],
        "מקסיקו",
        "img/5.jpg"
        ),
    new Question("What is this flag?",
        ["בלגיה","גרמניה", "יוון"],
        "יוון",
        "img/6.jpg"
        ),
    new Question("What is this flag?",
        ["מלטה","ברזיל", "איטליה"],
        "ברזיל",
        "img/7.jpg"
        ),
    new Question("What is this flag?",
        ["רוסיה","סרביה", "פרו"],
        "רוסיה",
        "img/8.jpg"
        ),
    new Question("What is this flag?",
        ["ספרד","לבנון", "קנדה"],
        "קנדה",
        "img/9.jpg"
        ),
    new Question("What is this flag?",
        ["ספרד","ישראל", "איטליה"],
        "ישראל",
        "img/10.jpg"
    )
]

var Food = [
  new Question("'What is this food?",
  [" ריזוטו", "המבורגר", "פיצה"],
      "פיצה",
  "img/11.jpg"
 ),
 new Question("'What is this food?",
  [" חומוס", "המבורגר", "פיצה"],
      "המבורגר",
  "img/12.jpg"
 ),
 new Question("'What is this food?",
  [" ספגטי", "תפוח", "פיצה"],
      "ספגטי",
  "img/13.jpg"
 ),
 new Question("'What is this food?",
  [" ריזוטו", "צ'יפס", "לחם"],
      "צ'יפס",
  "img/14.jpg"
 ),
 new Question("'What is this food?",
  [" ריזוטו", "נקניקיות", "חומוס"],
      "נקניקיות",
  "img/15.jpg"
 ),
  new Question("'What is this food?",
  [" ספגטי", "נקניקיות", "עוף"],
      "עוף",
  "img/16.jpg"
 ),
 new Question("'What is this food?",
 [" ריזוטו", "דגים", "המבורגר"],
     "דגים",
 "img/17.jpg"
),
new Question("'What is this food?",
[" פיצה", "נקניקיות", "אורז"],
    "אורז",
"img/18.jpg"
),
new Question("'What is this food?",
[" טבעות בצל", "נקניקיות", "פלאפל"],
    "טבעות בצל",
"img/19.jpg"
),
new Question("'What is this food?",
[" עוגה", "שווארמה", "חומוס"],
    "חומוס",
"img/20.jpg"
)

]

var People = [
  new Question("Who is this people?",
  ["ערן זהבי", "מאור בוזגלו", " דוד אוחיון"],
  "ערן זהבי",
  "img/21.jpg"
 ),
 new Question("Who is this people?",
  ["ערן זהבי", "בנימין נתניהו ", "בני גנץ "],
  "בנימין נתניהו",
  "img/22.jpg"
 ),
 new Question("Who is this people?",
  [" דונלד טראמפ", "בנימין נתניהו", "ברק אובמה "],
  "ברק אובמה",
  "img/23.jpg"
 ),
 new Question("Who is this people?",
 ["רונאלדיניו ", "רונאלדו ", "מסי "],
 "מסי",
 "img/24.jpg"
),
new Question("Who is this people?",
[" רונאלדיניו ", "דמבלה ", "ברק אובמה "],
" רונאלדיניו",
"img/25.jpg"
),
new Question("Who is this people?",
[" אלי כהן ", "קובי פרץ ", "עומר אדם "],
"עומר אדם ",
"img/26.jpg"
),
new Question("Who is this people?",
[" יאיר לפיד ", "בנימין נתניהו", "אהוד ברק "],
"יאיר לפיד ",
"img/27.jpg"
),
new Question("Who is this people?",
[" מירי מסיקה ", "מירי נבו ", "יונית לוי "],
"מירי נבו ",
"img/28.jpg"
),
new Question("Who is this people?",
[" נינט טייב ", "מירי מסיקה ", "שירי מימון "],
"שירי מימון ",
"img/29.jpg"
),
new Question("Who is this people?",
[" איילת שקד ", "שרה נתניהו", "ורה ויצמן "],
"שרה נתניהו ",
"img/30.jpg"
)

]

if(sessionStorage.getItem("usersChoise") === "Flag")
{
    var quiz = new Quiz(flag);
}
if(sessionStorage.getItem("usersChoise") === "Food")
{
    var quiz = new Quiz(food);
}
if(sessionStorage.getItem("usersChoise") === "People")
{
    var quiz = new Quiz(people);
}


populate();

