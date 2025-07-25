const customName = document.getElementById('customName');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const insertX = ['a giant monkey', 'a dancing cat', 'a silly robot'];
const insertY = ['the beach', 'the moon', 'a haunted castle'];
const insertZ = ['ate a taco', 'sang a song', 'did a backflip'];

const storyText = 'It was a sunny day, and :insertX: went to :insertY: and :insertZ:. Everyone laughed!';

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertX:', xItem);
  newStory = newStory.replace(':insertY:', yItem);
  newStory = newStory.replace(':insertZ:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Everyone', name);
  }

  story.textContent = newStory;
  story.classList.add('fade-in');
  setTimeout(() => story.classList.remove('fade-in'), 1000);
}

randomize.addEventListener('click', result);
