let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  printAllSongNames: function() {
      let songIds = Object.keys(library.songs)
      // console.log(songIds)
      for (let i = 0; i < songIds.length; i++) {
        console.log(library.songs[songIds[i]].name)
      }
  
    // print the names of all the songs to the console
    
  },

  printSongName: function(songID) {
    console.log(library.songs[songID].name);
    
    // print the name of a song when given its ID
  },

  printPlaylistName: function(playlistID) {
    console.log(library.playlists[playlistID].name);
    // Print the name of a playlist when given its ID 
  },

  printAllPlaylistNames: function() {
    const playlistIDs = Object.keys(library.playlists)
    for (let i = 0; i < playlistIDs.length; i++) {
      console.log(library.playlists[playlistIDs[i]].name);
    }
    // Print the nmaes of all the playlists 
  },


  printPlaylistSongs: function(playlistID) {
    const inTracks = Object.keys(library.playlists)
    
    console.log(library.playlists[playlistID].name.tracks[]);
    // Print the names of all the songs in whatever playlist id was given
  },

  addSong: function(name, artist, album) {
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.
  },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.
  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.
  },





}


// library.printAllSongNames()
// library.printSongName("s02");
// library.printPlaylistName("p01");
// library.printAllPlaylistNames();
library.printPlaylistSongs(playlistID);
// library.printAllSongNames();




// console.log(Object.keys(library.name));
// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

