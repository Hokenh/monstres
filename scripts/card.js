Vue.component('monsterCard', {
    data: function () {
        return {
            // key: "",
            // power: 0,
            // syllabe: "MA",
            // deck: "m",
            // image: "",
            // variant: 0,
            faceDown: true
        }
    },
    props: {
        "deckname": String,
        "cardname": String,
        "power": String,
        "syllabe": String,
        "deck": String,
        "image": String,
        "newcardliteral": String
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
        }
    },
    template: '<div class="monstercard-container"><h2 class="deck-title">{{deckname}}</h2>' +
        '   <div class="monstercard" @click="flip"  :class="{ \'monstercard--face-down\': faceDown , \'nose\': deck == \'nose\' || deck ==\'n\', \'mouth\': deck == \'mouth\' || deck ==\'m\'' +
        '  , \'eyes\': deck == \'eyes\' || deck ==\'e\'' +
        '  , \'body\': deck == \'body\' || deck ==\'b\'' +
        '  , \'complement\': deck == \'complement\' || deck ==\'c\'}' +
        '">' +
        '      <div class="front">' +
        '          <div class="inner">' +
        '              <span class="power">' +
        '                  {{power}}' +
        '              </span>' +
        '              <img :src="image">' +
        '              <div class="syllabe"><span class="deck-symbol"></span><span>{{syllabe}}</span></div>' +
        '          </div>' +
        '       </div>' +
        '       <div class="back"></div>' +
        '   </div>' +
        ' <div style="text-align:center; margin-top:2em"><button v-show="!faceDown" class="button is-primary" @click="$emit(\'request-new-card\')" v-bind:alt="newcardliteral" v-bind:title="newcardliteral"><img style="margin: 5px; width: 1rem;stroke-color:white;" src="assets/icons/refresh.svg"/></button></div>' +
        '</div >'
})