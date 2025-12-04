// House on Fire - Fun & Eclectic House Music Event Recommendations

const parties = [
  {
    title: "Disco Inferno",
    city: "New York",
    start: "2025-12-10 22:00",
    artists: ["DJ Blaze", "Funky Frank"],
    genres: ["Disco House", "Deep House"],
    rating: 4.8,
    reviews: ["Best night ever!", "The crowd was on fire 🔥"]
  },
  {
    title: "Tech House Takeover",
    city: "Chicago",
    start: "2025-12-12 21:00",
    artists: ["Techno Tina", "Groove Guru"],
    genres: ["Tech House"],
    rating: 4.5,
    reviews: ["Amazing energy!", "Loved the visuals."]
  },
  {
    title: "Afro House Vibes",
    city: "Miami",
    start: "2025-12-15 20:00",
    artists: ["Afro Al", "Sunset Sam"],
    genres: ["Afro House"],
    rating: 4.9,
    reviews: ["Unforgettable rhythms!", "Danced all night."]
  }
];

const cities = [...new Set(parties.map(p => p.city))];

function renderNav() {
  const nav = document.createElement('nav');
  cities.forEach(city => {
    const btn = document.createElement('button');
    btn.textContent = city;
    btn.onclick = () => renderParties(city);
    nav.appendChild(btn);
  });
  return nav;
}

function renderParties(city) {
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(renderHeader());
  root.appendChild(renderNav());

  const main = document.createElement('div');
  main.className = 'main-content';

  const filtered = parties.filter(p => p.city === city);
  if (filtered.length === 0) {
    main.innerHTML = `<p>No parties found in ${city}.</p>`;
  } else {
    filtered.forEach(party => {
      main.appendChild(renderPartyCard(party));
    });
  }
  root.appendChild(main);
}

function renderPartyCard(party) {
  const card = document.createElement('div');
  card.className = 'party-card';

  card.innerHTML = `
    <div class="party-title">${party.title}</div>
    <div class="party-details">
      <span>City: ${party.city}</span> | 
      <span>Start: ${party.start}</span>
    </div>
    <div><span class="artist">Artists:</span> ${party.artists.join(', ')}</div>
    <div><span class="genre">Genres:</span> ${party.genres.join(', ')}</div>
    <div class="rating">Rating: ${party.rating} ⭐</div>
    <div class="review">"${party.reviews[Math.floor(Math.random() * party.reviews.length)]}"</div>
  `;
  return card;
}

function renderHeader() {
  const header = document.createElement('header');
  header.textContent = '🔥 House on Fire 🔥';
  return header;
}

function renderHome() {
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(renderHeader());
  root.appendChild(renderNav());

  const main = document.createElement('div');
  main.className = 'main-content';
  main.innerHTML = `
    <h2>Welcome to House on Fire!</h2>
    <p>Discover the hottest house music parties in your city. Browse events, check ratings, and read reviews from fellow party-goers. Click a city to get started!</p>
    <ul>
      <li>Curated house music events</li>
      <li>Mobile-friendly & fun design</li>
      <li>Ratings & reviews</li>
      <li>Artist & genre info</li>
    </ul>
  `;
  root.appendChild(main);
}

window.onload = renderHome;
