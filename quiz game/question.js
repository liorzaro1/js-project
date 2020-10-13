function Question(text, choices, answer,img) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.img = img;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}