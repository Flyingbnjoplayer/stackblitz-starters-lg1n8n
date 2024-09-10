document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');
    let currentIframeIndex = 0;

    const loadIframe = (index) => {
        const iframe = iframes[index];
        if (!iframe.src) {
            iframe.src = iframe.dataset.src;
        }
    };

    const showIframe = (index) => {
        iframes.forEach((iframe, i) => {
            iframe.classList.toggle('active', i === index);
        });
        loadIframe(index);
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