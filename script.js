//embedded picture galery start
document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageNumber = document.getElementById('pageNumber');
  const gallery = document.querySelector('.gallery');
  let currentPage = 1;

  // Voeg hier je embedded links toe
  const images = [
      'https://drive.google.com/thumbnail?id=18ajEqoUA6xd42qWaHAYXYPapU6RUSGcD&sz=w-h.jpg',
      'https://drive.google.com/file/d/1-Wgjup67vX9ntoOOvqMpZWzZ4Li1yL-Z/view?usp=sharing.png',
      'https://drive.google.com/file/d/1-RLHEV2dNijkRh5Si_Cu8Qu03VJkp3aY/view?usp=sharing.png',
      'https://drive.google.com/file/d/1-dLSwSNJ_-FS-yI-yKF26YQci379cgwx/view?usp=sharing.png',
      'https://drive.google.com/file/d/1-L6zcoNsn7MbHAw0w7-y4lJx2xkIOs9P/view?usp=sharing.png',
      'https://drive.google.com/file/d/1-LfWJY9eeTe9TyLF9Em6UNLkVdT9Jo6G/view?usp=sharing.png',
      'https://drive.google.com/file/d/19Xww4qarS3JfUzQvsye7lSxq5E9d8bya/view?usp=sharing.png',
      'https://drive.google.com/file/d/19crEsAEP5bQvFZWXCsix8h1jPjgRnPQ0/view?usp=sharing.png',
      'https://drive.google.com/file/d/19llb8fne02xVKTO90ErEezVjvotGa4fG/view?usp=sharing.png',
      'https://drive.google.com/file/d/19xQJ1UskD9IZMnPCRTLPHIZvsvH2oh8p/view?usp=sharing.png',
      'https://drive.google.com/file/d/19tFwiLCfJFrSF_Gd-CV-JFPDHlIThj1W/view?usp=sharing.png',
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
      //'',
      // Voeg meer links toe als je wilt
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  prevBtn.addEventListener('click', function() {
      if (currentPage > 1) {
          currentPage--;
          updateGallery();
      }
  });

  nextBtn.addEventListener('click', function() {
      if (currentPage < totalPages) {
          currentPage++;
          updateGallery();
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
});

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
 
    document.getElementById('prev').addEventListener('click', () => {
      currentIframeIndex = (currentIframeIndex - 1 + iframes.length) % iframes.length;
      showIframe(currentIframeIndex);
    });
 
    document.getElementById('next').addEventListener('click', () => {
      currentIframeIndex = (currentIframeIndex + 1) % iframes.length;
      showIframe(currentIframeIndex);
    });
 
    showIframe(currentIframeIndex);
  });
  //embedded audio container end