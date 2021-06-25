export default function game() {
    const min = 1;
    const max = 20;
    const num = Math.ceil(Math.random() * (max - min)) + min;
    let result = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
    let correctAnswer = "";
    let question = "Question: ";
    const assigment = 'Answer "yes" if the number is even, otherwise answer "no".';

    const game = () => {
        for (let i = 1; i < 4; i++) {
            if (num % 2 === 0 && answer === "yes" || num % 2 != 0 && answer === "no") {
                result = "Correct!";

            } else {
                correctAnswer = "yes";
                result = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
            }
        }
    }
}