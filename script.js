function submitSite() {
  var url = document.getElementById('siteUrl').value;
  window.location.href = window.location.href + '#' + url;
  window.location.reload();
}

window.onload = function(){
   if (window.location.hash) {
      var iframe = document.createElement('iframe');
      iframe.frameBorder=0;
      iframe.width="100%";
      iframe.height="100%";
      iframe.id="randomid";
      iframe.setAttribute("src", window.location.hash.replace('#', ''));
      document.getElementById("meowFrame").appendChild(iframe);
      document.getElementById("meowFrame").style.display = 'block';
      document.getElementById("siteUrl").style.display = 'none';
      document.getElementById("siteButton").style.display = 'none';
      document.getElementById("heading").style.display = 'none';
      document.getElementById("subheading").style.display = 'none';
      document.getElementById("goAgain").style.display = 'block';
      setInterval(function() {
        setCats();
      }, 1000);
   }
}

function setCats() {
  var cat = getCat();
  var catImg = document.getElementById(cat);
  var className;

  if (catImg.className.search('left') !== -1) {
    className = getRandRightClass();
  }

  if (catImg.className.search('right') !== -1) {
    className = getRandLeftClass();
  }

  if (catImg.className.search('bottom') !== -1) {
    className = getRandTopClass();
  }

  if (catImg.className.search('top') !== -1) {
    className = getRandBottomClass();
  }
  catImg.className = className;
}

function getCat() {

  var cats = [
    'cat_1',
    'cat_2',
    'cat_3',
    'cat_4',
    'cat_5',
    'cat_6',
    'cat_7',
    'cat_8',
    'cat_9',
    'cat_10',
    'cat_11',
    'cat_12',
    'cat_13',
    'cat_14',
    'cat_15',
    'cat_16',
    'cat_17',
    'cat_18',
    'cat_19',
    'cat_20'
  ];
  var idx = Math.floor(Math.random() * cats.length) + 1;
  if (!cats[idx]) {
    return getCat();
  } else {
    return cats[idx];
  }

}

function getRandLeftClass() {
  var classes = [
    'leftClass_1',
    'leftClass_2',
    'leftClass_3',
    'leftClass_4'
  ];
  var idx = Math.floor(Math.random() * classes.length) + 1;
  if (!classes[idx]) {
    return getRandLeftClass();
  } else {
    return classes[idx] + ' slowMovement'
  }
}


function getRandRightClass() {
  var classes = [
    'rightClass_1',
    'rightClass_2',
    'rightClass_3',
    'rightClass_4'
  ];
  var idx = Math.floor(Math.random() * (classes.length - 1)) + 1;
  if (!classes[idx]) {
    return getRandRightClass();
  } else {
    return classes[idx] + ' slowMovement'
  }
}

function getRandBottomClass() {
  var classes = [
    'bottomClass_1',
    'bottomClass_2',
    'bottomClass_3',
    'bottomClass_4'
  ];
  var idx = Math.floor(Math.random() * (classes.length - 1)) + 1;
  if (!classes[idx]) {
    return getRandBottomClass();
  } else {
    return classes[idx] + ' slowMovement'
  }
}

function getRandTopClass() {
  var classes = [
    'topClass_1',
    'topClass_2',
    'topClass_3',
    'topClass_4',
  ];
  var idx = Math.floor(Math.random() * (classes.length - 1)) + 1;
  if (!classes[idx]) {
    return getRandTopClass();
  } else {
    return classes[idx] + ' slowMovement'
  }
}

function reloadYM() {
  window.location.href = window.location.href.split('#')[0];
}
