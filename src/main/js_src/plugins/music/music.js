var Tones = {};
/*define tones to resolve to proper enum*/
Tones.lFs = 0;
Tones.G = 1;
Tones.Gs = 2;
Tones.A = 3;
Tones.As = 4;
Tones.B = 5;
Tones.C = 6;
Tones.Cs = 7;
Tones.D = 8;
Tones.Ds = 9;
Tones.E = 10;
Tones.F = 11;
Tones.Fs = 12;
Tones.hG = 13;
Tones.hGs = 14;
Tones.hA = 15;
Tones.hAs = 16;
Tones.hB = 17;
Tones.hC = 18;
Tones.hCs = 19;
Tones.hD = 20;
Tones.hDs = 21;
Tones.hE = 22;
Tones.hF = 23;
Tones.hFs = 24;
/* Tone construtor */
var Tone = function(note) {
   this.note = new org.bukkit.Note(note);
   this.instrument = org.bukkit.Instrument.PIANO;
}

/* tonal mutator methods */
var flatten = function(tone_obj) {
    tone_obj.note = tone_obj.note.flattened();
    return tone_obj;
}

var sharpen = function(tone_obj) {
    tone_obj.note = tone_obj.note.sharped();
    return tone_obj;
}

/*instrument mutators*/
var bass_drum = function(tone_obj) {
    tone_obj.instrument = org.bukkit.Instrument.BASS_DRUM;
    return tone_obj;
}

var piano = function(tone_obj) {
    tone_obj.instrument = org.bukkit.Instrument.PIANO;
    return tone_obj;
}
var bass_guitar = function(tone_obj) {
    tone_obj.instrument = org.bukkit.Instrument.BASS_GUITAR;
    return tone_obj;
}
var snare_drum = function(tone_obj) {
    tone_obj.instrument = org.bukkit.Instrument.SNARE_DRUM;
    return tone_obj;
}
var sticks = function(tone_obj) {
    tone_obj.instrument = org.bukkit.Instrument.STICKS;
    return tone_obj;
}


var rest = "rest";



/* delegation of tune play to Thoughtstem.jar bukkit plugin
 *
 * we do some multithreading for the playing of the tunes so
 * that's why it's in the TS bukkit plugin.
 */




/*
 * more arguments are expected to be given. but they are variable
 * so they are excluded in the function signature
 */
var playTune = function(tempo, player_to_play_to) {
   if (arguments.length < 3) {
       return;
   }
   var TSJAR = __plugin;
   var sequence = TSJAR.newSequence(arguments.length - 2);
   for ( var arg = 2; arg < arguments.length; arg++) {
       if (arguments[arg] instanceof Array) {
           var layer = TSJAR.newLayer(arguments[arg].length);
           for ( var i = 0; i < arguments[arg].length; i++ ) {
              var note_in_arg = arguments[arg][i];
              layer.addNoteSound(TSJAR.newNoteSound(note_in_arg.note,
                                                 note_in_arg.instrument));
           }
           sequence.addLayer(layer);
       } else {
           var layer = TSJAR.newLayer(1);
           if (arguments[arg] != rest)
               layer.addNoteSound(TSJAR.newNoteSound(arguments[arg].note,
                                                 arguments[arg].instrument));
           sequence.addLayer(layer);

       }
   }
   /* now that we have our sequence setup, we can construct the player */
   var tune = TSJAR.newTune(sequence, tempo);
   var tunePlayer = TSJAR.newTunePlayer(tune, player_to_play_to);

   //magic

   tunePlayer.playTune();

}


exports.rest = rest;
/*define global exports*/
exports.flatten = flatten;
exports.sharpen = sharpen;

exports.bass_drum = bass_drum;
exports.bass_guitar = bass_guitar;
exports.piano = piano;
exports.snare_drum = snare_drum;
exports.sticks = sticks;

exports.Tone = Tone;
exports.Tones = Tones;

exports.playTune = playTune;