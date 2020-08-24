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

//Q#1
  printAllSongNames: function() {
      let songIds = Object.keys(library.songs)
      // console.log(songIds)
      for (let i = 0; i < songIds.length; i++) {
        console.log(library.songs[songIds[i]].name)
      }
  
    // print the names of all the songs to the console
    
  },


//O#2
  printSongName: function(songID) {
    console.log(library.songs[songID].name);
    
    // print the name of a song when given its ID
  },


//Q#3
  printPlaylistName: function(playlistID) {
    console.log(library.playlists[playlistID].name);
    // Print the name of a playlist when given its ID 
  },


//Q#4
  printAllPlaylistNames: function() {
    const playlistIDs = Object.keys(library.playlists)
    for (let i = 0; i < playlistIDs.length; i++) {
      console.log(library.playlists[playlistIDs[i]].name);
    }
    // Print the nmaes of all the playlists 
  },


//Q#5
  printPlaylistSongs: function(playlistID) {
    // const inTracks = Object.keys(library.playlists)
    for (let i = 0; i < inTracks.length; i++) {
      　let playlistID = library.playlists[inTracks[i]].id.tracks;
        console.log(playlistID);　
        
        // ??? doesn't work ???
    }
    // Print the names of all the songs in whatever playlist id was given
  },


//Q#6
  addSong: function(name, artist, album) {
    let songID = this.generateUid;
    console.log(library.songs[songID]);

    library.songs[songID] = {

      id: songID,
      name: name,
      artist: artist,
      album: album 

    };



    console.log(library.songs[songID]);
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.
  },


//Q#7
  addSongToPlaylist: function(songID, playlistID) {
    // let songID = this.generateUid;
    // let playlistID = this.generateUid;

    //couldn't finish the codes

    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.
  },


//Q#8
  addPlaylist: function(name, arrOfSongs) {
    let playlistID = this.generateUid;
    
    library.playlists[playlistID] = {
      id: playlistID,
      name: name,
      tracks: arrOfSongs
    }

    console.log(library.playlists[playlistID]);
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.
  },





}


library.printAllSongNames()
library.printSongName("s02");
library.printPlaylistName("p01");
library.printAllPlaylistNames();
// library.printPlaylistSongs(playlistID);

library.addSong("Because I got high", "Afroman", "The Good Times");

library.addPlaylist("Money is the root of all evil", ["s01"]);


// console.log(Object.keys(library.name));
// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

