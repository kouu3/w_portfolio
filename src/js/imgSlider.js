jQuery(function () {

    const slides = jQuery("#js-slide").find("img");
    const slideLength = slides.length;
    
    let now = 0;
    let next = 1;
    
    const fade = 1500;
    const show = 3000;
    
    slides.hide();
    slides.eq(0).show();
    
    const slidesshow = () => {
    
      slides.eq(now % slideLength).fadeOut(fade).removeClass("zoom");
      slides.eq(next % slideLength).fadeIn(fade).addClass("zoom");
    
      now++;
      next++;
    };
    
    setInterval(slidesshow, show);
});

