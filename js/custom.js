document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById('feature-video');
  const playButton = document.getElementById('video-play-button');

  const setupObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
          playButton.style.opacity = 0;
        } else {
          video.pause();
          playButton.style.opacity = 1;
        }
      });
    }, {
      threshold: 0.1
    });
    observer.observe(video);
  };
  document.addEventListener('click', setupObserver, { once: true });
  document.addEventListener('keydown', setupObserver, { once: true });

  if (video) {video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playButton.style.opacity = 0;
      } else {
        video.pause();
        playButton.style.opacity = 1;
      }
    });
  }

  var encEmailHref = "bWFpbHRvOmluZm9AaGlkZGVucHJhY3RpY2UuY29tP3N1YmplY3Q9SGlkZGVuJTIwUHJhY3RpY2UlMjBzdXBwb3J0";
  var encEmailAddress = "aW5mb0BoaWRkZW5wcmFjdGljZS5jb20";
  const contactLink = document.getElementById("contact-support");
  if (contactLink) {
      contactLink.setAttribute("href", atob(encEmailHref));
      contactLink.innerHTML = atob(encEmailAddress)
  }

  const downloadLinks = [
    {id: "header-download-apple",   location: "header",   store: "apple"},
    {id: "header-download-google",  location: "header",   store: "google"},
    {id: "section-download-apple",  location: "section",  store: "apple"},
    {id: "section-download-google", location: "section",  store: "google"},
  ]
  
  downloadLinks.forEach((link) => {
    elem = document.getElementById(link.id);
    if (elem) {
      elem.addEventListener('click', function(event) {
        posthog.capture('download_button_click', {
            location: obj.location,
            store: obj.store
        });
      });
    }
  });
});