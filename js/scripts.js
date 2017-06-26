var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];


function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.entryArray = [];
}

Entry.prototype.letterCount = function(input) {
  return input.split(" ").length;
}

Entry.prototype.wordCount = function(input2) {
  return input2.split(" ").length;
}

Entry.prototype.vowelCount = function(vowel) {
  if ( {
    alert("foff");
  }
}

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var title = $(".title").val();
    var body = $(".body").val();
    var newEntry = new Entry(title, body);
    var newerEntry = newEntry.letterCount(title);
    var newestEntry = newEntry.wordCount(body);
    var vowelCounter = newEntry.vowelCount(title, body);

    $('.title-output').append('<li>' + newerEntry + '</li>');
    $('.body-output').append('<li>' + newestEntry + '</li>');
    console.log(newestEntry);
    $('.vowel-output').append('<li>' + vowelCounter + '</li>');
  })

})
