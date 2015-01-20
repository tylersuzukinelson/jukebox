var parseNote = function (note) {
  var output = {};
  if (note.indexOf('*') >= 0) {
    output['pitch'] = note.substring(0,note.indexOf('*'));
    output['beats'] = parseInt(note.substring(note.indexOf('*') + 1));
  } else {
    output['pitch'] = note;
    output['beats'] = 1;
  }
  return output;
};

var parseSong = function (song) {
  var output = [];
  var notes = song.split(' ');
  for (var i = 0; i < notes.length; i += 1) {
    output.push(parseNote(notes[i]));
  }
  return output;
};

var playOnRepeat = function () {
  var songString = prompt("Please enter a song string");
  return playSong(parseSong(songString), 400, playOnRepeat);
};

playOnRepeat();