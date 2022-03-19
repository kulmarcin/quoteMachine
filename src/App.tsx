import { useState } from 'react';
import classes from './App.module.css';

const quotes = [
  [
    'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    'Mother Teresa'
  ],
  [
    'When you reach the end of your rope, tie a knot in it and hang on.',
    'Franklin D. Roosevelt'
  ],
  [
    'Always remember that you are absolutely unique. Just like everyone else.',
    'Margaret Mead'
  ],
  [
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    'Robert Louis Stevenson'
  ],
  [
    'The future belongs to those who believe in the beauty of their dreams.',
    'Eleanor Roosevelt'
  ],
  [
    'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    'Benjamin Franklin'
  ],
  [
    'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
    'Helen Keller'
  ],
  [
    'It is during our darkest moments that we must focus to see the light.',
    'Aristotle'
  ],
  ['Whoever is happy will make others happy too.', 'Anne Frank'],
  [
    'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    'Ralph Waldo Emerson'
  ]
];

function App() {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let [randomNumber, setRandomNumber] = useState(getRandomInt(0, 9));
  let [randomColor, setRandomColor] = useState(
    `rgb(${getRandomInt(0, 150)}, ${getRandomInt(0, 150)}, ${getRandomInt(
      0,
      150
    )})`
  );

  const clickHandler = () => {
    document.getElementById('text')?.classList.add(classes.Animated);
    document.getElementById('author')?.classList.add(classes.Animated);
    setRandomNumber(prevState => {
      let result = getRandomInt(0, 9);
      while (prevState === result) {
        result = getRandomInt(0, 9);
      }

      return (prevState = result);
    });

    setRandomColor(prevState => {
      let result = `rgb(${getRandomInt(0, 150)}, ${getRandomInt(
        0,
        150
      )}, ${getRandomInt(0, 150)})`;
      while (prevState === result) {
        result = `rgb(${getRandomInt(0, 150)}, ${getRandomInt(
          0,
          150
        )}, ${getRandomInt(0, 150)})`;
      }
      return (prevState = result);
    });

    document.getElementById('text')!.onanimationend = () => {
      document.getElementById('text')?.classList.remove(classes.Animated);
    };

    document.getElementById('author')!.onanimationend = () => {
      document.getElementById('author')?.classList.remove(classes.Animated);
    };
  };

  document.body.style.backgroundColor = randomColor;

  return (
    <div className={`${classes.Card}`} id="quote-box">
      <div id="text" className={classes.Text} style={{ color: randomColor }}>
        <h2>
          <i className="fas fa-quote-right" style={{ marginRight: '1rem' }}></i>
          {quotes[randomNumber][0]}
        </h2>
      </div>
      <div
        id="author"
        className={classes.Author}
        style={{ color: randomColor }}
      >
        <p>{quotes[randomNumber][1]}</p>
      </div>
      <div className={classes.Buttons}>
        <button
          id="new-quote"
          className={classes.NewQuote}
          onClick={clickHandler}
          style={{ backgroundColor: randomColor, color: 'white' }}
        >
          New quote
        </button>
        <a
          href={`http://twitter.com/intent/tweet?text=${quotes[randomNumber][0]} - ${quotes[randomNumber][1]}&hashtags=bestquotes`}
          rel="noreferrer"
          target="_blank"
          id="tweet-quote"
          className={classes.TweetQuote}
        >
          <i
            className="fab fa-twitter fa-2x"
            style={{ color: randomColor }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default App;
