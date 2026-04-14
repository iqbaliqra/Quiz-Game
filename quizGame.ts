import type { Question } from "./interface/quizGame.ts";
import type { Player } from "./interface/quizGame.ts";
import type { QuizGame } from "./interface/quizGame.ts";
import promptSync from "prompt-sync";
const prompt = promptSync();

const players:Player[] = [];

const questions: Question[] = [
    {
      question: "What is TypeScript?",
      options: [
        "a) A database",
        "b) A programming language built on JavaScript",
        "c) A browser",
        "d) An operating system"
      ],
      answer: "b"
    },
    {
      question: "Which keyword is used to declare a variable?",
      options: ["a) var", "b) let", "c) const", "d) All of these"],
      answer: "d"
    },
    {
      question: "Which symbol is used for optional properties in TypeScript?",
      options: ["a) !", "b) ?", "c) #", "d) &"],
      answer: "b"
    },
    {
      question: "What does 'tsc' do?",
      options: [
        "a) Runs TypeScript directly",
        "b) Converts TypeScript to JavaScript",
        "c) Creates HTML files",
        "d) Debugs code"
      ],
      answer: "b"
    },
    {
      question: "Which of the following is a correct type?",
      options: ["a) string", "b) number", "c) boolean", "d) All of these"],
      answer: "d"
    }
  ];

function addPlayer(name:string):void{
    if(name){
        players.push({
            name,
            score: 0
        });
    }else{
        players.push({
            name: "Unknown User",
            score: 0
        });
    }
}

function playQuizGame(players:Player[],questions:Question[],playerIndex:number):void{
    questions.forEach((question)=>{
        console.log(question.question);
        question.options.forEach((option)=>{
            console.log(option);
        });
        const answer = prompt("Enter the correct option: ");
        if(answer === question.answer){
            players[playerIndex-1]!.score++;
        }else{
            console.log("Incorrect answer");
            console.log("The correct answer is: " + question.answer);
        }
        console.log(players[playerIndex-1]!.name + "Your score is: " + players[playerIndex-1]!.score);
    });
}


console.log("Welcome to the Quiz Game");
console.log("--------------------------------");


while(true){
    console.log("0. Exit");
    console.log("1.Play the Quiz Game");


const choice = prompt("Enter your choice: ")
if(choice==="0"){
   console.log("Exiting the game...");
   break;
   
}
else if(choice==="1"){
    const name = prompt("Enter your name: ");
    addPlayer(name);
    playQuizGame(players,questions,players.length);
}
else{
    console.log("Invalid choice");
    break;
}
}

const quizGame:QuizGame = {
    players,
    questions:questions.length
}

export default quizGame;
