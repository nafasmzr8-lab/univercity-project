 var univercity = {
    name: "fadak",
    address: {
        codposti: "1234567",
        city: "kashan",
    },
    daneshkade: [
        {
            name: "kampiuter",
            majors: [
                {
                    name: "narm afzar",
                    modirgoroh: {
                        firstName: "tina",
                        lastName: "sadegi",
                        age: "24",
                        room: "6",
                    },
                    ostad: [
                        {
                            name: "jalili",
                            dars: [
                                {
                                    name: "zabanfani",
                                    nomre: "4",
                                },
                                {
                                    name: "algoritm",
                                    nomre: "5",
                                },
                            ],
                        },
                        {
                            name: "rahimi",
                            dars: [
                                {
                                    name: "gossaste",
                                    nomre: "4",
                                },
                                {
                                    name: "c#",
                                    nomre: "5",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "bargh",
            majors: [
                {
                    name: "shabake",
                    modirgoroh: {
                        firstName: "raha",
                        lastName: "salehi",
                        age: "30",
                        room: "7",
                    },
                    ostad: [
                        {
                            name: "mosavi",
                            dars: [
                                {
                                    name: "java",
                                    nomre: "4",
                                },
                                {
                                    name: "tarahi system",
                                    nomre: "5",
                                },
                            ],
                        },
                        {
                            name: "rezaee",
                            dars: [
                                {
                                    name: "mabani",
                                    nomre: "4",
                                },
                                {
                                    name: "vlsi",
                                    nomre: "5",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "fanavari",
            majors: [
                {
                    name: "aiti",
                    modirgoroh: {
                        firstName: "nafis",
                        lastName: "mzr",
                        age: "22",
                        room: "2",
                    },
                    ostad: [
                        {
                            name: "mohamadi",
                            dars: [
                                {
                                    name: "medar mantegi",
                                    nomre: "3",
                                },
                                {
                                    name: "grafic",
                                    nomre: "5",
                                },
],
                        },
                        {
                            name: "rasoli",
                            dars: [
                                {
                                    name: "mobile",
                                    nomre: "4",
                                },
                                {
                                    name: "veb",
                                    nomre: "4",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};


 console.log(univercity.daneshkade[0].majors[0].modirgoroh.room);
 console.log(univercity.daneshkade[2].majors[0].ostad[1].dars[0].nomre);
 console.log(univercity.address.codposti);
 console.log(univercity.daneshkade[2].majors[0].modirgoroh.firstName);
 console.log(univercity.daneshkade[0].majors[0].ostad[0].dars[1]);