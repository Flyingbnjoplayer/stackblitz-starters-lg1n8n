console.log('Hello!');
document.addEventListener('DOMContentLoaded', () => {
    const audios = document.querySelectorAll('audio');
    let currentAudioIndex = 0;
  
    const showAudio = (index) => {
      audios.forEach((audio, i) => {
        audio.classList.toggle('active', i === index);
      });
    };
  
    document.getElementById('prev').addEventListener('click', () => {
      currentAudioIndex = (currentAudioIndex - 1 + audios.length) % audios.length;
      showAudio(currentAudioIndex);
    });
  
    document.getElementById('next').addEventListener('click', () => {
      currentAudioIndex = (currentAudioIndex + 1) % audios.length;
      showAudio(currentAudioIndex);
    });
  
    showAudio(currentAudioIndex);
  });
  