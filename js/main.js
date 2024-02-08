/*Barre de navigation*/
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

/*Count menu*/
  183: function(t, e, i) {
    "use strict";
    function n(t, section) {
      if (this.element = t,
      this.section = section,
      this.name = t.getAttribute("data-animation-name"),
      this.event = "scroll",
      this.durationRaw = t.getAttribute("data-animation-duration"),
      this.duration = Number(this.durationRaw),
      isNaN(this.duration) || !isFinite(this.duration) || this.duration < 0)
        this.duration = 0;
      var e = t.getAttribute("data-animation-event");
      if (e)
        this.event = e;
      if (this.delayRaw = t.getAttribute("data-animation-delay"),
      this.delay = 0,
      this.delayRaw)
        if (this.delay = Number(this.delayRaw),
        isNaN(this.delay) || !isFinite(this.delay) || this.delay < 0)
          this.delay = 0;
      var i = t.getAttribute("data-animation-cycle");
      if (i)
        if (i = Number(i),
        !isNaN(i))
          this.animationCycle = i;
      var n = t.getAttribute("data-animation-direction");
      if (n && "customAnimationIn" !== this.name)
        this.direction = n;
      this.animationOut = !t.hasAttribute("data-animation-out") || parseFloat(t.getAttribute("data-animation-out")),
      this.infinite = t.classList.contains("infinite")
    }
    t.exports = n,
    window.AnimationInfo = n
  },
  185: function(t, e, i) {
    "use strict";
    function CountdownAnimate(t) {
      if (this.$dom = t,
      this.$html = this.$dom.find(".counter-animation"),
      !this.$html.length) {
        var e = this.$dom.text();
        this.$html = $('<div class="counter-animation" style="display: none;"></div>'),
        this.$html.append('<div class="counter-wrapper"></div>'),
        this.$html.find(".counter-wrapper").append('<div class="counter-html"></div>'),
        this.$html.find(".counter-html").append($('<div class="old-val"></div>')),
        this.$html.find(".counter-html").append($('<div class="new-val"></div>')),
        this.$dom.empty(),
        this.$dom.append($('<span class="start-val"></span>').text(e)),
        this.$dom.append(this.$html)
      }
      this.onResize(),
      $(window).on("resize", function() {
        this.onResize()
      }
      .bind(this))
    }
    t.exports = CountdownAnimate,
    CountdownAnimate.prototype.rollNumber = function(t, props) {
      if (!this.$dom.is(".updating")) {
        this.$dom.addClass("updating");
        var e = this.getOldVal()
          , i = this.$dom.find(".start-val")
          , n = this.$dom.find(".counter-animation")
          , o = 350;
        if (props.animationSpeed)
          o = props.animationSpeed > 20 ? props.animationSpeed - 20 : 0;
        this.$html.find(".old-val").text(e),
        this.$html.find(".new-val").text(t),
        this.$html.find(".counter-html").css("top", 0),
        requestAnimationFrame(function() {
          i.css("display", "none"),
          n.css("display", "flex")
        }
        .bind(this)),
        this.$html.find(".counter-html").animate({
          top: -this.height + "px"
        }, o, "swing", function() {
          requestAnimationFrame(function() {
            i.text(t),
            i.css("display", "inline-block"),
            n.css("display", "none"),
            this.$dom.removeClass("updating")
          }
          .bind(this))
        }
        .bind(this))
      }
    }
    ,
    CountdownAnimate.prototype.onResize = function() {
      this.height = this.$dom.height(),
      this.$html.find(".counter-wrapper").css("height", this.height + "px")
    }
    ,
    CountdownAnimate.prototype.getOldVal = function() {
      return this.$dom.find(".start-val").text()
    }
  }