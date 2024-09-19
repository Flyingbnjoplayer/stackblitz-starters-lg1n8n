//embedded picture galery start
document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  const pageNumber = document.getElementById('pageNumber');
  const gallery = document.querySelector('.gallery');
  const linkForm = document.getElementById('linkForm');
  const imageLink = document.getElementById('imageLink');
  const password = document.getElementById('password');
  let currentPage = 1;
    
    // Voeg hier je embedded links toe
  const images = [
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

//document.addEventListener('DOMContentLoaded', function() {
  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      updateGallery();
    }
  });
;
  nextBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      updateGallery();
    }
  });
//});
});
  linkForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (password.value === 'Nattekrentenb0l!') {
      const newLink = imageLink.value;
      images.push(newLink);
      updateGallery();
      imageLink.value = '';
      password.value = '';
    } else {
      alert('Incorrect wachtwoord!');
    }
  });

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

  updateGallery();
;


document.addEventListener('DOMContentLoaded', () => {
  const iframes = document.querySelectorAll('iframe');
  let currentIframeIndex = 0;

  const showIframe = (index) => {
    iframes.forEach((iframe, i) => {
      iframe.classList.toggle('active', i === index);
    });
  };

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIframeIndex = (currentIframeIndex - 1 + iframes.length) % iframes.length;
    showIframe(currentIframeIndex);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIframeIndex = (currentIframeIndex + 1) % iframes.length;
    showIframe(currentIframeIndex);
  });
});
  showIframe(currentIframeIndex);
;
//embedded picture galery end

//embedded audio container start
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');
    let currentIframeIndex = 0;
 
    const showIframe = (index) => {
      iframes.forEach((iframe, i) => {
        iframe.classList.toggle('active', i === index);
      });
    };
 
    document.getElementById('prevBut').addEventListener('click', () => {
      currentIframeIndex = (currentIframeIndex - 1 + iframes.length) % iframes.length;
      showIframe(currentIframeIndex);
    });
 
    document.getElementById('nextBut').addEventListener('click', () => {
      currentIframeIndex = (currentIframeIndex + 1) % iframes.length;
      showIframe(currentIframeIndex);
    });
 
    showIframe(currentIframeIndex);
  });

  //embedded audio container end