// Yieldmeow namespace.
var yieldmeow = {

  // Give a cat a new className.  This will set a target position opposite
  // the selected cat and send it floating in that direction.
  setCats: function() {

    // Get cat img and current class name, then set new class.
    var cat = yieldmeow.getCat(),
        className = yieldmeow.getCatClass(cat);
    $(cat).attr('class', className);
  },

  // Get a random cat.
  getCat: function() {
    var cats = $('.floatingCat'),
        idx = Math.floor(Math.random() * cats.length) + 1;

    if (!cats[idx]) {
      return yieldmeow.getCat();
    } else {
      return cats[idx];
    }
  },

  // Get a class for the cat img, which will be opposite its current class.
  getCatClass: function(catImg) {

    var randNumber = idx = Math.floor(Math.random() * 4) + 1,
        classBase;

    if ($(catImg).attr('class').search('left') !== -1)
      classBase = 'right';
    if ($(catImg).attr('class').search('right') !== -1)
      classBase = 'left';
    if ($(catImg).attr('class').search('bottom') !== -1)
      classBase = 'top';
    if ($(catImg).attr('class').search('top') !== -1)
      classBase = 'bottom';

    // return the random class.
    return classBase + 'Class_' + randNumber + ' floatingCat';
  },

  // Get the new site url and yieldmeow the shit out of it.
  yieldmeowThatMotherfucker: function() {
    var url = $('#siteUrl').val();
    window.location.href = window.location.href + '#' + url;
    window.location.reload();
  },

  // Add key listener to treat input like a form.
  addKeyListener: function() {
    $(document).keyup(function(e) {
       var key = e.keyCode ? e.keyCode : e.which;
       if (key == 13 && document.activeElement.id == 'siteUrl') {
         yieldmeow.yieldmeowThatMotherfucker();
       }
    });
  },

  // Populate the iframe and start floating cats.
  setIframeAndCats: function() {

    // Get url from user or default.
    var url = 'http://yieldmo.com';
    if (window.location.hash) {
      url = window.location.hash.replace('#', '');
    }

    // Set up iframe.
    var iframe = $('<iframe></iframe>')
      .attr('src', url)
      .css({
        'frameBorder': 0,
        'width': '100%',
        'height': '100%',
        'id': 'randomId'
      });
    $('#meowFrame').append(iframe);

    // Start setting cats.
    setInterval(function() {
      yieldmeow.setCats();
    }, 500);
  },

  // Update (show/hide) some elements when yieldmeowing.
  updateElementsForYieldmeow: function() {

    // Show some elements.
    var showEls = ['meowFrame', 'goAgain'];
    $.each(showEls, function(showItm, showID) {
      $('#' + showID).show();
    });

    // Hide some elements.
    var hideEls = ['siteUrl', 'siteButton', 'heading', 'subheading'];
    $.each(hideEls, function(hideItm, hideID) {
      $('#' + hideID).hide();
    });
  },

  // Reload so user can customize.
  reload: function() {
    window.location.href = window.location.href.split('#')[0] + '?new';
  },

  // Kick off yieldmeow.
  init: function() {
    this.addKeyListener();

    // Check for forced stop.  Lets user enter new site.
    if (window.location.search.search('new') != -1) {
      window.history.pushState({},"sample","/");
      return;
    }

    // Set up the iframe to show a website.
    this.setIframeAndCats();

    // Update some ui elements.
    this.updateElementsForYieldmeow();
  }
};

// Get it going.
yieldmeow.init();
