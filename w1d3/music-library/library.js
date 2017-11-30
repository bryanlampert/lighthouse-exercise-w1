var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlistList = library.playlists;
  for (var plName in playlistList) {
    var playlistInfo = playlistList[plName];
    var trackCount = playlistInfo.tracks.length;
    console.log(playlistInfo.id + ": " + playlistInfo.name + " - " + trackCount + " tracks");
  }
};

printPlaylists();

console.log("***********");
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var trackList = library.tracks;
    for (var trName in trackList) {
      var trackInfo = trackList[trName];
      console.log(trackInfo.id + ": " + trackInfo.name + " by " + trackInfo.artist + " (" + trackInfo.album + ")");
    }
};

printTracks();

console.log("***********");
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var selPlaylist = library.playlists[playlistId];
  var trackCount = library.playlists[playlistId].tracks.length;
  var plTracks = library.playlists[playlistId].tracks;
  var selTrack = library.tracks;

  console.log(selPlaylist.id + ": " + selPlaylist.name + " - " + trackCount + " tracks");

  for (i = 0; i < plTracks.length; i++) {
    for (var trName in selTrack){
      var trackInfo = selTrack[trName];
      if (plTracks[i] == trackInfo.id) {
        console.log(trackInfo.id + ": " + trackInfo.name + " by " + trackInfo.artist + " (" + trackInfo.album + ")");
      }
    }
  }
};

printPlaylist('p02');

console.log("***********");
// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var plAddTrackPl = library.playlists[playlistId];
  var trAddTrackPl = library.tracks[trackId];
  var plTrackArr = plAddTrackPl.tracks;

  for (var j = 0; j < plTrackArr.length; j++) {
    if (trAddTrackPl.id === plTrackArr[j]) {
      console.log("The track is already in the playlist!");
      return;
    } else {
      plTrackArr.push(trAddTrackPl.id);
      return;
    }
  }

};

addTrackToPlaylist('t02', 'p02');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

var addTrack = function (name, artist, album) {

  var addTrackId = uid();
  var trAddTrack = library.tracks;
  var trackNum = uid().toString();

  trAddTrack[trackNum] = {id: addTrackId, name, artist, album};

};

addTrack('Sandstorm', 'Darude', 'Before the Storm');


// adds a playlist to the library

var addPlaylist = function (name) {

  var addPlaylistId = uid();
  var addPlaylistNum = uid().toString();
  var plAddPlaylist = library.playlists;

  plAddPlaylist[addPlaylistNum] = {id: addPlaylistId, name, tracks: ["t01", "t02"]};


};

addPlaylist('Best Hits');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

  var queryInput = query.toString().toLowerCase();
  var searchResults = [];
  var trackIds = library.tracks;
  for (var trList in trackIds) {
    var currentTrack = trackIds[trList];
    var currentTrackDetails = JSON.stringify(currentTrack);
    var trackSearch = (currentTrackDetails).toLowerCase();
    var srch = trackSearch.search(queryInput);

    if (srch >= 0) {
      searchResults.push(queryInput);
      console.log("The query " + queryInput +
        " was found in the name, artist or album of the following track: " +
         currentTrack.name);
    }

  }

};

printSearchResults('th');
