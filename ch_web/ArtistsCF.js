playVideo = function (video) {
    if (video && video.length) {
      video[0].play();
      video[0].controls = true;
    }
  }

  var slider = $('.slideshow-container');
  var setActiveSlide = function (slideIndex, autoplay) {
    const activeSlide = slider.find('.mySlides').eq(slideIndex);
    if (!activeSlide) return;
    activeSlideIndex = slideIndex;
    slider.find('.mySlides').hide(); // hide all slides
    activeSlide.show(); // display active slide
    $('.bullets').find('.dot').removeClass('active');
    $('.bullets').find('.dot').eq(slideIndex).addClass('active');

    // Pause all video
    slider.find('video').each(function(elemIndex, elem  ) {
      elem.pause();
    });
    if (autoplay) {
      playVideo(activeSlide.find('video'));
    }
  };
  var activeSlideIndex = 0;
  setActiveSlide(activeSlideIndex);

  var toNextSlide = function(autoplay) {
    // Return if last slide
    if (activeSlideIndex >= slider.find('.mySlides').length) return;
    setActiveSlide(activeSlideIndex + 1, autoplay);
  }
  var toPrevSlide = function() {
    // Return if first slide
    if (activeSlideIndex === 0) return;
    setActiveSlide(activeSlideIndex -1);
  }
  
  // ADD EVENT LISTENERS
  $('.play-button').on('click', function(e) {
    var video = $(e.target).parents('.slideVideo').find('video');
    playVideo(video);
  })

  $('video').on('play', function(e) {
    $(e.target).parents('.slideVideo').addClass('playing');
  });
  $('video').on('pause', function(e) {
    $(e.target).parents('.slideVideo').removeClass('playing');
  });

  $('video').on('ended', function(e) {
    toNextSlide(true);
  });
