    var app = new Vue({
        el: '#app',
        data: {
            deckTypes: ["body", "eyes", "nose", "mouth", "complement"],
            cardImagesPath: "assets/cards",
            batchCards: "body,SI,1,assets/cards/body/001.svg|body,GE,1,assets/cards/body/002.svg|body,NU,0,assets/cards/body/003.svg|body,HA,5,assets/cards/body/004.svg|body,TE,4,assets/cards/body/005.svg|body,TA,0,assets/cards/body/006.svg|body,LU,1,assets/cards/body/007.svg|body,ZI,3,assets/cards/body/008.svg|body,KE,4,assets/cards/body/009.svg|body,PO,2,assets/cards/body/010.svg|body,FI,5,assets/cards/body/011.svg|body,PI,3,assets/cards/body/012.svg|body,YO,1,assets/cards/body/013.svg|body,VI,4,assets/cards/body/014.svg|body,BE,3,assets/cards/body/015.svg|body,DO,2,assets/cards/body/016.svg|body,GI,1,assets/cards/body/017.svg|body,YE,5,assets/cards/body/018.svg|body,RO,0,assets/cards/body/019.svg|body,DU,1,assets/cards/body/020.svg|eyes,ZO,5,assets/cards/eyes/001.svg|eyes,CE,3,assets/cards/eyes/002.svg|eyes,NE,5,assets/cards/eyes/003.svg|eyes,ZE,1,assets/cards/eyes/004.svg|eyes,DA,2,assets/cards/eyes/005.svg|eyes,YA,4,assets/cards/eyes/006.svg|eyes,KU,0,assets/cards/eyes/007.svg|eyes,XO,3,assets/cards/eyes/008.svg|eyes,VA,0,assets/cards/eyes/009.svg|eyes,HE,1,assets/cards/eyes/010.svg|eyes,JO,5,assets/cards/eyes/011.svg|eyes,WE,1,assets/cards/eyes/012.svg|eyes,WO,3,assets/cards/eyes/013.svg|eyes,PU,5,assets/cards/eyes/014.svg|eyes,CA,4,assets/cards/eyes/015.svg|eyes,BU,4,assets/cards/eyes/016.svg|eyes,SA,5,assets/cards/eyes/017.svg|eyes,XA,5,assets/cards/eyes/018.svg|eyes,PE,1,assets/cards/eyes/019.svg|eyes,WI,4,assets/cards/eyes/020.svg|nose,ZA,3,assets/cards/nose/001.svg|nose,TO,3,assets/cards/nose/002.svg|nose,HI,1,assets/cards/nose/003.svg|nose,RA,5,assets/cards/nose/004.svg|nose,NI,4,assets/cards/nose/005.svg|nose,DE,2,assets/cards/nose/006.svg|nose,LA,0,assets/cards/nose/007.svg|nose,CO,4,assets/cards/nose/008.svg|nose,CU,0,assets/cards/nose/009.svg|nose,WA,1,assets/cards/nose/010.svg|nose,SE,2,assets/cards/nose/011.svg|nose,XE,3,assets/cards/nose/012.svg|nose,YI,2,assets/cards/nose/013.svg|nose,GO,0,assets/cards/nose/014.svg|nose,GU,3,assets/cards/nose/015.svg|nose,RI,2,assets/cards/nose/016.svg|nose,ZU,1,assets/cards/nose/017.svg|nose,TU,2,assets/cards/nose/018.svg|nose,XU,0,assets/cards/nose/019.svg|nose,MO,2,assets/cards/nose/020.svg|mouth,LE,4,assets/cards/mouth/001.svg|mouth,MI,2,assets/cards/mouth/002.svg|mouth,JA,3,assets/cards/mouth/003.svg|mouth,YU,0,assets/cards/mouth/004.svg|mouth,NA,2,assets/cards/mouth/005.svg|mouth,NO,3,assets/cards/mouth/006.svg|mouth,FE,3,assets/cards/mouth/007.svg|mouth,TI,0,assets/cards/mouth/008.svg|mouth,XI,1,assets/cards/mouth/009.svg|mouth,FU,3,assets/cards/mouth/010.svg|mouth,LO,4,assets/cards/mouth/011.svg|mouth,VO,3,assets/cards/mouth/012.svg|mouth,RE,0,assets/cards/mouth/013.svg|mouth,JE,1,assets/cards/mouth/014.svg|mouth,BI,4,assets/cards/mouth/015.svg|mouth,ME,3,assets/cards/mouth/016.svg|mouth,SU,3,assets/cards/mouth/017.svg|mouth,CI,0,assets/cards/mouth/018.svg|mouth,SO,5,assets/cards/mouth/019.svg|mouth,JI,3,assets/cards/mouth/020.svg|complement,GA,0,assets/cards/complement/001.svg|complement,BO,3,assets/cards/complement/002.svg|complement,JU,4,assets/cards/complement/003.svg|complement,WU,5,assets/cards/complement/004.svg|complement,FA,1,assets/cards/complement/005.svg|complement,KO,2,assets/cards/complement/006.svg|complement,PA,5,assets/cards/complement/007.svg|complement,LI,4,assets/cards/complement/008.svg|complement,HU,3,assets/cards/complement/009.svg|complement,BA,0,assets/cards/complement/010.svg|complement,MU,4,assets/cards/complement/011.svg|complement,RU,1,assets/cards/complement/012.svg|complement,DI,4,assets/cards/complement/013.svg|complement,HO,2,assets/cards/complement/014.svg|complement,KI,1,assets/cards/complement/015.svg|complement,FO,1,assets/cards/complement/016.svg|complement,KA,0,assets/cards/complement/017.svg|complement,VE,0,assets/cards/complement/018.svg|complement,MA,3,assets/cards/complement/019.svg|complement,VU,0,assets/cards/complement/020.svg",
            cards: "body,001,SI,1|body,002,GE,1|body,003,NU,0|body,004,HA,5|body,005,TE,4|body,006,TA,0|body,007,LU,1|body,008,ZI,3|body,009,KE,4|body,010,PO,2|body,011,FI,5|body,012,PI,3|body,013,YO,1|body,014,VI,4|body,015,BE,3|body,016,DO,2|body,017,GI,1|body,018,YE,5|body,019,RO,0|body,020,DU,1|eyes,001,ZO,5|eyes,002,CE,3|eyes,003,NE,5|eyes,004,ZE,1|eyes,005,DA,2|eyes,006,YA,4|eyes,007,KU,0|eyes,008,XO,3|eyes,009,VA,0|eyes,010,HE,1|eyes,011,JO,5|eyes,012,WE,1|eyes,013,WO,3|eyes,014,PU,5|eyes,015,CA,4|eyes,016,BU,4|eyes,017,SA,5|eyes,018,XA,5|eyes,019,PE,1|eyes,020,WI,4|nose,001,ZA,3|nose,002,TO,3|nose,003,HI,1|nose,004,RA,5|nose,005,NI,4|nose,006,DE,2|nose,007,LA,0|nose,008,CO,4|nose,009,CU,0|nose,010,WA,1|nose,011,SE,2|nose,012,XE,3|nose,013,YI,2|nose,014,GO,0|nose,015,GU,3|nose,016,RI,2|nose,017,ZU,1|nose,018,TU,2|nose,019,XU,0|nose,020,MO,2|mouth,001,LE,4|mouth,002,MI,2|mouth,003,JA,3|mouth,004,YU,0|mouth,005,NA,2|mouth,006,NO,3|mouth,007,FE,3|mouth,008,TI,0|mouth,009,XI,1|mouth,010,FU,3|mouth,011,LO,4|mouth,012,VO,3|mouth,013,RE,0|mouth,014,JE,1|mouth,015,BI,4|mouth,016,ME,3|mouth,017,SU,3|mouth,018,CI,0|mouth,019,SO,5|mouth,020,JI,3|complement,001,GA,0|complement,002,BO,3|complement,003,JU,4|complement,004,WU,5|complement,005,FA,1|complement,006,KO,2|complement,007,PA,5|complement,008,LI,4|complement,009,HU,3|complement,010,BA,0|complement,011,MU,4|complement,012,RU,1|complement,013,DI,4|complement,014,HO,2|complement,015,KI,1|complement,016,FO,1|complement,017,KA,0|complement,018,VE,0|complement,019,MA,3|complement,020,VU,0",
            decks: null,
            selectedLanguage: "ca",
            i18n: {
                "ca": {
                    body: "Cos",
                    eyes: "Ulls",
                    nose: "Nas",
                    mouth: "Boca",
                    complement: "Complement",
                    drawNewCards: "Reparteix cartes",
                    newBody: "Nou cos",
                    newEyes: "Nous ulls",
                    newNose: "Nou nas",
                    newMouth: "Nova boca",
                    newComplement: "Nou complement",
                    newCard: {
                        body: "Nou cos",
                        eyes: "Nous ulls",
                        nose: "Nou nas",
                        mouth: "Nova boca",
                        complement: "Nou complement"
                    }
                },
                "es": {
                    body: "Cuerpo",
                    eyes: "Ojos",
                    nose: "Nariz",
                    mouth: "Boca",
                    complement: "Complemento",
                    drawNewCards: "Reparte cartas",
                    newBody: "Nuevo cuerpo",
                    newEyes: "Nuevos ojos",
                    newNose: "Nueva nariz",
                    newMouth: "Nueva boca",
                    newComplement: "Nuevo complemento",
                    newCard: {
                        body: "Nuevo cuerpo",
                        eyes: "Nuevos ojos",
                        nose: "Nueva nariz",
                        mouth: "Nueva boca",
                        complement: "Nuevo complemento"
                    }
                },
                "en": {
                    body: "Body",
                    eyes: "Eyes",
                    nose: "Nose",
                    mouth: "Mouth",
                    complement: "Complement",
                    drawNewCards: "Draw cards",
                    newBody: "New body",
                    newEyes: "New eyes",
                    newNose: "New nose",
                    newMouth: "New mouth",
                    newComplement: "New complement",
                    newCard: {
                        body: "New body",
                        eyes: "New eyes",
                        nose: "New nose",
                        mouth: "New mouth",
                        complement: "New complement"
                    }
                }
            },
            currentHand: null
        },
        beforeCreate() {
            this.fn = {
                randomFromArray: function (arr) {
                    return arr[Math.floor(Math.random() * arr.length)];
                }
            };
        },
        created() {
            this.decks = {};
            this.deckTypes.forEach(element => {
                this.decks[element] = []
            });
            this.initializeDecks();
            if (location.hash && location.hash.split('-').length == this.deckTypes.length) {
                var parts = location.hash.substring(1).split('-');
                this.currentHand = {
                    body: {},
                    eyes: {},
                    nose: {},
                    mouth: {},
                    complement: {}
                };

                this.deckTypes.forEach((element, idx) => {
                    var card = this.getCardFromDeck(element, parts[idx]);
                    this.currentHand[element] = card;
                });

                setTimeout(this.revealAll, 1000)
            }
        },
        methods: {
            newCard: function (deck) {
                this.drawNewCard(deck, this.currentHand[deck]);
            },
            currentHandToHash: function () {
                var hash = "";
                this.deckTypes.forEach(e => {
                    hash += "-" + this.currentHand[e].id;
                });
                location.hash = "#" + hash.substring(1);
            },
            getCardFromDeck: function (deck, id) {
                return this.decks[deck].find(function (v, i) {
                    return v.id === id
                });
            },
            drawNewCards: function () {
                if (this.currentHand !== null) {
                    this.facedownAll();
                }
                setTimeout(() => {
                    this.currentHand === null;
                    this.currentHand = {
                        body: {},
                        eyes: {},
                        nose: {},
                        mouth: {},
                        complement: {}
                    };
                    this.drawFullSet();

                    setTimeout(this.revealAll, 500)
                    setTimeout(this.currentHandToHash, 1000);
                }, 500);
            },
            revealAll: function () {
                this.deckTypes.forEach(element => {
                    this.$refs[element][0].reveal()
                });
            },
            facedownAll: function () {
                this.deckTypes.forEach(element => {
                    this.faceDownCard(element)
                });
            },
            drawNewCard: function (deck, currentCard) {
                this.faceDownCard(deck);
                setTimeout(() => {
                    if (!currentCard) {
                        this.currentHand[deck] = this.fn.randomFromArray(this.decks[deck]);
                        if (this.$refs[deck]) {
                            setTimeout(this.$refs[deck][0].reveal, 500)
                        }
                        return;
                    }
                    this.currentHand[deck] = this.getDifferentCard(deck, currentCard);
                    this.currentHandToHash();
                    setTimeout(this.$refs[deck][0].reveal, 500);
                }, 500);
            },
            faceDownCard: function (deck) {
                if (this.$refs[deck]) {
                    this.$refs[deck][0].facedown()
                }
            },
            revealCard: function (deck) {
                if (this.$refs[deck]) {
                    this.$refs[deck][0].reveal()
                }
            },
            getDifferentCard: function (deck, currentCard) {
                var drawCard = currentCard;
                while (drawCard.cardname === currentCard.cardname) {
                    drawCard = this.fn.randomFromArray(this.decks[deck]);
                }
                return drawCard;
            },
            drawFullSet: function () {
                this.deckTypes.forEach(element => {
                    this.drawNewCard(element);
                });
            },
            initializeDecks: function () {
                var availableCards = this.cards.split('|');
                (availableCards).forEach(element => this.addCard(element));
            },
            addCard: function (card) {
                var elements = card.split(',');
                if (elements.length < 4) {
                    return;
                }
                if (!this.decks.hasOwnProperty(elements[0])) {
                    this.decks[elements[0]] = [];
                }
                this.decks[elements[0]].unshift({
                    cardname: card,
                    deck: elements[0],
                    id: elements[1],
                    syllabe: elements[2],
                    power: elements[3],
                    image: this.cardImagesPath + "/" + elements[0] + "/" + elements[1] + ".svg"
                })
            }
        },

    });