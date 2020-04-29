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
        "cardname": String,
        "power": Number,
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
    template: '<div class="monstercard-container">' +
        '   <div class= "monstercard" @click="flip" :class= "{ \'monstercard--face-down\': faceDown , \'nose\': deck == \'nose\' || deck ==\'n\', \'mouth\': deck == \'mouth\' || deck ==\'m\'' +
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
        '              <div class="syllabe">{{syllabe}}</div>' +
        '          </div>' +
        '       </div>' +
        '       <div class="back"></div>' +
        '   </div>' +
        ' <div style="text-align:center; margin-top:2em"><button class="button is-primary" @click="$emit(\'request-new-card\')" >{{newcardliteral}}</button></div>' +
        '</div >'
})