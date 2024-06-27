/* Copyright © by Muhammad Erag Goshih, iErTA */
// just checking sth
const navToggle = document.querySelector(".nav-toggle");
const navAddOn = document.querySelector(".nav-addon");
const navLinks = document.querySelectorAll(".nav__link");
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const slideWidth = slides[0].getBoundingClientRect().width;
const innerWidth = window.innerWidth;
let carousel = document.querySelector(".carousel");
let portfolio = document.querySelector(".portfolio");


const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const hideShowArrow = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex <= 1) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 2) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

const moveToSlide = (track, currentSlide, targetSlide) => {
  let str = targetSlide.style.left;
  let reg = /\d+.\d*/g;
  let numOfTargetSlide = str.match(reg);
  let amountToMove = parseFloat(numOfTargetSlide) - slideWidth;
  // console.log(amountToMove)
  track.style.transform = "translateX(-" + amountToMove + "px)";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  hideShowArrow(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrow(slides, prevButton, nextButton, nextIndex);
});

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
navAddOn.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});



!(function ($) {
  "use strict";

  var Typed = function (el, options) {
    // chosen element to manipulate text
    this.el = $(el);

    // options
    this.options = $.extend({}, $.fn.typed.defaults, options);

    // attribute to type into
    this.isInput = this.el.is("input");
    this.attr = this.options.attr;

    // show cursor
    this.showCursor = this.isInput ? false : this.options.showCursor;

    // text content of element
    this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();

    // html or plain text
    this.contentType = this.options.contentType;

    // typing speed
    this.typeSpeed = this.options.typeSpeed;

    // add a delay before typing starts
    this.startDelay = this.options.startDelay;

    // backspacing speed
    this.backSpeed = this.options.backSpeed;

    // amount of time to wait before backspacing
    this.backDelay = this.options.backDelay;

    // div containing strings
    this.stringsElement = this.options.stringsElement;

    // input strings of text
    this.strings = this.options.strings;

    // character number position of current string
    this.strPos = 0;

    // current array position
    this.arrayPos = 0;


    this.stopNum = 0;

    // Looping logic
    this.loop = this.options.loop;
    this.loopCount = this.options.loopCount;
    this.curLoop = 0;

    // for stopping
    this.stop = false;

    // custom cursor
    this.cursorChar = this.options.cursorChar;

    // shuffle the strings
    this.shuffle = this.options.shuffle;
    // the order of strings
    this.sequence = [];

    // All systems go!
    this.build();
  };

  Typed.prototype = {
    constructor: Typed,

    init: function () {
      // begin the loop w/ first current string (global self.strings)
      // current string will be passed as an argument each time after this
      var self = this;
      self.timeout = setTimeout(function () {
        for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;

        // shuffle the array if true
        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

        // Start typing
        self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
      }, self.startDelay);
    },

    build: function () {
      var self = this;
      // Insert cursor
      if (this.showCursor === true) {
        this.cursor = $(
          '<span class="typed-cursor">' + this.cursorChar + "</span>"
        );
        this.el.after(this.cursor);
      }
      if (this.stringsElement) {
        self.strings = [];
        this.stringsElement.hide();
        var strings = this.stringsElement.find("p");
        $.each(strings, function (key, value) {
          self.strings.push($(value).html());
        });
      }
      this.init();
    },

    // pass current string state to each function, types 1 char per call
    typewrite: function (curString, curStrPos) {
      // exit when stopped
      if (this.stop === true) {
        return;
      }

      // varying values for setTimeout during typing
      // can't be global since number changes each time loop is executed
      var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
      var self = this;



      // contain typing function in a timeout humanize'd delay
      self.timeout = setTimeout(function () {
        // check for an escape character before a pause value
        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
        // single ^ are removed from string
        var charPause = 0;
        var substr = curString.substr(curStrPos);
        if (substr.charAt(0) === "^") {
          var skip = 1; // skip atleast 1
          if (/^\^\d+/.test(substr)) {
            substr = /\d+/.exec(substr)[0];
            skip += substr.length;
            charPause = parseInt(substr);
          }

          // strip out the escape character and pause value so they're not printed
          curString =
            curString.substring(0, curStrPos) +
            curString.substring(curStrPos + skip);
        }

        if (self.contentType === "html") {
          // skip over html tags while typing
          var curChar = curString.substr(curStrPos).charAt(0);
          if (curChar === "<" || curChar === "&") {
            var tag = "";
            var endTag = "";
            if (curChar === "<") {
              endTag = ">";
            } else {
              endTag = ";";
            }
            while (curString.substr(curStrPos).charAt(0) !== endTag) {
              tag += curString.substr(curStrPos).charAt(0);
              curStrPos++;
            }
            curStrPos++;
            tag += endTag;
          }
        }

        // timeout for any pause after a character
        self.timeout = setTimeout(function () {
          if (curStrPos === curString.length) {
            // fires callback function
            self.options.onStringTyped(self.arrayPos);

            // is this the final string
            if (self.arrayPos === self.strings.length - 1) {
              // animation that occurs on the last typed string
              self.options.callback();

              self.curLoop++;

              // quit if we wont loop back
              if (self.loop === false || self.curLoop === self.loopCount)
                return;
            }

            self.timeout = setTimeout(function () {
              self.backspace(curString, curStrPos);
            }, self.backDelay);
          } else {
            /* call before functions if applicable */
            if (curStrPos === 0) self.options.preStringTyped(self.arrayPos);

            // start typing each new char into existing string
            // curString: arg, self.el.html: original text inside element
            var nextString = curString.substr(0, curStrPos + 1);
            if (self.attr) {
              self.el.attr(self.attr, nextString);
            } else {
              if (self.isInput) {
                self.el.val(nextString);
              } else if (self.contentType === "html") {
                self.el.html(nextString);
              } else {
                self.el.text(nextString);
              }
            }

            // add characters one by one
            curStrPos++;
            // loop the function
            self.typewrite(curString, curStrPos);
          }
          // end of character pause
        }, charPause);

        // humanized value for typing
      }, humanize);
    },

    backspace: function (curString, curStrPos) {
      // exit when stopped
      if (this.stop === true) {
        return;
      }

      // varying values for setTimeout during typing
      // can't be global since number changes each time loop is executed
      var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
      var self = this;

      self.timeout = setTimeout(function () {
  

        if (self.contentType === "html") {
          // skip over html tags while backspacing
          if (curString.substr(curStrPos).charAt(0) === ">") {
            var tag = "";
            while (curString.substr(curStrPos).charAt(0) !== "<") {
              tag -= curString.substr(curStrPos).charAt(0);
              curStrPos--;
            }
            curStrPos--;
            tag += "<";
          }
        }

        // ----- continue important stuff ----- //
        // replace text with base text + typed characters
        var nextString = curString.substr(0, curStrPos);
        if (self.attr) {
          self.el.attr(self.attr, nextString);
        } else {
          if (self.isInput) {
            self.el.val(nextString);
          } else if (self.contentType === "html") {
            self.el.html(nextString);
          } else {
            self.el.text(nextString);
          }
        }

        // if the number (id of character in current string) is
        // less than the stop number, keep going
        if (curStrPos > self.stopNum) {
          // subtract characters one by one
          curStrPos--;
          // loop the function
          self.backspace(curString, curStrPos);
        }
        // if the stop number has been reached, increase
        // array position to next string
        else if (curStrPos <= self.stopNum) {
          self.arrayPos++;

          if (self.arrayPos === self.strings.length) {
            self.arrayPos = 0;

            // Shuffle sequence again
            if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

            self.init();
          } else
            self.typewrite(
              self.strings[self.sequence[self.arrayPos]],
              curStrPos
            );
        }

        // humanized value for typing
      }, humanize);
    },
    /**
     * Shuffles the numbers in the given array.
     * @param {Array} array
     * @returns {Array}
     */
    shuffleArray: function (array) {
      var tmp,
        current,
        top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    },

   

    // Reset and rebuild the element
    reset: function () {
      var self = this;
      clearInterval(self.timeout);
      var id = this.el.attr("id");
      this.el.after('<span id="' + id + '"/>');
      this.el.remove();
      if (typeof this.cursor !== "undefined") {
        this.cursor.remove();
      }
      // Send the callback
      self.options.resetCallback();
    },
  };

  $.fn.typed = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data("typed"),
        options = typeof option == "object" && option;
      if (!data) $this.data("typed", (data = new Typed(this, options)));
      if (typeof option == "string") data[option]();
    });
  };

  $.fn.typed.defaults = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!",
    ],
    stringsElement: null,
    // typing speed
    typeSpeed: 0,
    // time before typing starts
    startDelay: 0,
    // backspacing speed
    backSpeed: 0,
    // shuffle the strings
    shuffle: false,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "<span class='cursor'>|</span>",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  };
})(window.jQuery);


(function (a) {
  a.fn.rwdImageMaps = function () {
    var c = this;
    var b = function () {
      c.each(function () {
        if (typeof a(this).attr("usemap") == "undefined") {
          return;
        }
        var e = this,
          d = a(e);
        a("<img />")
          .load(function () {
            var g = "width",
              m = "height",
              n = d.attr(g),
              j = d.attr(m);
            if (!n || !j) {
              var o = new Image();
              o.src = d.attr("src");
              if (!n) {
                n = o.width;
              }
              if (!j) {
                j = o.height;
              }
            }
            var f = d.width() / 100,
              k = d.height() / 100,
              i = d.attr("usemap").replace("#", ""),
              l = "coords";
            a('map[name="' + i + '"]')
              .find("area")
              .each(function () {
                var r = a(this);
                if (!r.data(l)) {
                  r.data(l, r.attr(l));
                }
                var q = r.data(l).split(","),
                  p = new Array(q.length);
                for (var h = 0; h < p.length; ++h) {
                  if (h % 2 === 0) {
                    p[h] = parseInt((q[h] / n) * 100 * f);
                  } else {
                    p[h] = parseInt((q[h] / j) * 100 * k);
                  }
                }
                r.attr(l, p.toString());
              });
          })
          .attr("src", d.attr("src"));
      });
    };
    a(window).resize(b).trigger("resize");
    return this;
  };
})(jQuery);

$(function () {
  $("#quote").typed({
    strings: [
 "ٱلْرَّحْمَـانُ",
 "AR-RAHMAAN",
 "The Most or Entirely Merciful",
  "ٱلْرَّحِيْمُ",
  "AR-RAHEEM",
  "The Bestower of Mercy",
  "ٱلْمَلِكُ",
   "AL-MALIK",
   "The King and Owner of Dominion",
"ٱلْقُدُّوسُ",
"AL-QUDDUS",
"The Absolutely Pure",
"ٱلْسَّلَامُ",
"AS-SALAM",
"The Perfection and Giver of Peace",
"ٱلْمُؤْمِنُ",
"AL-MU’MIN",
"The One Who gives Emaan and Security",
"ٱلْمُهَيْمِنُ",
"AL-MUHAYMIN",
"The Guardian, The Witness, The Overseer",
"ٱلْعَزِيزُ",
"AL-AZEEZ",
"The All Mighty",
"ٱلْجَبَّارُ",
"AL-JABBAR",
"The Compeller, The Restorer",
"ٱلْمُتَكَبِّرُ",
"AL-MUTAKABBIR",
"The Supreme, The Majestic",
"ٱلْخَالِقُ",
"AL-KHAALIQ",
"The Creator, The Maker",
"ٱلْبَارِئُ",
"AL-BAARI",
"The Originator",
"ٱلْمُصَوِّرُ",
"AL-MUSAWWIR",
"The Fashioner",
"ٱلْغَفَّارُ",
"AL-GHAFFAR",
"The All- and Oft-Forgiving",
"ٱلْقَهَّارُ",
"AL-QAHHAR",
"The Subduer, The Ever-Dominating",
"ٱلْوَهَّابُ",
"AL-WAHHAAB",
"The Giver of Gifts",
"ٱلْرَّزَّاقُ",
"AR-RAZZAAQ",
"The Provider",
"ٱلْفَتَّاحُ",
"AL-FATTAAH",
"The Opener, The Judge",
"ٱلْعَلِيمُ",
"AL-‘ALEEM",
"The All-Knowing, The Omniscient",
"ٱلْقَابِضُ",
"AL-QAABID",
"The Withholder",
"ٱلْبَاسِطُ",
"AL-BAASIT",
"The Extender",
"ٱلْخَافِضُ",
"AL-KHAAFIDH",
"The Reducer, The Abaser",
"ٱلْرَّافِعُ",
"AR-RAAFI",
"The Exalter, The Elevator",
"ٱلْمُعِزُّ",
"AL-MU’IZZ",
"The Honourer, The Bestower",
"ٱلْمُذِلُّ",
"The Dishonourer, The Humiliator",
"ٱلْسَّمِيعُ",
"AS-SAMEE",
"The All-Hearing",
"ٱلْبَصِيرُ",
"AL-BASEER",
"The All-Seeing",
"ٱلْحَكَمُ",
"AL-HAKAM",
"The Judge, The Giver of Justice",
"ٱلْعَدْلُ",
"The Utterly Just",
"ٱلْلَّطِيفُ",
"AL-LATEEF",
"The Subtle One, The Most Gentle",
"ٱلْخَبِيرُ",
"AL-KHABEER",
"The Acquainted, the All-Aware",
"ٱلْحَلِيمُ",
"AL-HALEEM",
"The Most Forbearing",
"ٱلْعَظِيمُ",
"AL-‘ATHEEM",
"The Magnificent, The Supreme",
"ٱلْغَفُورُ",
"The Forgiving, The Exceedingly Forgiving",
"ٱلْشَّكُورُ",
"ASH-SHAKOOR",
"The Most Appreciative",
"ٱلْعَلِيُّ",
"AL-‘ALEE",
"The Most High, The Exalted",
"ٱلْكَبِيرُ",
"AL-KABEER",
"The Greatest, The Most Grand",
"ٱلْحَفِيظُ",
"AL-HAFEEDH",
"The Preserver, The All-Heedful and All-Protecting",
"ٱلْمُقِيتُ",
"AL-MUQEET",
"The Sustainer",
"ٱلْحَسِيبُ",
"AL-HASEEB",
"The Reckoner, The Sufficient",
"ٱلْجَلِيلُ",
"AL-JALEEL",
"The Majestic",
"ٱلْكَرِيمُ",
"AL-KAREEM",
"The Most Generous, The Most Esteemed",
"ٱلْرَّقِيبُ",
"AR-RAQEEB",
"The Watchful",
"ٱلْمُجِيبُ",
"AL-MUJEEB",
"The Responsive One",
"ٱلْوَاسِعُ",
"AL-WAASI",
"The All-Encompassing, the Boundless",
"ٱلْحَكِيمُ",
"AL-HAKEEM",
"The All-Wise",
"ٱلْوَدُودُ",
"AL-WADOOD",
"The Most Loving",
"ٱلْمَجِيدُ",
"AL-MAJEED",
"The Glorious, The Most Honorable",
"ٱلْبَاعِثُ",
"AL-BA’ITH",
"The Resurrector, The Raiser of the Dead",
"ٱلْشَّهِيدُ",
"ASH-SHAHEED",
"The All- and Ever Witnessing",
"ٱلْحَقُّ",
"AL-HAQQ",
"The Absolute Truth",
"ٱلْوَكِيلُ",
"AL-WAKEEL",
"The Trustee, The Disposer of Affairs",
"ٱلْقَوِيُّ",
"AL-QAWIYY",
"The All-Strong",
"ٱلْمَتِينُ",
"AL-MATEEN",
"The Firm, The Steadfast",
"ٱلْوَلِيُّ",
"AL-WALIYY",
"The Protecting Associate",
"ٱلْحَمِيدُ",
"AL-HAMEED",
"The Praiseworthy",
"ٱلْمُحْصِيُ",
"AL-MUHSEE",
"The All-Enumerating, The Counter",
"ٱلْمُبْدِئُ",
"AL-MUBDI",
"The Originator, The Initiator",
"ٱلْمُعِيدُ",
"AL-MU’ID",
"The Restorer, The Reinstater",
"ٱلْمُحْيِى",
"AL-MUHYEE",
"The Giver of Life",
"ٱلْمُمِيتُ",
"AL-MUMEET",
"The Bringer of Death, the Destroyer",
"ٱلْحَىُّ",
"AL-HAYY",
"The Ever-Living",
"ٱلْقَيُّومُ",
"AL-QAYYOOM",
"The Sustainer, The Self-Subsisting",
"ٱلْوَاجِدُ",
"AL-WAAJID",
"The Perceiver",
"ٱلْمَاجِدُ",
"AL-MAAJID",
"The Illustrious, the Magnificent",
"ٱلْوَاحِدُ",
"AL-WAAHID",
"The One",
"ٱلْأَحَد",
"AL-AHAD",
"The Unique, The Only One",
"ٱلْصَّمَدُ",
"AS-SAMAD",
"The Eternal, Satisfier of Needs",
"ٱلْقَادِرُ",
"AL-QADIR",
"The Capable, The Powerful",
"ٱلْمُقْتَدِرُ",
"AL-MUQTADIR",
"The Omnipotent",
"ٱلْمُقَدِّمُ",
"AL-MUQADDIM",
"The Expediter, The Promoter",
"ٱلْمُؤَخِّرُ",
"AL-MU’AKHKHIR",
"The Delayer, the Retarder",
"ٱلأَوَّلُ",
"AL-AWWAL",
"The First",
"ٱلْآخِرُ",
"AL-AAKHIR",
"The Last",
"ٱلْظَّاهِرُ",
"AZ-DHAAHIR",
"The Manifest",
"ٱلْبَاطِنُ",
"AL-BAATIN",
"The Hidden One, Knower of the Hidden",
"ٱلْوَالِي",
"AL-WAALI",
"The Governor, The Patron",
"ٱلْمُتَعَالِي",
"AL-MUTA’ALI",
"The Self Exalted",
"ٱلْبَرُّ",
"The Source of Goodness, the Kind Benefactor",
"ٱلْتَّوَّابُ",
"AT-TAWWAB",
"The Ever-Pardoning, The Relenting",
"ٱلْمُنْتَقِمُ",
"AL-MUNTAQIM",
"The Avenger",
"ٱلْعَفُوُّ",
"AL-‘AFUWW",
"The Pardoner",
"ٱلْرَّؤُفُ",
"AR-RA’OOF",
"The Most Kind",
"مَالِكُ ٱلْمُلْكُ",
"MAALIK-UL-MULK",
"Master of the Kingdom, Owner of the Dominion",
"ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ",
"DHUL-JALAALI WAL-IKRAAM",
"Possessor of Glory and Honour, Lord of Majesty and Generosity",
"ٱلْمُقْسِطُ",
"The Equitable, the Requiter",
"ٱلْجَامِعُ",
"AL-JAAMI",
"The Gatherer, the Uniter",
"ٱلْغَنيُّ",
"AL-GHANIYY",
"The Self-Sufficient, The Wealthy",
"ٱلْمُغْنِيُّ",
"AL-MUGHNI",
"The Enricher",
"ٱلْمَانِعُ",
"AL-MANI",
"The Withholder",
"ٱلْضَّارُ",
"AD-DHARR",
"The Distresser",
"ٱلْنَّافِعُ",
"AN-NAFI’",
"The Propitious, the Benefactor",
"ٱلْنُّورُ",
"AN-NUR",
"The Light, The Illuminator",
"ٱلْهَادِي",
"AL-HAADI",
"The Guide",
"ٱلْبَدِيعُ",
"AL-BADEE’",
"The Incomparable Originator",
"ٱلْبَاقِي",
"AL-BAAQI",
"The Ever-Surviving, The Everlasting",
"ٱلْوَارِثُ",
"AL-WAARITH",
"The Inheritor, The Heir",
"ٱلْرَّشِيدُ",
"AR-RASHEED",
"The Guide, Infallible Teacher",
"ٱلْصَّبُورُ",
"AS-SABOOR",
"The Forbearing, The Patient",
    ],
    typeSpeed: 100,
  });
  $("#quote2").typed({
    strings: ["Welcome 👋", "This is our official website", "Do you know?", "What is the full meaning of iErTa?", "iErTa refers to", "Islamic Education, Research and Tablig Academy", "Our main motto is", "Be coloured by the color of Almighty Allah", "Stay with us", "Be a Productive Muslim"],
    typeSpeed: 100,
    loop: true,
  });
  $("#quote3").typed({
    strings: ["Catch Me If You Can! 👋"],
    typeSpeed: 300,
    loop: true,
  });
});


// .
