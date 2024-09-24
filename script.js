// Embedded picture gallery start
window.onload = function() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const linkForm = document.getElementById('linkForm');
  const imageLink = document.getElementById('imageLink');
  const imageLink2 = document.getElementById('imageLink2');
  const imageLink3 = document.getElementById('imageLink3');
  const password = document.getElementById('password');
  const removButn = document.getElementById('removButn');
  const pageNumber = document.getElementById('pageNumber');
  const gallery = document.querySelector('.gallery');
  let currentPage = 1;

  // Haal de opgeslagen afbeeldingen op uit localStorage of gebruik de standaard array
  const storedImages = JSON.parse(localStorage.getItem('images'));
  const images = storedImages || [
      'https://drive.google.com/thumbnail?id=18ajEqoUA6xd42qWaHAYXYPapU6RUSGcD&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=12Y64kDz66CJ5wrCu0w1NkzRHY4LjT7PU&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=16gsjSiwZb3dKBtsGdiatS8R94nT2kN94&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1Cg2XZ1RAXZjW6zAfZWy7-j3GZbFqs5Ud&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1NSCTnJm9LAOYA5uTpPRizerVskaiyXFC&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1OsFnF07jKr1vuN3qhSvlIeqX2ALduaOQ&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1PJUnbDi_4AyLurGgNzOJ2It9blLDYNhC&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1SUltEzN7Lbv4mxxQBWSRltP1tVBzKyac&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1KTQOLbit7Q_czRwOdCRUncjNdB_F25U-&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1MCPFrWmM-z7NUcjTDtO5TpPkpd_nDQtP&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1VrtklCgRayLsCH0T-w7VpNgpM95V7UrV&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1bpSqH7NJtMaDB8pGpiMdSRjNRt5b4hI-&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1gdA7VrzKlDU0OAF_OQmYTdKXEWuZW3HF&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1gvUhZCoJ6Exwp-DCx0hKB367UpSNmFFp&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1h1CddLnWJOM2yoNANiDvOInOWrp3za22&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1h26ox5xEmh5Qel6hqtKPp5h8ju_TTS7k&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1h2yQUS6VK3G8y7K2EysRhZ1JSbgXK6wS&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1h7dWhpVvKt1oDQVoZpejMgzgdn3203k2&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1iFNLlcPd8i9XHAOyzt0hF55ohtn31lXE&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1mGMFBx26wIKn4nUXxlEW51-17TDz_g2o&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1q2ov8cJWWrjKCiJv_zcmuhbaI4tS0Ygt&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1xb-121ZGhFMptVdVSLbR353UevlGxhV3&sz=w-h.jpg',
      'https://drive.google.com/thumbnail?id=1ykthhB-3VFO0_abZvCZBecnyMCPNACxQ&sz=w-h.jpg'
      //'',
      // Voeg meer links toe als je wilt & vergeet niet de komma na de laatste link te verwijderen
    // Voeg hier meer links toe    
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Event listener voor de vorige knop
  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      updateGallery();
    }
  });

  // Event listener voor de volgende knop
  nextBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      updateGallery();
    }
  });

  // Functie om een nieuwe link toe te voegen
  function addLink(newLink) {
    if (newLink && !images.includes(newLink)) {
      images.push(newLink);
      console.log('Afbeelding toegevoegd:', newLink);
      localStorage.setItem('images', JSON.stringify(images)); // Sla de bijgewerkte array op in localStorage
      console.log('Opgeslagen afbeeldingen:', JSON.parse(localStorage.getItem('images')));
      updateGallery();
      alert('Afbeelding toegevoegd');
    } else if (images.includes(newLink)) {
      alert('url reeds toegevoegd');
    }
  }

  // Event listener voor het formulier om nieuwe links toe te voegen
  linkForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (password.value === '1312') {
      addLink(imageLink.value);
      addLink(imageLink2.value);
      addLink(imageLink3.value);
      imageLink.value = '';
      imageLink2.value = '';
      imageLink3.value = '';
      password.value = '';
    } else {
      alert('Incorrect wachtwoord!');
    }
  });

  // Functie om een link te verwijderen
  function removeLink(linkToRemove) {
    const index = images.indexOf(linkToRemove);
    if (index !== -1) {
      images.splice(index, 1);
      console.log('Afbeelding verwijderd:', linkToRemove);
      localStorage.setItem('images', JSON.stringify(images)); // Sla de bijgewerkte array op in localStorage
      console.log('Opgeslagen afbeeldingen:', JSON.parse(localStorage.getItem('images')));
      updateGallery();
      alert('Afbeelding verwijderd');
    } else {
      alert('Link niet gevonden!');
    }
  }

  // Event listener voor de "Verwijderen" knop
  removButn.addEventListener('click', function(event) {
    event.preventDefault();
    if (password.value === '1312') {
      removeLink(imageLink.value);
      removeLink(imageLink2.value);
      removeLink(imageLink3.value);
      imageLink.value = '';
      imageLink2.value = '';
      imageLink3.value = '';
      password.value = '';
    } else {
      alert('Incorrect wachtwoord!');
    }
  });

  // Functie om de galerij bij te werken
  function updateGallery() {
    gallery.innerHTML = '';
    pageNumber.textContent = currentPage;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentImages = images.slice(start, end);

    currentImages.forEach(src => {
      const div = document.createElement('div');
      div.classList.add('thumbnail');
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Afbeelding';
      div.appendChild(img);
      gallery.appendChild(div);
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  // Initialiseer de galerij bij het laden van de pagina
  updateGallery();
};

// Embedded audio container start
document.addEventListener('DOMContentLoaded', () => {
  const iframes = document.querySelectorAll('iframe');
  let currentIframeIndex = 0;

  // Functie om de juiste iframe te tonen
  const showIframe = (index) => {
    iframes.forEach((iframe, i) => {
      iframe.classList.toggle('active', i === index);
    });
  };

  // Event listener voor de vorige knop
  document.getElementById('prevBut').addEventListener('click', () => {
    currentIframeIndex = (currentIframeIndex - 1 + iframes.length) % iframes.length;
    showIframe(currentIframeIndex);
  });

  // Event listener voor de volgende knop
  document.getElementById('nextBut').addEventListener('click', () => {
    currentIframeIndex = (currentIframeIndex + 1) % iframes.length;
    showIframe(currentIframeIndex);
  });

  // Initialiseer de eerste iframe bij het laden van de pagina
  showIframe(currentIframeIndex);
});
//audio container end