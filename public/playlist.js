let songs = ["Purple Haze", "Hey Joe", "Little Wing", "Voodoo Child"];

function updateSongList() {
    const ul = document.getElementById("songList");
    ul.innerHTML = "";
    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        ul.appendChild(li);
    });
}

updateSongList();

document.getElementById("addSongBtn").addEventListener("click", function() {
    const input = document.getElementById("songInput");
    const newSong = input.value.trim();

    if (newSong !== "") {
        songs.push(newSong);
        updateSongList();
        input.value = "";
    }
});

document.getElementById("shuffleBtn").addEventListener("click", function() {
    songs.sort(() => Math.random() - 0.5);
    updateSongList();
});

function updateSongList() {
  const ul = document.getElementById("songList");
  ul.innerHTML = "";

  songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;

    // efecto al hacer click: marcar como "playing"
    li.addEventListener("click", () => {
      document.querySelectorAll("#songList li").forEach(item =>
        item.classList.remove("playing")
      );
      li.classList.add("playing");
    });

    ul.appendChild(li);
  });
}