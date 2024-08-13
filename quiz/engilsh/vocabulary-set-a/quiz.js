import React, {
useRef,
useState,
useEffect } from
"https://cdn.skypack.dev/react";
import { render } from "https://cdn.skypack.dev/react-dom";

import gsap from "https://cdn.skypack.dev/gsap";

const questions = [
{
  id: 0,
  text: "The meaning of the word 'obese'is?",
  answers: [
  "very fat",
  "ugly",
  "tardy",
  "obnoxious"],

  correct: 0,
  selection: null },

{
  id: 1,
  text:
  "What does the word 'obese' means?",
  answers: ["Fat",
  "Slim",
  "Healthy",
  "Emaciated"],
  correct: 0,
  selection: null },

{
  id: 2,
  text: "The antonym of 'obesity' is?",
  answers: ["very fat", "tall", "short", "thin"],
  correct: 3,
  selection: null },

{
  id: 3,
  text: "Antonym of the word 'obese':is?",
  answers: ["thin", "tubby", "plump", "portly"],
  correct: 0,
  selection: null },

{
  id: 4,
  text: "What is the synonym of 'Queer'?",
  answers: ["Integrated", "Orderly", "Abnormal", "Urgent", "Old"],
  correct: 2,
  selection: null },

{
  id: 5,
  text: "What is the Anotym of 'Queer'?",
  answers: ["Integrated", "Orderly", "Abnormal", "Odd"],
  correct: 1,
  selection: null },

{
  id: 6,
  text:
  "Synonym of 'equivocial'?",
  answers: ["obstacle", "illusory", "indolent", "ambiguous"],
  correct: 3,
  selection: null },

{
  id: 7,
  text: "What is the antonym of 'equivocal'?",
  answers: ["mistaken", "azure", "quiet", "clear"],
  correct: 3,
  selection: null },

{
  id: 8,
  text:
  "The speaker gave vague Answer to the questions to the teachers.",
  answers: ["complimentary", "clear", "careful", "cautious", "unique"],
  correct: 1,
  selection: null },

{
  id: 9,
  text: "Choose the correct antonym for 'vague'?",
  answers: [
  "imprecise",
  "arguable",
  "equivocial",
  "definite"],

  correct: 3,
  selection: null },
  
  {
  id: 10 ,
  text: " The antonym of 'vague'              ?",
  answers: [
  "    imperfect           ",
  "      well defined         ",
  "       expressive        ",
  "       distinct       "],

  correct:   1   ,
  selection: null },
  
    {
    id: 11,
    text: "  What is the synonym of 'vague'                   ?",
    answers: [
  "    specific           ",
  "   clear            ",
  "    transparent           ",
  "       indefinite        "],

    correct: 3,
    selection: null
  },
    {
    id: 12,
    text: "   Choose the correct antonym for 'Vague'                ?",
    answers: [
  "    unclear           ",
  "     clear          ",
  "     indefinite          ",
  "      confusing         "],

    correct: 1,
    selection: null
  },
    {
    id: 13,
    text: "   The chairman's impromptu remarks caused his political party much embarrassment, the word 'impromptu' means            ?",
    answers: [
  "     unrehearsed          ",
  "    forceful           ",
  "    unrestrained           ",
  "     absurd          "],

    correct:0 ,
    selection: null
  },
    {
    id: 14,
    text: "       The synonym of 'impromptu' is              ?",
    answers: [
  "    extrempore           ",
  "      prepared         ",
  "     improper          ",
  "     direct          "],

    correct: 0 ,
    selection: null
  },

  
     {
    id: 15,
    text: "     Give the antonym of impromptu                ?",
    answers: [
  "   extrempore            ",
  "   spontaneous            ",
  "    rehearsed           ",
  "    neutral           "],

    correct: 2 ,
    selection: null
  },
    {
    id: 16,
    text: "       Extrempore synonym is              ?",
    answers: [
  "    Planned           ",
  "     Improvise          ",
  "      Impromptu         ",
  "       Immediate        "],

    correct: 2 ,
    selection: null
  },
    {
    id: 17,
    text: "   An antonym of 'extrempore' is                   ?",
    answers: [
  "     prompt          ",
  "     immediate          ",
  "    spontaneous           ",
  "      prepared         "],

    correct: 3,
    selection: null
  },
    {
    id: 18 ,
    text: "   What is the opposite word 'anarchy'                  ?",
    answers: [
  "   confusion            ",
  "    order           ",
  "    honesty          ",
  "     poverty          "],

    correct: 1,
    selection: null
  },
    {
    id: 19 ,
    text: "    What is antonym of 'Anarchy'                  ?",
    answers: [
  "    Unrest           ",
  "    Instability           ",
  "      Peace         ",
  "      Lawlessness         "],

    correct:2 ,
    selection: null
  },
    {
    id:20 ,
    text: "  The antonym of 'chaos'                    ?",
    answers: [
  "    system           ",
  "     order          ",
  "     discipline          ",
  "               "],

    correct: 1,
    selection: null
  },
    {
    id: 21,
    text: "    The synonym of the word 'Anarchy' is                 ?",
    answers: [
  "      lawlessness         ",
  "      order         ",
  "     discipline          ",
  "      democracy       "],

    correct: 1 ,
    selection: null
  },

    {
    id: 22,
    text: "   Termination means                  ?",
    answers: [
  "    to start           ",
  "     to end          ",
  "      to begin         ",
  "         to continue      "],

    correct: 1,
    selection: null
  },
    {
    id: 23,
    text: "    The synonym of 'terminate' is                 ?",
    answers: [
  "     end          ",
  "       modification       ",
  "       cultivation        ",
  "          activation     "],

    correct: 0,
    selection: null
  },
    {
    id: 24,
    text: "  The opposite of 'terminate' is                   ?",
    answers: [
  "    depart           ",
  "    prevent           ",
  "     begin          ",
  "    change           "],

    correct: 2,
    selection: null
  }, 
      {
    id: 25,
    text: "  Antonym of 'Optimist' is                   ?",
    answers: [
  "    Fundamentalist          ",
  "      Idealist         ",
  "       Activist        ",
  "       Pessimist        "],

    correct: 3,
    selection: null
  },
    {
    id: 26 ,
    text: "    Synonym of 'optimist' is                 ?",
    answers: [
  "   Despair            ",
  "    Hopeful           ",
  "      Pessimist         ",
  "      Change         "],

    correct:1 ,
    selection: null
  },
    {
    id: 27,
    text: "    Which one is the antonym of 'pessimist'                 ?",
    answers: [
  "   believer            ",
  "   pious            ",
  "    honest           ",
  "     optimist          "],

    correct: 3 ,
    selection: null
  },
   
   
       {
    id: 28,
    text: "  Find the synonym if 'Hostile'                 ?",
    answers: [
  "  Fussy             ",
  "  Dreadful             ",
  "   Antagonist            ",
  "   Amicable            "],

    correct: 2,
    selection: null
  },
    {
    id: 29,
    text: "    The antonym of the word 'hostile'               ?",
    answers: [
  "     indifferent          ",
  "     friendly          ",
  "     rude          ",
  "    inimical          "],

    correct:1 ,
    selection: null
  },
    {
    id: 30 ,
    text: "   The Antonym of 'Hostile'               ?",
    answers: [
  "    Friendly        ",
  "     Cruel          ",
  "     Dangerous          ",
  "     Alarming         "],

    correct: 0,
    selection: null
  },
  
  

  
  
 /*
  
  
  
  
  
  
      {
    id: ,
    text: "                      ?",
    answers: [
  "               ",
  "               ",
  "               ",
  "               "],

    correct: ,
    selection: null
  },
    {
    id: ,
    text: "                      ?",
    answers: [
  "               ",
  "               ",
  "               ",
  "               "],

    correct: ,
    selection: null
  },
    {
    id: ,
    text: "                      ?",
    answers: [
  "               ",
  "               ",
  "               ",
  "               "],

    correct: ,
    selection: null
  },
  
  
  */
  
  
  ]; 
  



function useCounter(initialState) {
  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);

  const add = () => setValue(value => value += 1);

  return { value, add, reset };
}

function Question({
  data,
  buttonText,
  hasButton = true,
  onQuestionButtonClick,
  showAnswer = false,
  markSelection = null })
{
  const [answer, setAnswer] = useState(null);
  const parseValue = value => value ? parseInt(value.split("-")[1]) : null;
  const questionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
    questionRef.current.querySelector(".question-text"),
    {
      x: 40,
      opacity: 0 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4 });


    gsap.fromTo(
    questionRef.current.querySelectorAll("li"),
    {
      opacity: 0,
      x: 40 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1 });


  }, [data]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "question", ref: questionRef }, /*#__PURE__*/
    React.createElement("div", { className: "question-inner" }, /*#__PURE__*/
    React.createElement("h2", { className: "question-text" }, data.text), /*#__PURE__*/
    React.createElement("ul", { className: "question-answers" },
    data.answers.map((text, index) => {
      const value = `q${data.id}-${index}`;
      return /*#__PURE__*/(
        React.createElement("li", {
          className:
          index === data.correct && showAnswer ? "is-true" : "",

          "data-selected": markSelection === index ? true : null }, /*#__PURE__*/

        React.createElement("input", {
          type: "radio",
          name: `q_${data.id}`,
          value: value,
          id: value,
          onChange: e => setAnswer(e.target.value),
          checked:
          !showAnswer ? answer === value : markSelection === index }), /*#__PURE__*/


        React.createElement("label", { className: "question-answer", htmlFor: value },
        text)));



    }))),


    hasButton && /*#__PURE__*/
    React.createElement("button", {
      className: "question-button",
      onClick: () => onQuestionButtonClick(parseValue(answer), data) },

    buttonText)));




}

function Results({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "result" }, /*#__PURE__*/
    React.createElement("div", { className: "result-item is-correct" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, correct), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /*#__PURE__*/
    React.createElement("path", { d: "M22 4L12 14.01 9 11.01" })), "Correct")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-wrong" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, wrong), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M15 9L9 15" }), /*#__PURE__*/
    React.createElement("path", { d: "M9 9L15 15" })), "Wrong")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-empty" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, empty), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M8 12L16 12" })), "Skipped"))));






}

function QuestionCorrection({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "correction" },
    questions.map(question => {
      return /*#__PURE__*/(
        React.createElement(Question, {
          hasButton: false,
          markSelection: question.selection,
          showAnswer: true,
          data: question }));


    })));


}

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameSize, setGameSize] = useState({});
  const totalQuestion = questions.length - 1;
  const gameRef = useRef(null);
  const gameOverlayRef = useRef(null);

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  const handleNewQuestionClick = (selectedValue, currQuestion) => {
    if (totalQuestion >= question.value) {
      if (selectedValue === currQuestion.correct) {
        correct.add();
      } else if (
      selectedValue !== null &&
      selectedValue !== currQuestion.correct)
      {
        wrong.add();
      } else {
        empty.add();
      }
      questions[currQuestion.id].selection = selectedValue;
      question.add();
    }
  };

  const resetSelection = () => {
    questions.forEach(q => q.selection = null);
  };

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  const indicatorBg = index => {
    if (question.value > index) {
      return "#fff";
    } else if (question.value === index) {
      return "#29b5d5";
    } else {
      return "rgba(255,255,255,.2)";
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  useEffect(() => {
    if (question.value > totalQuestion) {
      gameRef.current.scrollTop = 0;
    }
  }, [question.value]);

  return /*#__PURE__*/(
    React.createElement("div", {
      className: "game",
      ref: gameRef,
      "data-game-started": gameStarted ? true : null,
      "data-game-finished": question.value > totalQuestion ? true : null }, /*#__PURE__*/

    React.createElement("div", { className: "intro" }, /*#__PURE__*/
    React.createElement("div", { className: "intro-inner" }, /*#__PURE__*/
    React.createElement("h1", { className: "intro-title" }, "SABAS Quiz"),
    !gameStarted && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("p", { className: "intro-desc" },
    `📚Topics: Vocabulary [Master 101-200]
    
    ♻️Number of Quiz: ${questions.length}.
    
   💎 Criteria: No Negative Mark.
    `), /*#__PURE__*/


    React.createElement("button", {
      className: "intro-button",
      onClick: () => setGameStarted(true) }, "Start Quiz")),





    gameStarted && /*#__PURE__*/
    React.createElement("div", { className: "indicator" },
    questions.map((q, index) => {
      return /*#__PURE__*/(
        React.createElement("span", {
          className: "indicator-item",
          style: {
            backgroundColor: indicatorBg(index) } }));



    })), /*#__PURE__*/


    React.createElement(Results, {
      wrong: wrong.value,
      correct: correct.value,
      empty: empty.value }), /*#__PURE__*/

    React.createElement("button", {
      className: "restart-button",
      onClick: () => handleRestartClick() }, "Restart Quiz"))), /*#__PURE__*/





    React.createElement("div", { className: "game-area" },
    questions[question.value] && /*#__PURE__*/
    React.createElement(Question, {
      data: questions[question.value],
      buttonText:
      question.value !== totalQuestion ? "Next Question" : "Finish Quiz",

      onQuestionButtonClick: handleNewQuestionClick }),



    !questions[question.value] && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(QuestionCorrection, { data: questions })))));





}

render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));