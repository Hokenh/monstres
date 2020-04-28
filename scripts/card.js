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
        "image": String
    },
    methods: {
        flip: function () {
            this.faceDown = !this.faceDown;
        },
        putFaceDown: function () {
            this.faceDown = true;
        },
        reveal: function () {
            this.faceDown = false;
        }
        // setCard: function (t) {
        //     if (t instanceof Object) {
        //         putFaceDown();
        //         power = t.power;
        //         syllabe = t.syllabe;
        //         deck = t.deck;
        //         image = t.image;
        //     } else if (typeof t === "string") {
        //         var elements = t.split('|');
        //         if (elements.length < 4) {
        //             return null;
        //         }
        //         deck = elements[0];
        //         syllabe = elements[1];
        //         power = elements[2];
        //         image = elements[3];
        //     }
        // }
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
        ' <div style="text-align:center; margin-top:2em"><button class="button is-primary" @click="$emit(\'request-new-card\')" >newCard</button></div>' +
        '</div >'
})