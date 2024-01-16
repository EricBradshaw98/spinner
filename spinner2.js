//define array for animation characters

const animationChars = ['\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let index = 0;

const spinAnimation = () => {
  process.stdout.write(animationChars[index]);
  index = (index + 1) % animationChars.length;
};

// start
const intervalId = setInterval(spinAnimation, 200);

// stop after 5000 ms
setTimeout(() => {
  clearInterval(intervalId);
  // move to a new line after stopping the animation
  process.stdout.write('\n');
}, 5000);


// ... fill in the rest yourself ...