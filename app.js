// dependencies from node
const path = require('path');

// dependencies from npm (package.json)
const express = require('express');
const ejs = require('ejs');
const ghAvatar = require('gh-avatar');

// Initialize our app
const app = express();

var avatarURL = 'https://avatars.githubusercontent.com/u/12854015?v=3';

// Initialize our GH avatar
ghAvatar('mateoholman').then(avatar => {
    console.log(avatar);
});

// Set our views directory
app.use(express.static('css'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add a route to our app that renders our index view
app.get('/', function(req, res, next) {
  res.render('index.ejs', {
    avatar: avatarURL,
    greeting: 'Hi, my name is Matthew Holman. I live in Austin, TX and I am a web developer.',
    weapons: {
      title: 'Weapons Mastery',
      items: ['katana', 'sai', 'shoryuken', 'shoe']
    },
    vehicles: {
      title: 'Vehicle Mastery',
      items: ['air ship', 'u-boat', 'roller blades']
    }
  });
});

// Set up our server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
