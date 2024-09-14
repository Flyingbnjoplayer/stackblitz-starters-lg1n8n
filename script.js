//embedded picture galery start
document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageNumber = document.getElementById('pageNumber');
  let currentPage = 1;

  prevBtn.addEventListener('click', function() {
      if (currentPage > 1) {
          currentPage--;
          updateGallery();
      }
  });

  nextBtn.addEventListener('click', function() {
      currentPage++;
      updateGallery();
  });

  function updateGallery() {
      pageNumber.textContent = currentPage;
      // Hier kun je de logica toevoegen om de afbeeldingen te updaten
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