document.addEventListener("DOMContentLoaded", function() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/wv|webview/i.test(userAgent) || (navigator.platform === "Linux armv8l" && /android/i.test(userAgent))) {
    document.getElementById('btn-arrow').style.display = 'none'
    document.querySelector('#download--content').style.bottom = '-100%'
    document.querySelector('.block').style.display = 'none'
    document.querySelector('.vGPT').style.display = 'flex'
    document.body.style.userSelect = 'none'
  } else {
    document.body.style.userSelect = 'auto'
    document.querySelector('.vGPT').style.display = 'none'
    document.getElementById('btn-arrow').style.display = 'flex'
    setTimeout(function() {
      document.querySelector('#download--content').style.bottom = '0%'
      document.querySelector('.block').style.display = 'block'
    }, 10000)
  }
});
document.querySelector('.block').addEventListener('click', function() {
  document.querySelector('.block').style.display = 'none'
  document.querySelector('#download--content').style.bottom = '-100%'
})