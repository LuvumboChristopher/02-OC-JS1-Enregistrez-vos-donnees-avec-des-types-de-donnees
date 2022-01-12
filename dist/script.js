let episodeTitle = 'The Last Man Standing';
let episodeDuration = 50;
let hasBeenWatched = true;

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`