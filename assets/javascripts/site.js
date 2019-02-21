var anchor = document.querySelectorAll(".site-l-content-wrapper--styleguide > h2, .site-l-content-wrapper--styleguide > h3, .site-l-content-wrapper--styleguide > h4");
var has_anchor_class = "has-anchor";

for (var i = 0; i < anchor.length; i++) {
  var anchor_link = anchor[i].getAttribute('id');
  var el_str = '<a class="site-c-heading-anchor" href="#'+ anchor_link +'" aria-hidden="true"><i class="fas fa-link"></i></a>';
  var temp = document.createElement('div');
  temp.innerHTML = el_str;
  var htmlObject = temp.firstChild;
  if (anchor_link) {
    anchor[i].classList.add(has_anchor_class);
    anchor[i].appendChild(htmlObject);
  }
}



var close_mobile_nav_button = document.getElementById("close_mobile_nav_button"),
    open_mobile_nav_button = document.getElementById("open-mobile-nav-button"),
    mobile_nav = document.getElementById("mobile-nav"),
    overlay = document.createElement("div");
    nav_open_class = "nav-is-open",
    visible_class = "is-visible",
    overlay_class = "site-c-overlay";


function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

close_mobile_nav_button.addEventListener("click", function(e) {
  document.body.classList.remove(nav_open_class);
  mobile_nav.classList.remove(visible_class);
  open_mobile_nav_button.focus();
  removeElementsByClass(overlay_class);
});

open_mobile_nav_button.addEventListener("click", function(e) {
  document.body.classList.add(nav_open_class);
  mobile_nav.classList.add(visible_class);
  close_mobile_nav_button.focus();
  document.body.insertBefore(overlay, mobile_nav);
  overlay.classList.add(overlay_class);

  setTimeout(function(){
    overlay.classList.add(visible_class);
  }, 100);

})

  var $iframe =  document.getElementsByClassName("responsive-iframe");
  var $iframe_box = document.getElementsByClassName("iframe__preview");

  var resizeFrame = function(frame, box){
    var display_width = frame[0].getAttribute('data-width');
    var viewable_width = box[0].getBoundingClientRect().width;

    if ( viewable_width < display_width ) {
      var scale = viewable_width / display_width;
      frame[0].style.transform = "scale("+ viewable_width / display_width +")";
      frame[0].style.width = display_width + "px";
    }

    else {
      frame[0].removeAttribute('style');
      frame[0].style.width = display_width + "px";
    }
  }

  if ($iframe.length) {
    resizeFrame($iframe, $iframe_box);
  }

  var preview_button = document.getElementsByClassName("sg-responsive-preview__size-button");

  for (var i = 0; i < preview_button.length; i++){
    preview_button[i].onclick = function(e) {
        var new_size = e.target.getAttribute('data-size');
        var frame = e.target.parentNode.parentNode.querySelectorAll('.responsive-iframe');
        var box = e.target.parentNode.parentNode.querySelectorAll('.iframe__preview');
        var all_buttons = e.target.parentNode.querySelectorAll('.sg-responsive-preview__size-button');

        for (var i = 0; i < all_buttons.length; i++){
          all_buttons[i].classList.remove('is-current');
        }

        e.target.classList.add('is-current');

        frame[0].setAttribute('data-width', new_size);
        resizeFrame(frame, box);
    };
  }

  window.onresize = function(event) {
    if ($iframe.length) {
      resizeFrame($iframe, $iframe_box);
    }
  };


