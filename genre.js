const movieData = {
    genre: [
        { title: "The Exorcist", image: "the-exorcist.jpg", link: "the exorcist.html" },
        { title: "Black Swan", image: "black-swan.jpg", link: "black swan.html" },
        { title: "Hereditary", image: "hereditary.jpg", link: "hereditary.html" },
        { title: "The Substance", image: "the-substance.avif", link: "the substance.html" },
        { title: "Parasite", image: "parasite.jpg", link: "parasite.html" },
        { title: "Barbie (2023)", image: "Barbie.jpg", link: "barbie.html" },
        { title: "Red One", image: "red-one.jpg", link: "red one.html" },
        { title: "Sonic The Hedgehog 3", image: "sonic-the-hedgehog.jpg", link: "sonic.html" },
        { title: "Oppenheimer", image: "oppenheimer.jpg", link: "oppenheimer.html" },
        { title: "The Fugitive", image: "the-fugitive.jpg", link: "the fugitive.html" },
        { title: "Carry On", image: "carry-on.jpg", link: "carry on.html" },
        { title: "The Dark Knight", image: "the-darkknight.jpg", link: "the darknight.html" },
        { title: "The Boy And The Heron", image: "the-boy-and-the-heron.jpg", link: "TBATH.html" },
        { title: "Elemental", image: "elemental.jpg", link: "elemental.html" },
        { title: "Spirited Away", image: "Spirited-away.jpg", link: "spirited away.html" },
        { title: "Howl's The Moving Castle", image: "howl-moving-castle.jpg", link: "howls moving castle.html" },
        { title: "The Departed", image: "the-departed.jpg", link: "the departed.html" },
        { title: "Anatomy Of A Fall", image: "anatomy-of-fall.jpg", link: "anatomy of fall.html" },
        { title: "Juror #2", image: "juror.jpg", link: "juror.html" },
        { title: "The Godfather", image: "the-godfather.jpg", link: "the godfather.html" },
        { title: "2001: A Space Odyssey", image: "a-space-odyssey.jpg", link: "a space odyssey.html" },
        { title: "The Truman Show", image: "the-truman-show.jpg", link: "the truman show.html" },
        { title: "Transformers: The Rise of the Beasts", image: "transformers.jpg", link: "transformers.html" },
        { title: "Coco", image: "coco.jpg", link: "coco.html" },
        { title: "Beauty and the Beast", image: "the-beauty-and-the-beast.jpg", link: "beauty and the beast.html" },
        { title: "How to Train Your Dragon: The Hidden World", image: "train-your-dragon.jpg", link: "HTTYD.html" },
        { title: "Wall-E", image: "wall-e.jpg", link: "wall e.html" },
        { title: "The Sound of Music", image: "the-sound-of-music.jpg", link: "the sound of music.html" },
        { title: "The Greatest Showman", image: "the-greatest-showman.jpg", link: "the greatest showman.html" },
        { title: "Trolls", image: "trolls.jpg", link: "trolls.html" },
        { title: "Alvin and the Chipmunks: The Road Chip", image: "alvin-n-the-chipmunk.jpg", link: "ANTC.html" },
        { title: "Forest Gump", image: "forest-gump.jpg", link: "forest gump.html" },
        { title: "Past Lives", image: "past-lives.jpg", link: "past lives.html" },
        { title: "Pride and Prejudice", image: "pride-prejudice.jpg", link: "pride and prejudice.html" },
        { title: "Drawing Closer", image: "drawing-closer.jpg", link: "drawing closer.html" },
        { title: "Gladiator", image: "gladiator.jpg", link: "gladiator.html" },
        { title: "Top Gun: Maverick", image: "top-gun-maverick.jpg", link: "top gun maverick.html" },
        { title: "Rebel Ridge", image: "rebel-ridge.jpg", link: "rebel ridge.html" },
        { title: "Die Hard", image: "die-hard.jpg", link: "die hard.html" },
        { title: "Avatar", image: "avatar.jpg", link: "avatar.html" },
        { title: "The Martian", image: "the-martian.jpg", link: "the martian.html" },
        { title: "Uncharted", image: "uncharted.jpg", link: "uncharted.html" },
        { title: "Pirates of the Caribbean: The Curse of the Black Pearl", image: "pirates-of-caribbean.jpg", link: "pirates of caribbean.html" },
        { title: "Schindler's List", image: "schindler-list.jpg", link: "schindler list.html" },
        { title: "Moneyball", image: "moneyball.jpg", link: "moneyball.html" },
        { title: "Judy", image: "judy.jpg", link: "judy.html" },
        { title: "The Trial of the Chicago 7", image: "the-trial-of-chicago.jpg", link: "the trial of the chicago 7.html" }
    ],
    horror: [
        { title: "The Exorcist", image: "the-exorcist.jpg", link: "the exorcist.html" },
        { title: "Black Swan", image: "black-swan.jpg", link: "black swan.html" },
        { title: "Hereditary", image: "hereditary.jpg", link: "hereditary.html" },
        { title: "The Substance", image: "the-substance.avif", link: "the substance.html" }
    ],
    comedy: [
        { title: "Parasite", image: "parasite.jpg", link: "parasite.html" },
        { title: "Barbie (2023)", image: "Barbie.jpg", link: "barbie.html" },
        { title: "Red One", image: "red-one.jpg", link: "red one.html" },
        { title: "Sonic The Hedgehog 3", image: "sonic-the-hedgehog.jpg", link: "sonic.html" }
    ],
    thriller: [
        { title: "Oppenheimer", image: "oppenheimer.jpg", link: "oppenheimer.html" },
        { title: "The Fugitive", image: "the-fugitive.jpg", link: "the fugitive.html" },
        { title: "Carry On", image: "carry-on.jpg", link: "carry on.html" },
        { title: "The Dark Knight", image: "the-darkknight.jpg", link: "the darknight.html" }
    ],
    animation: [
        { title: "The Boy And The Heron", image: "the-boy-and-the-heron.jpg", link: "TBATH.html" },
        { title: "Elemental", image: "elemental.jpg", link: "elemental.html" },
        { title: "Spirited Away", image: "Spirited-away.jpg", link: "spirited away.html" },
        { title: "Howl's The Moving Castle", image: "howl-moving-castle.jpg", link: "howls moving castle.html" },
        { title: "Sonic The Hedgehog 3", image: "sonic-the-hedgehog.jpg", link: "sonic.html" },
        { title: "Wall-E", image: "wall-e.jpg", link: "wall e.html" },
        { title: "How to Train Your Dragon: The Hidden World", image: "train-your-dragon.jpg", link: "HTTYD.html" },
        { title: "Beauty and the Beast", image: "the-beauty-and-the-beast.jpg", link: "beauty and the beast.html" }
    ],
    crime: [
        { title: "The Departed", image: "the-departed.jpg", link: "the departed.html" },
        { title: "Anatomy Of A Fall", image: "anatomy-of-fall.jpg", link: "anatomy of fall.html" },
        { title: "Juror #2", image: "juror.jpg", link: "juror.html" },
        { title: "The Godfather", image: "the-godfather.jpg", link: "the godfather.html" }
    ],
    scifi: [
        { title: "2001: A Space Odyssey", image: "a-space-odyssey.jpg", link: "a space odyssey.html" },
        { title: "The Truman Show", image: "the-truman-show.jpg", link: "the truman show.html" },
        { title: "Transformers: The Rise of the Beasts", image: "transformers.jpg", link: "transformers.html" }
    ],
    family: [
        { title: "Coco", image: "coco.jpg", link: "coco.html" },
        { title: "Beauty and the Beast", image: "the-beauty-and-the-beast.jpg", link: "beauty and the beast.html" },
        { title: "How to Train Your Dragon: The Hidden World", image: "train-your-dragon.jpg", link: "HTTYD.html" },
        { title: "Wall-E", image: "wall-e.jpg", link: "wall e.html" },
        { title: "The Boy And The Heron", image: "the-boy-and-the-heron.jpg", link: "TBATH.html" },
        { title: "Elemental", image: "elemental.jpg", link: "elemental.html" },
        { title: "Spirited Away", image: "Spirited-away.jpg", link: "spirited away.html" },
        { title: "Howl's The Moving Castle", image: "howl-moving-castle.jpg", link: "howls moving castle.html" },
        { title: "Sonic The Hedgehog 3", image: "sonic-the-hedgehog.jpg", link: "sonic.html" }
    ],
    musical: [
        { title: "The Sound of Music", image: "the-sound-of-music.jpg", link: "the sound of music.html" },
        { title: "The Greatest Showman", image: "the-greatest-showman.jpg", link: "the greatest showman.html" },
        { title: "Trolls", image: "trolls.jpg", link: "trolls.html" },
        { title: "Alvin and the Chipmunks: The Road Chip", image: "alvin-n-the-chipmunk.jpg", link: "ANTC.html" }
    ],
    romance: [
        { title: "Forest Gump", image: "forest-gump.jpg", link: "forest gump.html" },
        { title: "Past Lives", image: "past-lives.jpg", link: "past lives.html" },
        { title: "Pride and Prejudice", image: "pride-prejudice.jpg", link: "pride and prejudice.html" },
        { title: "Drawing Closer", image: "drawing-closer.jpg", link: "drawing closer.html" }
    ],
    action: [
        { title: "Gladiator", image: "gladiator.jpg", link: "gladiator.html" },
        { title: "Top Gun: Maverick", image: "top-gun-maverick.jpg", link: "top gun maverick.html" },
        { title: "Rebel Ridge", image: "rebel-ridge.jpg", link: "rebel ridge.html" },
        { title: "Die Hard", image: "die-hard.jpg", link: "die hard.html" }
    ],
    adventure: [
        { title: "Avatar: The Way of Water", image: "avatar.jpg", link: "avatar.html" },
        { title: "The Martian", image: "the-martian.jpg", link: "the martian.html" },
        { title: "Uncharted", image: "uncharted.jpg", link: "uncharted.html" },
        { title: "Pirates of the Caribbean: The Curse of the Black Pearl", image: "pirates-of-caribbean.jpg", link: "pirates of caribbean.html" }
    ],
    bibliography: [
        { title: "Schindler's List", image: "schindler-list.jpg", link: "schindler list.html" },
        { title: "Moneyball", image: "moneyball.jpg", link: "moneyball.html" },
        { title: "Judy", image: "judy.jpg", link: "judy.html" },
        { title: "The Trial of the Chicago 7", image: "the-trial-of-chicago.jpg", link: "the trial of the chicago 7.html" }
    ]
};


function changeGenre(genre) {
    // Change the genre title
    document.getElementById("genre-title").textContent = `${genre.charAt(0).toUpperCase() + genre.slice(1)} `;

    // Get the movie data for the selected genre
    const movies = movieData[genre];

    // Clear the current movies in the list
    const movieList = document.getElementById("movies-list");
    movieList.innerHTML = "";

    // Add the new movie posters
    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        
        // Create the anchor tag for linking
        const movieLink = document.createElement("a");
        movieLink.href = movie.link;  // Link to the movie's web page

        movieLink.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;

        // Append the anchor tag (with the movie content) to the movie div
        movieDiv.appendChild(movieLink);
        
        // Add the movie div to the movie list
        movieList.appendChild(movieDiv);
    });
}

// Initialize the page with Action genre on load
changeGenre('genre');


function toggleSidenav() {
    const sidenav = document.querySelector('.sidenav');
    sidenav.style.display = sidenav.style.display === 'none' || sidenav.style.display === '' ? 'block' : 'none';
}
