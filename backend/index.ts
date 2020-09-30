import express from 'express';

const app = express();
const PORT = 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send({ msg: 'hello' }));

app.get('/table-data', (req, res) => res.send(data))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});


const data = {
    "brandsSummary": {
        "brands": [{
            "name": "AKURA",
            "details": {
                "averagePrice": {
                    "value": 116.221,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 119.477,
                        "percentageValue": -2.725210710011132,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 52,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 39,
                        "percentageValue": 33.33333333333333,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 6043.48,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 4659.61,
                        "percentageValue": 29.699266676824887,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.049423228082529205,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.03488679709830821,
                        "percentageValue": 41.66742777578145,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.013314503734844073,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.009897836117400268,
                        "percentageValue": 34.51933914562746,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "BLAUPUNKT",
            "details": {
                "averagePrice": {
                    "value": 264.864,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 280.982,
                        "percentageValue": -5.736310510993604,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 451.2,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 458.1,
                        "percentageValue": -1.506221349050433,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 119501.494,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 128723.472,
                        "percentageValue": -7.164177485827906,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.4288415482853304,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.4097856859162819,
                        "percentageValue": 4.650202050479028,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.26327597479969267,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.27343143102507766,
                        "percentageValue": -3.7140778539295254,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "CELLO",
            "details": {
                "averagePrice": {
                    "value": 181.726,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 188.449,
                        "percentageValue": -3.5675434733004754,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 1086.8,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 844.1,
                        "percentageValue": 28.752517474232903,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 197501.887,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 159074.617,
                        "percentageValue": 24.156757831452136,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 1.0329454669248606,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.7550755238636402,
                        "percentageValue": 36.80028477673197,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.435120098370517,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.3379026333758007,
                        "percentageValue": 28.770851538938818,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "EDUK",
            "details": {
                "averagePrice": {
                    "value": 369.923,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 314.945,
                        "percentageValue": 17.45638127292067,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 3,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 2,
                        "percentageValue": 50,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 1109.77,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 629.89,
                        "percentageValue": 76.18473066725936,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.0028513400816843775,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.0017890665178619599,
                        "percentageValue": 59.37585624775412,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.002444955027536768,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.0013379978135486135,
                        "percentageValue": 82.73236344477294,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "EGL",
            "details": {
                "averagePrice": {
                    "value": 142.198,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 147.172,
                        "percentageValue": -3.3797189682820026,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 255,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 181,
                        "percentageValue": 40.88397790055249,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 36260.45,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 26638.19,
                        "percentageValue": 36.12204883289743,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.24236390694317209,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.16191051986650737,
                        "percentageValue": 49.69003072993481,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.07988607506802815,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.056584228955678835,
                        "percentageValue": 41.18081405792617,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "HISENSE",
            "details": {
                "averagePrice": {
                    "value": 350.505,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 340.971,
                        "percentageValue": 2.796132222388412,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 4881.7,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 6654.5,
                        "percentageValue": -26.64061912991209,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 1711078.218,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 2268993.532,
                        "percentageValue": -24.588669210891343,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 4.639795625586208,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 5.9526715715562055,
                        "percentageValue": -22.05523906683084,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 3.7697084004863655,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 4.819743740608592,
                        "percentageValue": -21.786123840468704,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "LG",
            "details": {
                "averagePrice": {
                    "value": 539.269,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 546.088,
                        "percentageValue": -1.2486998432486998,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 18119.6,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 17421.4,
                        "percentageValue": 4.007714649798507,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 9771366.076,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 9513612.453,
                        "percentageValue": 2.709313883378971,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 17.221713914696082,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 15.584021717140173,
                        "percentageValue": 10.508790524558139,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 21.52747921949451,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 20.20859620102377,
                        "percentageValue": 6.526346537637901,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "LINSAR",
            "details": {
                "averagePrice": {
                    "value": 228.862,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 209.829,
                        "percentageValue": 9.070719490632841,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 220.6,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 404.8,
                        "percentageValue": -45.50395256916996,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 50490.985,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 84948.473,
                        "percentageValue": -40.562810352106034,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.2096685406731912,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.36210706321526065,
                        "percentageValue": -42.09763852395494,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.11123763268157685,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.18044558754432272,
                        "percentageValue": -38.35391920888415,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "MITCHELL&BROWN",
            "details": {
                "averagePrice": {
                    "value": 373.89,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 288.031,
                        "percentageValue": 29.8089441761477,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 127.8,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 136,
                        "percentageValue": -6.029411764705885,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 47798.152,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 39166.114,
                        "percentageValue": 22.039556949663172,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.12146708747975447,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.12165652321461326,
                        "percentageValue": -0.155713585965797,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.10530500197281115,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.08319575623870158,
                        "percentageValue": 26.574968163850443,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "PANASONIC",
            "details": {
                "averagePrice": {
                    "value": 594.212,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 531.487,
                        "percentageValue": 11.801793835032658,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 2799.9,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 3232.9,
                        "percentageValue": -13.393547588852114,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 1663723.182,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 1718268.669,
                        "percentageValue": -3.1744446013640237,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 2.6611556982360294,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 2.891936572797965,
                        "percentageValue": -7.980149935952909,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 3.6653796356545674,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 3.649906685629374,
                        "percentageValue": 0.4239272769935341,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "PHILIPS",
            "details": {
                "averagePrice": {
                    "value": 386.088,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 401.756,
                        "percentageValue": -3.899879528868256,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 3842.9,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 3277.9,
                        "percentageValue": 17.23664541322188,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 1483698.94,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 1316913.955,
                        "percentageValue": 12.664835418195555,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 3.652471599968298,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 2.932190569449859,
                        "percentageValue": 24.564604975643817,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 3.26876486362397,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 2.797358256872878,
                        "percentageValue": 16.85184961893547,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "SAMSUNG",
            "details": {
                "averagePrice": {
                    "value": 547.818,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 560.784,
                        "percentageValue": -2.3121201746126867,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 29318.3,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 28272,
                        "percentageValue": 3.7008347481607218,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 16061085.043,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 15854507.05,
                        "percentageValue": 1.3029606808241878,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 27.865481305615695,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 25.290244296496663,
                        "percentageValue": 10.182728877299803,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 35.38447662450638,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 33.677778291116034,
                        "percentageValue": 5.067728395375052,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "SHARP",
            "details": {
                "averagePrice": {
                    "value": 220.652,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 217.766,
                        "percentageValue": 1.3252757547091814,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 5248.2,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 6746,
                        "percentageValue": -22.202786836643938,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 1158022.94,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 1469042.828,
                        "percentageValue": -21.17160113183576,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 4.98813433889865,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 6.03452136474839,
                        "percentageValue": -17.340016922673858,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 2.5512619814519306,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 3.1205069010037816,
                        "percentageValue": -18.24206571594956,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "SONY",
            "details": {
                "averagePrice": {
                    "value": 837.303,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 856.207,
                        "percentageValue": -2.20787730069948,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 7245.7,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 7351.4,
                        "percentageValue": -1.437821367358596,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 6066864.039,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 6294303.267,
                        "percentageValue": -3.6134138816034924,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 6.886651609953498,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 6.576071799705206,
                        "percentageValue": 4.722877421475461,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 13.366021548190231,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 13.370213861242272,
                        "percentageValue": -0.03135561701218299,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "TCL",
            "details": {
                "averagePrice": {
                    "value": 303.799,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 291.211,
                        "percentageValue": 4.322638911304849,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 481.7,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 864.1,
                        "percentageValue": -44.2541372526328,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 146352.062,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 251635.387,
                        "percentageValue": -41.839634025718325,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.45783017244912155,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.7729661890422598,
                        "percentageValue": -40.769702615790486,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.32243096297185253,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.5345180866777679,
                        "percentageValue": -39.67819405777587,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "TOSHIBA",
            "details": {
                "averagePrice": {
                    "value": 276.832,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 276.865,
                        "percentageValue": -0.011919166380732654,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 5846.3,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 6377.7,
                        "percentageValue": -8.332157360804047,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 1618444.342,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 1765752.656,
                        "percentageValue": -8.34252257808865,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 5.556596506517125,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 5.705064765484111,
                        "percentageValue": -2.6023939266250804,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 3.565624977032481,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 3.750771075895247,
                        "percentageValue": -4.936214317440707,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }, {
            "name": "VISITECH",
            "details": {
                "averagePrice": {
                    "value": 168.23,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 213.715,
                        "percentageValue": -21.283017102215574,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnits": {
                    "value": 15.9,
                    "type": "BASIC",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 34.3,
                        "percentageValue": -53.64431486880466,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenue": {
                    "value": 2674.861,
                    "type": "MONEY",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 7330.43,
                        "percentageValue": -63.51017607425485,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "salesUnitShare": {
                    "value": 0.0151121024329272,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.03068249078133261,
                        "percentageValue": -50.74681993509639,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "revenueShare": {
                    "value": 0.0058930362596862655,
                    "type": "PERCENTAGE",
                    "available": true,
                    "info": null,
                    "growth": {
                        "available": true,
                        "info": null,
                        "actualValue": 0.015571130375734116,
                        "percentageValue": -62.154088255083195,
                        "__typename": "Growth"
                    },
                    "__typename": "Fact"
                },
                "__typename": "BrandDetails"
            },
            "__typename": "Brand"
        }],
        "filteredSummary": {
            "revenue": {
                "value": 40095927.36,
                "type": "MONEY",
                "available": true,
                "info": null,
                "growth": {
                    "available": true,
                    "info": null,
                    "actualValue": 27440044.86285405,
                    "percentageValue": -1.4267539148915405,
                    "__typename": "Growth"
                },
                "__typename": "Fact"
            },
            "salesUnits": {
                "value": 79670.7,
                "type": "BASIC",
                "available": true,
                "info": null,
                "growth": {
                    "available": true,
                    "info": null,
                    "actualValue": 52694.440428145586,
                    "percentageValue": -2.7285603829386664,
                    "__typename": "Growth"
                },
                "__typename": "Fact"
            },
            "averagePrice": {
                "value": 503.27067993628776,
                "type": "MONEY",
                "available": true,
                "info": null,
                "growth": {
                    "available": true,
                    "info": null,
                    "actualValue": 520.7388984473881,
                    "percentageValue": 1.338323430980452,
                    "__typename": "Growth"
                },
                "__typename": "Fact"
            },
            "__typename": "MarketSummary"
        },
        "__typename": "BrandsSummary"
    },
    "outletGroupSummary": null
}