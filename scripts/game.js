    var app = new Vue({
        el: '#app',
        data: {
            deckTypes: ["body", "eyes", "nose", "mouth", "complement"],
            batchCards: "body,SI,1,assets/cards/body/001.svg|body,GE,1,assets/cards/body/002.svg|body,NU,0,assets/cards/body/003.svg|body,HA,5,assets/cards/body/004.svg|body,TE,4,assets/cards/body/005.svg|body,TA,0,assets/cards/body/006.svg|body,LU,1,assets/cards/body/007.svg|body,ZI,3,assets/cards/body/008.svg|body,KE,4,assets/cards/body/009.svg|body,PO,2,assets/cards/body/010.svg|body,FI,5,assets/cards/body/011.svg|body,PI,3,assets/cards/body/012.svg|body,YO,1,assets/cards/body/013.svg|body,VI,4,assets/cards/body/014.svg|body,BE,3,assets/cards/body/015.svg|body,DO,2,assets/cards/body/016.svg|body,GI,1,assets/cards/body/017.svg|body,YE,5,assets/cards/body/018.svg|body,RO,0,assets/cards/body/019.svg|body,DU,1,assets/cards/body/020.svg|eyes,ZO,5,assets/cards/eyes/001.svg|eyes,CE,3,assets/cards/eyes/002.svg|eyes,NE,5,assets/cards/eyes/003.svg|eyes,ZE,1,assets/cards/eyes/004.svg|eyes,DA,2,assets/cards/eyes/005.svg|eyes,YA,4,assets/cards/eyes/006.svg|eyes,KU,0,assets/cards/eyes/007.svg|eyes,XO,3,assets/cards/eyes/008.svg|eyes,VA,0,assets/cards/eyes/009.svg|eyes,HE,1,assets/cards/eyes/010.svg|eyes,JO,5,assets/cards/eyes/011.svg|eyes,WE,1,assets/cards/eyes/012.svg|eyes,WO,3,assets/cards/eyes/013.svg|eyes,PU,5,assets/cards/eyes/014.svg|eyes,CA,4,assets/cards/eyes/015.svg|eyes,BU,4,assets/cards/eyes/016.svg|eyes,SA,5,assets/cards/eyes/017.svg|eyes,XA,5,assets/cards/eyes/018.svg|eyes,PE,1,assets/cards/eyes/019.svg|eyes,WI,4,assets/cards/eyes/020.svg|nose,ZA,3,assets/cards/nose/001.svg|nose,TO,3,assets/cards/nose/002.svg|nose,HI,1,assets/cards/nose/003.svg|nose,RA,5,assets/cards/nose/004.svg|nose,NI,4,assets/cards/nose/005.svg|nose,DE,2,assets/cards/nose/006.svg|nose,LA,0,assets/cards/nose/007.svg|nose,CO,4,assets/cards/nose/008.svg|nose,CU,0,assets/cards/nose/009.svg|nose,WA,1,assets/cards/nose/010.svg|nose,SE,2,assets/cards/nose/011.svg|nose,XE,3,assets/cards/nose/012.svg|nose,YI,2,assets/cards/nose/013.svg|nose,GO,0,assets/cards/nose/014.svg|nose,GU,3,assets/cards/nose/015.svg|nose,RI,2,assets/cards/nose/016.svg|nose,ZU,1,assets/cards/nose/017.svg|nose,TU,2,assets/cards/nose/018.svg|nose,XU,0,assets/cards/nose/019.svg|nose,MO,2,assets/cards/nose/020.svg|mouth,LE,4,assets/cards/mouth/001.svg|mouth,MI,2,assets/cards/mouth/002.svg|mouth,JA,3,assets/cards/mouth/003.svg|mouth,YU,0,assets/cards/mouth/004.svg|mouth,NA,2,assets/cards/mouth/005.svg|mouth,NO,3,assets/cards/mouth/006.svg|mouth,FE,3,assets/cards/mouth/007.svg|mouth,TI,0,assets/cards/mouth/008.svg|mouth,XI,1,assets/cards/mouth/009.svg|mouth,FU,3,assets/cards/mouth/010.svg|mouth,LO,4,assets/cards/mouth/011.svg|mouth,VO,3,assets/cards/mouth/012.svg|mouth,RE,0,assets/cards/mouth/013.svg|mouth,JE,1,assets/cards/mouth/014.svg|mouth,BI,4,assets/cards/mouth/015.svg|mouth,ME,3,assets/cards/mouth/016.svg|mouth,SU,3,assets/cards/mouth/017.svg|mouth,CI,0,assets/cards/mouth/018.svg|mouth,SO,5,assets/cards/mouth/019.svg|mouth,JI,3,assets/cards/mouth/020.svg|complement,GA,0,assets/cards/complement/001.svg|complement,BO,3,assets/cards/complement/002.svg|complement,JU,4,assets/cards/complement/003.svg|complement,WU,5,assets/cards/complement/004.svg|complement,FA,1,assets/cards/complement/005.svg|complement,KO,2,assets/cards/complement/006.svg|complement,PA,5,assets/cards/complement/007.svg|complement,LI,4,assets/cards/complement/008.svg|complement,HU,3,assets/cards/complement/009.svg|complement,BA,0,assets/cards/complement/010.svg|complement,MU,4,assets/cards/complement/011.svg|complement,RU,1,assets/cards/complement/012.svg|complement,DI,4,assets/cards/complement/013.svg|complement,HO,2,assets/cards/complement/014.svg|complement,KI,1,assets/cards/complement/015.svg|complement,FO,1,assets/cards/complement/016.svg|complement,KA,0,assets/cards/complement/017.svg|complement,VE,0,assets/cards/complement/018.svg|complement,MA,3,assets/cards/complement/019.svg|complement,VU,0,assets/cards/complement/020.svg",
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
        },
        methods: {
            newCard: function (deck) {
                this.drawNewCard(deck, this.currentHand[deck]);
            },
            drawNewCards: function () {
                var self = this;
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
                    setTimeout(self.revealAll, 500)
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
                var self = this;
                this.faceDownCard(deck);
                setTimeout(function () {
                    if (!currentCard) {
                        self.currentHand[deck] = self.fn.randomFromArray(self.decks[deck]);
                        if (self.$refs[deck]) {
                            setTimeout(self.$refs[deck][0].reveal, 500)
                        }
                        return;
                    }
                    self.currentHand[deck] = self.getDifferentCard(deck, currentCard);
                    setTimeout(self.$refs[deck][0].reveal, 500);
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
                var availableCards = this.batchCards.split('|');
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
                    syllabe: elements[1],
                    power: elements[2],
                    image: elements[3]
                })
            }
        },

    });