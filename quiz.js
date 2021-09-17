function quizzer(){
    var questions =[
        {
            question: "What is my dog's name?\n            (a) Fido\n\
            (b) Maggie\n            (c) Spot",
            answer: "b"
        },
        {
            question: "What is 2+2?\n            (a) 4\n\
            (b) 5\n            (c) 3",
            answer: "a"
        },
        {
            question: "Why did the chicken cross the road?\n            (a) Because he wanted takeout\n\
            (b) Because 7 ate 9\n            (c) To get to the other side",
            answer: "c"
        },
        {
            question: "What is my name?\n            (a) Anthony\n\
            (b) John\n            (c) Joe",
            answer: "a"
        },
        {
            question: "What is 4x9?\n            (a) 32\n\
            (b) 35\n            (c) 36",
            answer: "c"
        },

    ]
    var score = 0;
    for(var i = 0; i<questions.length; i++){
        var response = window.prompt(questions[i].question);
        if (response == questions[i].answer){
            score++;
            alert("Thats right!");
        }
        else{
            alert("You're incorrect!");
        }
    }
    alert("You scored " + score + "/5")
}