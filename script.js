// Data structure
const data = [
    {
        id: 'activa',
        label: 'ACTIVA',
        code: '20/58',
        level: 0,
        isCollapsible: true,
        isTotal: true,
        years: [3650000, 3717000, 3785070, 3854234, 3924510],
        children: [
            {
                id: 'oprichtingskosten',
                label: 'I. Oprichtingskosten',
                code: '20',
                level: 2,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'vaste-activa',
                label: 'Vaste activa',
                code: '21/28',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [1500000, 1530000, 1560600, 1591812, 1623648],
                children: [
                    {
                        id: 'immateriele-vaste-activa',
                        label: 'II. Immateriële vaste activa',
                        code: '21',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'materiele-vaste-activa',
                        label: 'III. Materiële vaste activa',
                        code: '22/27',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [1500000, 1530000, 1560600, 1591812, 1623648],
                        children: [
                            {
                                id: 'terreinen-gebouwen',
                                label: 'A. Terreinen en gebouwen',
                                code: '22',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [1500000, 1530000, 1560600, 1591812, 1623648],
                                editableValue: 0
                            },
                            {
                                id: 'installaties',
                                label: 'B. Installaties, machines en uitrusting',
                                code: '23',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [850000, 867000, 884340, 902027, 920067],
                                editableValue: 0
                            },
                            {
                                id: 'meubilair',
                                label: 'C. Meubilair en rollend materiëel',
                                code: '24',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [250000, 255000, 260100, 265302, 270608],
                                editableValue: 0
                            },
                            {
                                id: 'leasing',
                                label: 'D. Leasing en soortgelijke rechten',
                                code: '25',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'overige-materiele',
                                label: 'E. Overige materiële vaste activa',
                                code: '26',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [180000, 183600, 187272, 191017, 194838],
                                editableValue: 0
                            },
                            {
                                id: 'activa-aanbouw',
                                label: 'F. Activa in aanbouw en vooruitbetalingen',
                                code: '27',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'financiele-vaste-activa',
                        label: 'IV. Financiële vaste activa',
                        code: '28',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'verbonden-ondernemingen',
                                label: 'A. Verbonden ondernemingen',
                                code: '280/1',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'deelnemingen-verbonden',
                                        label: '1. Deelnemingen',
                                        code: '280',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'vorderingen-verbonden',
                                        label: '2. Vorderingen',
                                        code: '281',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'deelnemingsverhouding',
                                label: 'B. Ondern. waarmee een deelnemingsverhouding bestaat',
                                code: '282/3',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'deelnemingen',
                                        label: '1. Deelnemingen',
                                        code: '282',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'vorderingen',
                                        label: '2. Vorderingen',
                                        code: '283',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'andere-financiele',
                                label: 'C. Andere financiële vaste activa',
                                code: '284/8',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'aandelen',
                                        label: '1. Aandelen',
                                        code: '284',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [450000, 459000, 468180, 477544, 487095],
                                        editableValue: 0
                                    },
                                    {
                                        id: 'vorderingen-borgtochten',
                                        label: '2. Vorderingen en borgtochten in contanten',
                                        code: '285/8',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 'vlottende-activa',
                label: 'Vlottende activa',
                code: '29/58',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'vorderingen-lang',
                        label: 'V. Vorderingen op meer dan één jaar',
                        code: '29',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'handelsvorderingen-lang',
                                label: 'A. Handelsvorderingen',
                                code: '290',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'overige-vorderingen-lang',
                                label: 'B. Overige vorderingen',
                                code: '291',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'voorraden',
                        label: 'VI. Voorraden en bestellingen in uitvoering',
                        code: '3',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'voorraden-detail',
                                label: 'A. Voorraden',
                                code: '30/36',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'grond-hulpstoffen',
                                        label: '1. Grond- en hulpstoffen',
                                        code: '30/31',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'goederen-bewerking',
                                        label: '2. Goederen in bewerking',
                                        code: '32',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'gereed-product',
                                        label: '3. Gereed product',
                                        code: '33',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'handelsgoederen',
                                        label: '4. Handelsgoederen',
                                        code: '34',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'onroerende-goederen',
                                        label: '5. Onroerende goederen bestemd voor verkoop',
                                        code: '35',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'vooruitbetalingen',
                                        label: '6. Vooruitbetalingen',
                                        code: '36',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'bestellingen-uitvoering',
                                label: 'B. Bestellingen in uitvoering',
                                code: '37',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'vorderingen-kort',
                        label: 'VII. Vorderingen op ten hoogste één jaar',
                        code: '40/41',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'handelsvorderingen-kort',
                                label: 'A. Handelsvorderingen',
                                code: '40',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'overige-vorderingen-kort',
                                label: 'B. Overige vorderingen',
                                code: '41',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'geldbeleggingen',
                        label: 'VIII. Geldbeleggingen',
                        code: '50/53',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'eigen-aandelen',
                                label: 'A. Eigen aandelen',
                                code: '50',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'overige-beleggingen',
                                label: 'B. Overige beleggingen',
                                code: '51/53',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [1200000, 1224000, 1248480, 1273450, 1298919],
                                editableValue: 0
                            },
                        ],
                    },
                    {
                        id: 'liquide-middelen',
                        label: 'IX. Liquide middelen',
                        code: '54/58',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [950000, 969000, 988380, 1008150, 1028313],
                        editableValue: 0
                    },
                    {
                        id: 'overlopende-rekeningen',
                        label: 'X. Overlopende rekeningen',
                        code: '490/1',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
        ],
    },
    {
        id: 'passiva',
        label: 'PASSIVA',
        code: '10/49',
        level: 0,
        isCollapsible: true,
        isTotal: true,
        years: [0, 0, 0, 0, 0],
        children: [
            {
                id: 'eigen-vermogen',
                label: 'EIGEN VERMOGEN',
                code: '10/15',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'kapitaal',
                        label: 'I. Kapitaal',
                        code: '10',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'geplaatst-kapitaal',
                                label: 'A. Geplaatst kapitaal',
                                code: '100',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'niet-opgevraagd-kapitaal',
                                label: 'B. Niet-opgevraagd kapitaal',
                                code: '101',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'uitgiftepremies',
                        label: 'II. Uitgiftepremies',
                        code: '11',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'herwaarderingsmeerwaarden',
                        label: 'III. Herwaarderingsmeerwaarden',
                        code: '12',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'reserves',
                        label: 'IV. Reserves',
                        code: '13',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'wettelijke-reserve',
                                label: 'A. Wettelijke reserve',
                                code: '130',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'onbeschikbare-reserves',
                                label: 'B. Onbeschikbare reserves',
                                code: '131',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'reserve-eigen-aandelen',
                                        label: '1. Voor eigen aandelen',
                                        code: '1310',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'andere-onbeschikbare',
                                        label: '2. Andere',
                                        code: '1311',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'belastingvrije-reserves',
                                label: 'C. Belastingvrije reserves',
                                code: '132',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'beschikbare-reserves',
                                label: 'D. Beschikbare reserves',
                                code: '133',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'overgedragen-winst',
                        label: 'V. Overgedragen winst (verlies)',
                        code: '14',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'kapitaalsubsidies',
                        label: 'VI. Kapitaalsubsidies',
                        code: '15',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
            {
                id: 'voorschot-vennoten',
                label: 'Voorschot a/d vennoten op verdeling vh netto-actief',
                code: '19',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'voorzieningen',
                label: 'VOORZIENINGEN EN UITGESTELDE BELASTINGEN',
                code: '16',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'voorzieningen-risicos',
                        label: 'VII. A. Voorzieningen voor risico\'s en kosten',
                        code: '160/5',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'pensioenen',
                                label: '1. Pensioenen en soortgelijke verplichtingen',
                                code: '160',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'belastingen-voorziening',
                                label: '2. Belastingen',
                                code: '161',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'herstellingswerken',
                                label: '3. Grote herstellings- en onderhoudswerken',
                                code: '162',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'milieuverplichtingen',
                                label: '4. Milieuverplichtingen',
                                code: '163',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'overige-risicos',
                                label: '5. Overige risico\'s en kosten',
                                code: '164/5',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'uitgestelde-belastingen',
                        label: 'B. Uitgestelde belastingen',
                        code: '168',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
            {
                id: 'schulden',
                label: 'SCHULDEN',
                code: '17/49',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'schulden-lang',
                        label: 'VIII. Schulden op meer dan één jaar',
                        code: '17',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'financiele-schulden',
                                label: 'A. Financiële schulden',
                                code: '170/4',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'achtergestelde-leningen',
                                        label: '1. Achtergestelde leningen',
                                        code: '170',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'obligatieleningen',
                                        label: '2. Niet-achtergestelde obligatieleningen',
                                        code: '171',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'leasingschulden',
                                        label: '3. Leasingschulden en soortgelijke schulden',
                                        code: '172',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'kredietinstellingen',
                                        label: '4. Kredietinstellingen',
                                        code: '173',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'overige-leningen',
                                        label: '5. Overige leningen',
                                        code: '174',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'handelsschulden-lang',
                                label: 'B. Handelsschulden',
                                code: '175',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'leveranciers-lang',
                                        label: '1. Leveranciers',
                                        code: '1750',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'te-betalen-wissels',
                                        label: '2. Te betalen wissels',
                                        code: '1751',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'vooruitbetalingen-bestellingen',
                                label: 'C. Ontvangen vooruitbetalingen op bestellingen',
                                code: '176',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'overige-schulden-lang',
                                label: 'D. Overige schulden',
                                code: '178/9',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'schulden-kort',
                        label: 'IX. Schulden op ten hoogste één jaar',
                        code: '42/48',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'schulden-vervallen',
                                label: 'A. Schulden > 1jaar die binnen het jaar vervallen',
                                code: '42',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'financiele-schulden-kort',
                                label: 'B. Financiële schulden',
                                code: '43',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'kredietinstellingen-kort',
                                        label: '1. Kredietinstellingen',
                                        code: '430/8',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'overige-leningen-kort',
                                        label: '2. Overige leningen',
                                        code: '439',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'handelsschulden-kort',
                                label: 'C. Handelsschulden',
                                code: '44',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'leveranciers-kort',
                                        label: '1. Leveranciers',
                                        code: '440/4',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'te-betalen-wissels-kort',
                                        label: '2. Te betalen wissels',
                                        code: '441',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'vooruitbetalingen-bestellingen-kort',
                                label: 'D. Ontvangen vooruitbetalingen op bestellingen',
                                code: '46',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'belasting-bezoldiging',
                                label: 'E. Schulden mbt belasting, bezoldiging en soc. lasten',
                                code: '45',
                                level: 3,
                                isCollapsible: true,
                                isTotal: true,
                                years: [0, 0, 0, 0, 0],
                                children: [
                                    {
                                        id: 'belastingen-kort',
                                        label: '1. Belastingen',
                                        code: '450/3',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                    {
                                        id: 'bezoldiging-sociale-lasten',
                                        label: '2. Bezoldigingen en sociale lasten',
                                        code: '454/9',
                                        level: 4,
                                        isCollapsible: false,
                                        isTotal: false,
                                        years: [0, 0, 0, 0, 0],
                                    },
                                ],
                            },
                            {
                                id: 'overige-schulden-kort',
                                label: 'F. Overige schulden',
                                code: '47/48',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'overlopende-rekeningen',
                        label: 'X. Overlopende rekeningen',
                        code: '492/3',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
        ],
    },
    {
        id: 'resultatenrekening',
        label: 'RESULTATENREKENING',
        code: '',
        level: 0,
        isCollapsible: true,
        isTotal: true,
        years: [0, 0, 0, 0, 0],
        children: [
            {
                id: 'bedrijfsopbrengsten',
                label: 'I. Bedrijfsopbrengsten',
                code: '70/76A',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'omzet',
                        label: 'A. Omzet',
                        code: '70',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [1800000, 1836000, 1872720, 1910174, 1948378],
                        editableValue: 0
                    },
                    {
                        id: 'voorraad-toename',
                        label: 'B. Voorraad gib., gp., biu.:toename (afname)',
                        code: '71',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'geproduceerde-vaste-activa',
                        label: 'C. Geproduceerde vaste activa',
                        code: '72',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'andere-bedrijfsopbrengsten',
                        label: 'D. Andere bedrijfsopbrengsten',
                        code: '74',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [350000, 357000, 364140, 371423, 378851],
                        editableValue: 0
                    },
                    {
                        id: 'niet-recurrente-opbrengsten',
                        label: 'E. Niet-recurrente bedrijfsopbrengsten',
                        code: '76A',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
            {
                id: 'bedrijfskosten',
                label: 'II. Bedrijfskosten',
                code: '60/66A',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'handelsgoederen',
                        label: 'A. Handelsgoederen, grond- en hulpstoffen',
                        code: '60',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'aankopen',
                                label: '1. Aankopen',
                                code: '600/8',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'voorraad-afname',
                                label: '2. Voorraad: afname (toename)',
                                code: '609',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'diensten-goederen',
                        label: 'B. Diensten en diverse goederen',
                        code: '61',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'bezoldigingen',
                        label: 'C. Bezoldigingen, sociale lasten en pensioenen',
                        code: '62',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'afschrijvingen',
                        label: 'D. Afschrijvingen en waardeverminderingen',
                        code: '630',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'waardevermindering-voorraden',
                        label: 'E. Waardeverm. op voorraden, biu. en handelsvord.',
                        code: '631/4',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'voorzieningen-risicos',
                        label: 'F. Voorzieningen voor risico\'s en kosten',
                        code: '635/8',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'andere-bedrijfskosten',
                        label: 'G. Andere bedrijfskosten',
                        code: '640/8',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'herstructureringskosten',
                        label: 'H. Als herstructureringskosten geactiveerde bedrijfsk.',
                        code: '649',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'niet-recurrente-kosten',
                        label: 'I. Niet-recurrente bedrijfskosten',
                        code: '66A',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
            {
                id: 'bedrijfswinst',
                label: 'III. Bedrijfswinst / Bedrijfsverlies',
                code: '9901',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'financiele-opbrengsten',
                label: 'IV. Financiële opbrengsten',
                code: '75/76B',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'recurrente-financiele-opbrengsten',
                        label: 'A. Recurrente financiële opbrengsten',
                        code: '75',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'opbrengsten-vaste-activa',
                                label: '1. Opbrengsten uit financiële vaste activa',
                                code: '750',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'opbrengsten-vlottende-activa',
                                label: '2. Opbrengsten uit vlottende activa',
                                code: '751',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'andere-financiele-opbrengsten',
                                label: '3. Andere financiële opbrengsten',
                                code: '752/9',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'niet-recurrente-financiele-opbrengsten',
                        label: 'B. Niet-recurrente financiële opbrengsten',
                        code: '76B',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
            {
                id: 'financiele-kosten',
                label: 'V. Financiële kosten',
                code: '65/66B',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'recurrente-financiele-kosten',
                        label: 'A. Recurrente financiële kosten',
                        code: '65',
                        level: 2,
                        isCollapsible: true,
                        isTotal: true,
                        years: [0, 0, 0, 0, 0],
                        children: [
                            {
                                id: 'kosten-schulden',
                                label: '1. Kosten van schulden',
                                code: '650',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'waardevermindering-vlottende',
                                label: '2. Waardeverminderingen op vlottende activa',
                                code: '651',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                            {
                                id: 'andere-financiele-kosten',
                                label: '3. Andere financiële kosten',
                                code: '652/9',
                                level: 3,
                                isCollapsible: false,
                                isTotal: false,
                                years: [0, 0, 0, 0, 0],
                            },
                        ],
                    },
                    {
                        id: 'niet-recurrente-financiele-kosten',
                        label: 'B. Niet-recurrente financiële kosten',
                        code: '66B',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
            {
                id: 'winst-verlies-boekjaar',
                label: 'VI. W/V van het boekjaar voor belasting',
                code: '9903',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'uitgestelde-belastingen',
                label: 'VIbis. A. Onttrekking aan uitgestelde belastingen',
                code: '780',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'overboeking-uitgestelde',
                label: 'B. Overboeking naar uitgestelde belastingen',
                code: '680',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'belastingen-resultaat',
                label: 'VII. Belastingen op het resultaat',
                code: '67/77',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'belastingen',
                        label: 'A. Belastingen',
                        code: '670/3',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'regularisering-belastingen',
                        label: 'B. Regularisering van belastingen',
                        code: '77',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
            {
                id: 'winst-verlies-boekjaar-na-belasting',
                label: 'VIII. W/V van het boekjaar',
                code: '9904',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'onttrekking-belastingvrije',
                label: 'IX. Onttrekking aan belastingvrije reserve',
                code: '789',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'overboeking-belastingvrije',
                label: 'Overboeking naar belastingvrije reserve',
                code: '689',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'te-bestemmen-winst',
                label: 'X. Te bestemmen winst / verlies van het bj.',
                code: '9905',
                level: 1,
                isCollapsible: false,
                isTotal: false,
                years: [0, 0, 0, 0, 0],
            },
            {
                id: 'uit-te-keren-winst',
                label: 'Uit te keren winst',
                code: '694/7',
                level: 1,
                isCollapsible: true,
                isTotal: true,
                years: [0, 0, 0, 0, 0],
                children: [
                    {
                        id: 'vergoeding-kapitaal',
                        label: '1. Vergoeding kapitaal',
                        code: '694',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'bestuurders-zaakvoerders',
                        label: '2. Bestuurders of zaakvoerders',
                        code: '695',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'werknemers',
                        label: '3. Werknemers',
                        code: '695',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                    {
                        id: 'andere-rechthebbenden',
                        label: '4. Andere rechthebbenden',
                        code: '697',
                        level: 2,
                        isCollapsible: false,
                        isTotal: false,
                        years: [0, 0, 0, 0, 0],
                    },
                ],
            },
        ],
    },
];

// Helper functions
function formatNumber(num) {
    if (num === 0 || num === null || num === undefined) return '-';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '');
}

function calculateTotal(children) {
    if (!children || !Array.isArray(children)) return 0;
    return children.reduce((acc, child) => {
        if (child.isTotal && child.children) {
            return acc + calculateTotal(child.children);
        }
        return acc + (Number(child.editableValue) || 0);
    }, 0);
}

function getRowValue(row) {
    if (row && row.isTotal && row.children) {
        return calculateTotal(row.children);
    }
    return Number(row?.editableValue || 0);
}

function calculateRowValueByCode(code) {
    // Special formulas for specific codes
    if (code === '9905') {
        // Te bestemmen winst/verlies = W/V van het boekjaar (9904) + Onttrekking belastingvrije (789) - Overboeking belastingvrije (689)
        const wvBoekjaarRow = findRowByCode('9904');
        const onttrekkingRow = findRowByCode('789');
        const overboekingRow = findRowByCode('689');
        
        return getRowValue(wvBoekjaarRow) + getRowValue(onttrekkingRow) - getRowValue(overboekingRow);
    }
    else if (code === '9904') {
        // W/V van het boekjaar = W/V voor belasting (9903) + Uitgestelde belastingen (780) - Overboeking uitgestelde (680) - Belastingen (67/77)
        const wvVoorBelastingRow = findRowByCode('9903');
        const uitgesteldeRow = findRowByCode('780');
        const overboekingUitgesteldeRow = findRowByCode('680');
        const belastingenRow = findRowByCode('67/77');
        
        return getRowValue(wvVoorBelastingRow) + getRowValue(uitgesteldeRow) - getRowValue(overboekingUitgesteldeRow) + getRowValue(belastingenRow);
    }
    
    // Normal calculation for other codes
    const row = findRowByCode(code);
    return getRowValue(row);
}

function findRowByCode(code) {
    function searchInRows(rows) {
        for (const row of rows) {
            if (row.code === code) return row;
            if (row.children) {
                const found = searchInRows(row.children);
                if (found) return found;
            }
        }
        return null;
    }
    return searchInRows(data);
}

function updateControlBar() {
    // Calculate totals from input fields using calculateTotal function
    const activaRow = findRowByCode('20/58');
    const passivaRow = findRowByCode('10/49');
    
    const resultRow9905 = findRowByCode('9905');
    const resultRow6947 = findRowByCode('694/7');

    const activaTotal = activaRow && activaRow.children ? calculateTotal(activaRow.children) : 0;
    const passivaTotal = passivaRow && passivaRow.children ? calculateTotal(passivaRow.children) : 0;
    const controlTotal = resultRow9905 && resultRow6947 ? (getRowValue(resultRow9905)-getRowValue(resultRow6947)) : 0;

    const controlBar = document.getElementById('controlBar') || createControlBar();
    const activaElement = controlBar.querySelector('#activa-total');
    const passivaElement = controlBar.querySelector('#passiva-total');
    const controleElement = controlBar.querySelector('#controle-total');

    activaElement.textContent = `Activa: ${formatNumber(activaTotal)}`;
    passivaElement.textContent = `Passiva: ${formatNumber(passivaTotal)}`;
    controleElement.textContent = `Controle resultatenrekening: ${formatNumber(controlTotal)}`;

    const activaTotalElement = document.getElementById('activa-total');
    const passivaTotalElement = document.getElementById('passiva-total');
    const controleTotalElement = document.getElementById('controle-total');

    let backgroundColor = activaTotal === passivaTotal ? '#D6EADC' : '#EECCE0';

    activaTotalElement.style.backgroundColor = backgroundColor;
    passivaTotalElement.style.backgroundColor = backgroundColor;
    
    // Use a different variable or reassign for the control total background
    backgroundColor = (controlTotal == 0) ? '#D6EADC' : '#EECCE0';
    controleTotalElement.style.backgroundColor = backgroundColor;
}

function createControlBar() {
    const controlBar = document.createElement('div');
    controlBar.id = 'controlBar';
    controlBar.className = 'control-bar';

    const totalsContainer = document.createElement('div');
    const activaPassivaTotalsContainer = document.createElement('div');
    activaPassivaTotalsContainer. className = 'activa-passiva-totals-container'
    totalsContainer.className = 'totals-container';

    const activaTotal = document.createElement('span');
    activaTotal.id = 'activa-total';
    activaTotal.className = 'total-badge';
    const passivaTotal = document.createElement('span');
    passivaTotal.id = 'passiva-total';
    passivaTotal.className = 'total-badge';
    const controleTotal = document.createElement('span');
    controleTotal.id = 'controle-total';
    controleTotal.className = 'total-badge';

    const saveButton = document.createElement('button');
    saveButton.className = 'save-button';
    saveButton.textContent = 'Save column';

    activaPassivaTotalsContainer.appendChild(activaTotal);
    activaPassivaTotalsContainer.appendChild(passivaTotal);
    totalsContainer.appendChild(activaPassivaTotalsContainer);
    totalsContainer.appendChild(controleTotal);
    controlBar.appendChild(totalsContainer);
    totalsContainer.appendChild(saveButton);

    document.body.appendChild(controlBar);
    return controlBar;
}

function createRow(row) {
    const tr = document.createElement('tr');
    tr.className = `level-${row.level}`;
    if (row.isTotal) tr.classList.add('total-row');

    // Icon column
    const iconCell = document.createElement(row.level === 0 ? 'th' : 'td');
    iconCell.className = 'icon-column';
    if (row.isCollapsible && row.level === 0) {
        const icon = document.createElement('span');
        icon.className = 'collapse-icon';
        icon.innerHTML = '▼';
        icon.onclick = () => toggleCollapse(tr);
        iconCell.appendChild(icon);
    }
    tr.appendChild(iconCell);

    // Code column
    const codeCell = document.createElement(row.level === 0 ? 'th' : 'td');
    codeCell.className = 'code-column';
    codeCell.textContent = row.code || '';
    tr.appendChild(codeCell);

    // Description column
    const descCell = document.createElement(row.level === 0 ? 'th' : 'td');
    descCell.className = 'description-column';
    descCell.textContent = row.label;
    tr.appendChild(descCell);

    // Year columns
    row.years.forEach(year => {
        const yearCell = document.createElement(row.level === 0 ? 'th' : 'td');
        yearCell.className = 'year-column';
        yearCell.textContent = formatNumber(year);
        tr.appendChild(yearCell);
    });

    // Edit column
    const editCell = document.createElement(row.level === 0 ? 'th' : 'td');
    editCell.className = 'edit-column';
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'edit-input';
    
    // Special handling for codes 9905 and 9904
    if (row.code === '9905' || row.code === '9904') {
        input.value = formatNumber(calculateRowValueByCode(row.code));
        input.readOnly = true;
    } else if (row.isTotal) {
        input.value = formatNumber(calculateTotal(row.children));
        input.readOnly = true;
    } else {
        input.value = row.editableValue || '';
        input.onchange = (e) => handleValueChange(row.id, e.target.value);
    }
    
    editCell.appendChild(input);
    tr.appendChild(editCell);

    return tr;
}

function toggleCollapse(row) {
    const icon = row.querySelector('.collapse-icon');
    const nextRow = row.nextElementSibling;
    if (nextRow && nextRow.classList.contains('child-rows')) {
        nextRow.classList.toggle('collapsed');
        icon.innerHTML = nextRow.classList.contains('collapsed') ? '▶' : '▼';
    }
}

function handleValueChange(id, value) {
    // Update the data structure
    function updateRow(rows) {
        for (const row of rows) {
            if (row.id === id) {
                row.editableValue = value;
                return true;
            }
            if (row.children && updateRow(row.children)) {
                return true;
            }
        }
        return false;
    }
    updateRow(data);

    // Re-render the table and update control bar
    renderTable();
    updateControlBar();
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    function renderRow(row, level = 0) {
        const tr = createRow(row);
        tbody.appendChild(tr);

        if (row.isCollapsible && row.children) {
            const childRows = document.createElement('tr');
            childRows.className = 'child-rows';
            
            const childCell = document.createElement('td');
            childCell.colSpan = 9;
            
            const childTable = document.createElement('table');
            childTable.className = 'balance-sheet-table';
            
            const childTbody = document.createElement('tbody');
            
            row.children.forEach(child => {
                renderNestedRow(child, childTbody);
            });
            
            childTable.appendChild(childTbody);
            childCell.appendChild(childTable);
            childRows.appendChild(childCell);
            tbody.appendChild(childRows);
        }
    }

    function renderNestedRow(row, parentTbody) {
        const tr = createRow(row);
        parentTbody.appendChild(tr);
        
        if (row.isCollapsible && row.children) {
            const childRows = document.createElement('tr');
            childRows.className = 'child-rows';
            
            const childCell = document.createElement('td');
            childCell.colSpan = 9;
            
            const childTable = document.createElement('table');
            childTable.className = 'balance-sheet-table';
            
            const childTbody = document.createElement('tbody');
            
            row.children.forEach(child => {
                renderNestedRow(child, childTbody);
            });
            
            childTable.appendChild(childTbody);
            childCell.appendChild(childTable);
            childRows.appendChild(childCell);
            parentTbody.appendChild(childRows);
        }
    }

    data.forEach(row => renderRow(row));
}

// Initialize the table and control bar
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    updateControlBar();
}); 