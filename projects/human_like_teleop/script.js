// To embed your uploaded video, add its YouTube ID to data-youtube-id in index.html.
// Example: https://www.youtube.com/watch?v=AbCdEf12345 -> AbCdEf12345
const teaser = document.querySelector('[data-youtube-id]');
if (teaser) {
  const id = (teaser.dataset.youtubeId || '').trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}`;
    iframe.title = 'Project video - Human-Like Redundancy Resolution';
    iframe.loading = 'lazy';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    teaser.replaceChildren(iframe);
  }
}

// BibTeX copy button
const copyButton = document.querySelector('.copy-button');
const bibtexCode = document.querySelector('#bibtex-code');
copyButton?.addEventListener('click', async () => {
  if (!bibtexCode) return;
  try {
    await navigator.clipboard.writeText(bibtexCode.textContent.trim());
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy'; }, 2000);
  } catch {
    copyButton.textContent = 'Select to copy';
  }
});
