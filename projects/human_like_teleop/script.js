// To embed your uploaded video, add its YouTube ID to data-youtube-id in index.html.
// Example: https://www.youtube.com/watch?v=AbCdEf12345 -> AbCdEf12345
const video = document.querySelector('[data-youtube-id]');
if (video) {
  const id = (video.dataset.youtubeId || '').trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}`;
    iframe.title = 'Project video - Human-Like Redundancy Resolution';
    iframe.loading = 'lazy';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    video.replaceChildren(iframe);
  }
}

const copyButton = document.querySelector('.copy-button');
const bibtex = document.querySelector('#bibtex code');
copyButton?.addEventListener('click', async () => {
  if (!bibtex) return;
  try {
    await navigator.clipboard.writeText(bibtex.textContent.trim());
    copyButton.textContent = 'Copied';
  } catch {
    copyButton.textContent = 'Select to copy';
  }
});
