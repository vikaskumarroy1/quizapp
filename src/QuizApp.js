import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch questions from an API or load from a local data file
    // Example: fetchQuestions();
    const fetchedQuestions = [
      { question: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Madrid', 'Rome'], correctAnswer: 'Paris' },
      { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
      // Add more questions here...
    ];
    // Shuffle the questions array to randomize the order
    const shuffledQuestions = shuffleArray(fetchedQuestions).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      // Increment score if the selected option is correct
      setScore(score + 1);
    }
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h1>Quiz Completed!</h1>
        <h2>Your Score: {score} / 10</h2>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Question {currentQuestionIndex + 1}</h1>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizApp;
