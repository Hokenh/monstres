Vue.component("monsterCard", {
  data: function () {
    return {
      faceDown: true,
    };
  },
  props: {
    deckname: String,
    cardname: String,
    power: String,
    syllabe: String,
    deck: String,
    image: String,
    newcardliteral: String,
  },
  computed: {
    cardClasses: function () {
      var c = {};
      c['monstercard--face-down'] = this.faceDown;
      c[this.deck] = true;
      return c;
    },
    cardFigure: function () {
      return {
        "background": "url(" + this.image + ") no-repeat center",
        "background-size": "contain"
      }
    }
  },
  methods: {
    flip: function () {
      this.faceDown = !this.faceDown;
    },
    facedown: function () {
      this.faceDown = true;
    },
    reveal: function () {
      this.faceDown = false;
    },
  },
  template: "<div class='monstercard-container'>" +
    "  <h2 class=\"deck-title\" @click=\"$emit('request-new-card')\" v-bind:alt=\"newcardliteral\">{{deckname}}</h2>" +
    "  <div class=\"monstercard\" @click=\"flip\" :class=\"cardClasses\"  >" +
    '     <div class="front">' +
    '       <span class="power">{{power}}</span>' +
    '         <div class="inner-grid">' +
    '            <div><img :src="image" draggable="false" :alt="deckname" :title="deckname"></div>' +
    '            <div class="syllabe">{{syllabe}}</div>' +
    '         </div>' +
    "     </div>" +
    '     <div class="back"></div>' +
    "   </div>" +
    ' <div style="text-align:center; margin-top:2em"><button v-show="!faceDown" class="button is-primary" @click="$emit(\'request-new-card\')" v-bind:alt="newcardliteral" v-bind:title="newcardliteral"><img style="margin: 5px; width: 1rem;stroke-color:white;" src="assets/icons/refresh.svg"/></button></div>' +
    "</div >"
});