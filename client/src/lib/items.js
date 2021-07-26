const weapons = [
    {
        name: 'Baseball Grenade',
        quantity: 2,
        type: ['grenade'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'physical',
                        value: 200
                    }
                ]
            },
            {
                statName: 'Fire Rate',
                value: 0
            },
            {
                statName: 'Range',
                value: 93
            },
            {
                statName: 'Accuracy',
                value: 0
            },
            {
                statName: 'Weight',
                value: 1
            },
            {
                statName: 'Value',
                value: 40
            }
        ]
    },
    {
        name: 'Cryo Mine',
        quantity: 1,
        type: ['grenade'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'physical',
                        value: 60
                    }
                ]
            },
            {
                statName: 'Fire Rate',
                value: 0
            },
            {
                statName: 'Range',
                value: 93
            },
            {
                statName: 'Accuracy',
                value: 0
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 50
            }
        ]
    },
    {
        name: 'Electrified Chinese Officer Sword',
        type: ['weapon'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'physical',
                        value: 85
                    },
                    {
                        icon: 'energy',
                        value: 20
                    }
                ]
            },
            {
                statName: 'Speed',
                value: 'MEDIUM'
            },
            {
                statName: 'Weight',
                value: 3
            },
            {
                statName: 'Value',
                value: 100
            }
        ]
    },
    {
        name: 'Fragmentation Grenade',
        quantity: 2,
        type: ['grenade'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'physical',
                        value: 300
                    }
                ]
            },
            {
                statName: 'Fire Rate',
                value: 0
            },
            {
                statName: 'Range',
                value: 93
            },
            {
                statName: 'Accuracy',
                value: 0
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 50
            }
        ]
    },
    {
        name: 'Fragmentation Mine',
        quantity: 4,
        type: ['grenade'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'physical',
                        value: 250
                    }
                ]
            },
            {
                statName: 'Fire Rate',
                value: 0
            },
            {
                statName: 'Range',
                value: 93
            },
            {
                statName: 'Accuracy',
                value: 0
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 50
            }
        ]
    },
    {
        name: 'Gamma Gun',
        type: ['weapon'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'radiation',
                        value: 141
                    }
                ]
            },
            {
                statName: 'Ammo',
                value: 'Gamma Round'
            },
            {
                statName: 'Fire Rate',
                value: 66
            },
            {
                statName: 'Range',
                value: 119
            },
            {
                statName: 'Accuracy',
                value: 69
            },
            {
                statName: 'Weight',
                value: 3.0
            },
            {
                statName: 'Value',
                value: 156
            }
        ]
    },
    {
        name: 'Suppressed Calibrated Poweful 10mm Pistol',
        type: ['weapon'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'physical',
                        value: 60
                    }
                ]
            },
            {
                statName: 'Ammo',
                value: '10mm'
            },
            {
                statName: 'Fire Rate',
                value: 46
            },
            {
                statName: 'Range',
                value: 89
            },
            {
                statName: 'Accuracy',
                value: 77
            },
            {
                statName: 'Weight',
                value: 6.9
            },
            {
                statName: 'Value',
                value: 180
            }
        ]
    },
    {
        name: 'Suppressed Hardened Pipe Bolt-Action Sniper Rifle',
        type: ['weapon'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'physical',
                        value: 85
                    }
                ]
            },
            {
                statName: 'Ammo',
                value: '.308'
            },
            {
                statName: 'Fire Rate',
                value: 2
            },
            {
                statName: 'Range',
                value: 185
            },
            {
                statName: 'Accuracy',
                value: 106
            },
            {
                statName: 'Weight',
                value: 7.3
            },
            {
                statName: 'Value',
                value: 94
            }
        ]
    },
    {
        name: 'Two Shot Boosted Automatic Laser Rifle',
        type: ['weapon'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: 'energy',
                        value: 91
                    }
                ]
            },
            {
                statName: 'Ammo',
                value: 'Cell'
            },
            {
                statName: 'Fire Rate',
                value: 100
            },
            {
                statName: 'Range',
                value: 227
            },
            {
                statName: 'Accuracy',
                value: 77
            },
            {
                statName: 'Weight',
                value: 6.9
            },
            {
                statName: 'Value',
                value: 360
            }
        ]
    }
]
const apparel = [
    {
        name: `Assault Gas Mask`,
        type: ['helmet', 'eyes', 'mask'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 1
                    },
                    {
                        icon: 'energy',
                        value: 0
                    },
                    {
                        icon: 'radiation',
                        value: 15
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 3
            },
            {
                statName: 'Value',
                value: 25
            }
        ]
    },
    {
        name: `Auto Stim Medium Metal Left Arm`,
        type: ['l-arm'],
        blurb: 'Automatically use a Stimpak when hit while health is 25% or less, once every 60 seconds.',
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 17
                    },
                    {
                        icon: 'energy',
                        value: 8
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 7.9
            },
            {
                statName: 'Value',
                value: 125
            }
        ]
    },
    {
        name: `Disciples Cowl`,
        type: ['helmet', 'eyes'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 9
                    },
                    {
                        icon: 'energy',
                        value: 11
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 10
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    },
    {
        name: `Kellogg's Outfit`,
        type: ['underarmor'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 30
                    },
                    {
                        icon: 'energy',
                        value: 30
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 2.4
            },
            {
                statName: 'Value',
                value: 120
            }
        ]
    },
    {
        name: `Light Combat Armor Left Arm Gunners`,
        type: ['l-arm'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 9
                    },
                    {
                        icon: 'energy',
                        value: 9
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 2
            },
            {
                statName: 'Value',
                value: 25
            }
        ]
    },
    {
        name: `Light Combat Armor Right Leg`,
        type: ['r-leg'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 8
                    },
                    {
                        icon: 'energy',
                        value: 8
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 2
            },
            {
                statName: 'Value',
                value: 25
            }
        ]
    },
    {
        name: `Medium Combat Armor Left Leg`,
        type: ['l-leg'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 12
                    },
                    {
                        icon: 'energy',
                        value: 12
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 4.5
            },
            {
                statName: 'Value',
                value: 105
            }
        ]
    },
    {
        name: `Medium Metal Chest Piece`,
        type: ['chest'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 25
                    },
                    {
                        icon: 'energy',
                        value: 15
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 15.5
            },
            {
                statName: 'Value',
                value: 115
            }
        ]
    },
    {
        name: `Medium Metal Right Arm`,
        type: ['r-arm'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 15
                    },
                    {
                        icon: 'energy',
                        value: 8
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 7.9
            },
            {
                statName: 'Value',
                value: 65
            }
        ]
    },
    {
        name: `Pack Chest Armor`,
        type: ['chest'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 43
                    },
                    {
                        icon: 'energy',
                        value: 43
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 19
            },
            {
                statName: 'Value',
                value: 138
            }
        ]
    },
    {
        name: `Striped Bandana`,
        type: ['mask'],
        stats: [
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 1
            }
        ]
    },
    {
        name: `Utility Coveralls`,
        type: ['underarmor'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 10
                    },
                    {
                        icon: 'energy',
                        value: 0
                    }
                ]
            },
            {
                statName: 'Weight',
                value: 2
            },
            {
                statName: 'Value',
                value: 13
            }
        ]
    },
    {
        name: `Yellow Flight Helmet`,
        type: ['helmet'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: 'physical',
                        value: 2
                    },
                    {
                        icon: 'energy',
                        value: 5
                    }
                ]
            },
            {
                statName: 'PER',
                value: 1
            },
            {
                statName: 'Weight',
                value: 2
            },
            {
                statName: 'Value',
                value: 25
            }
        ]
    }
]
const aid = [
    {
        name: 'Addictol',
        quantity: 1,
        type: ['stinky'],
        blurb: 'Cures Illness',
        stats: [
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 75
            }
        ]
    },
    {
        name: 'Buffout',
        quantity: 11,
        type: ['stinky'],
        stats: [
            {
                statName: 'STR',
                value: 2
            },
            {
                statName: 'END',
                value: 2
            },
            {
                statName: 'Max HP',
                value: 50
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 45
            }
        ]
    },
    {
        name: 'Dandy Boy Apples',
        quantity: 2,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 10
            },
            {
                statName: 'Rads',
                value: 3
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 75
            }
        ]
    },
    {
        name: 'Day Tripper',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'LCK',
                value: 3
            },
            {
                statName: 'CHR',
                value: 3
            },
            {
                statName: 'STR',
                value: -2
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 40
            }
        ]
    },
    {
        name: 'Fancy Lad Snack Cakes',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 10
            },
            {
                statName: 'Rads',
                value: 4
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 18
            }
        ]
    },
    {
        name: 'Herbal Anodyne',
        quantity: 1,
        blurb: 'Resists Insomnia & Weakness',
        type: ['stinky'],
        stats: [
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    },
    {
        name: 'Iguana On A Stick',
        quantity: 2,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 40
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 33
            }
        ]
    },
    {
        name: 'InstaMash',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 20
            },
            {
                statName: 'Rads',
                value: 7
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    },
    {
        name: 'Jet',
        quantity: 9,
        type: ['stinky'],
        blurb: 'Slows time for 10 seconds.',
        stats: [        
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 50
            }
        ]
    },
    {
        name: 'Med-X',
        quantity: 11,
        type: ['stinky'],
        stats: [
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: null,
                        value: 25
                    }
                ]
            },
            {
                statName: 'Poison Resist',
                value: 250
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 50
            }
        ]
    },
    {
        name: 'Mentats',
        quantity: 9,
        type: ['stinky'],
        stats: [
            {
                statName: 'INT',
                value: 2
            },
            {
                statName: 'PER',
                value: 2
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 50
            }
        ]
    },
    {
        name: 'Noodle Cup',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 40
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    },
    {
        name: 'Nuka Cherry',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 50
            },
            {
                statName: 'Rads',
                value: 5
            },
            {
                statName: 'AP',
                value: 25
            },
            {
                statName: 'Weight',
                value: 1
            },
            {
                statName: 'Value',
                value: 40
            }
        ]
    },
    {
        name: 'Nuka Cola',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 20
            },
            {
                statName: 'Rads',
                value: 5
            },
            {
                statName: 'AP',
                value: 10
            },
            {
                statName: 'Weight',
                value: 1
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    },
    {
        name: 'Orange Mentats',
        quantity: 1,
        type: ['stinky'],
        blurb: '+10% VATS Accuracy',
        stats: [
            {
                statName: 'PER',
                value: 5
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 60
            }
        ]
    },
    {
        name: `Pork n' Beans`,
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 20
            },
            {
                statName: 'Rads',
                value: 6
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 10
            }
        ]
    },
    {
        name: 'Potato Crisps',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 10
            },
            {
                statName: 'Rads',
                value: 7
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 7
            }
        ]
    },
    {
        name: 'Psycho',
        quantity: 6,
        type: ['stinky'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: null,
                        value: '25%'
                    }
                ]
            },
            {
                statName: 'DMG Resist',
                damType: [
                    {
                        icon: null,
                        value: 25
                    }
                ]
            },
            
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 50
            }
        ]
    },
    {
        name: 'Psychobuff',
        quantity: 5,
        type: ['stinky'],
        stats: [
            {
                statName: 'Damage',
                damType: [
                    {
                        icon: null,
                        value: '25%'
                    }
                ]
            },
            {
                statName: 'STR',
                value: 3
            },
            {
                statName: 'END',
                value: 3
            },
            {
                statName: 'Max HP',
                value: 65
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 70
            }
        ]
    },
    {
        name: 'Purified Water',
        quantity: 4,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 40
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    },
    {
        name: 'Rad-X',
        quantity: 14,
        type: ['stinky'],
        stats: [
            {
                statName: 'Rad Resist',
                value: 100
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 40
            }
        ]
    },
    {
        name: 'RadAway',
        quantity: 20,
        type: ['stinky'],
        stats: [
            {
                statName: 'Rads',
                value: '-300'
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 80
            }
        ]
    },
    {
        name: 'Salisbury Steak',
        quantity: 2,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 30
            },
            {
                statName: 'Rads',
                value: 9
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    },
    {
        name: 'Squirrel On A Stick',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 45
            },
            {
                statName: 'Weight',
                value: 0.1
            },
            {
                statName: 'Value',
                value: 15
            }
        ]
    },
    {
        name: 'Stimpak',
        quantity: 12,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: '30%'
            },
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 48
            }
        ]
    },
    {
        name: 'Sugar Bombs',
        quantity: 2,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 15
            },
            {
                statName: 'Rads',
                value: 7
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 1
            }
        ]
    },
    {
        name: 'Yum Yum Deviled Eggs',
        quantity: 1,
        type: ['stinky'],
        stats: [
            {
                statName: 'HP',
                value: 15
            },
            {
                statName: 'Rads',
                value: 5
            },
            {
                statName: 'Weight',
                value: 0.5
            },
            {
                statName: 'Value',
                value: 20
            }
        ]
    }
]
const misc = []
const junk = []
const mods = []
const ammo = [
    {
        name: '.308 Round',
        quantity: 43,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 7
            }
        ]
    },
    {
        name: '.38 Round',
        quantity: 35,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 3
            }
        ]
    },
    {
        name: '.45 Round',
        quantity: 13,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 4
            }
        ]
    },
    {
        name: '10mm Round',
        quantity: 98,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 3
            }
        ]
    },
    {
        name: '5.56 Round',
        quantity: 43,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 5
            }
        ]
    },
    {
        name: 'Fusion Cell',
        quantity: 69,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 4
            }
        ]
    },
    {
        name: 'Fusion Core',
        quantity: 2,
        type: ['bullet'],
        stats: [
            {
                statName: 'Charge',
                value: '100/100'
            },
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 200
            }
        ]
    },
    {
        name: 'Gamma Round',
        quantity: 21,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 10
            }
        ]
    },
    {
        name: 'Plasma Cartridge',
        quantity: 18,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 6
            }
        ]
    },
    {
        name: 'Shotgun Shell',
        quantity: 5,
        type: ['bullet'],
        stats: [
            {
                statName: 'Weight',
                value: 0
            },
            {
                statName: 'Value',
                value: 5
            }
        ]
    }
]

module.exports = {weapons, apparel, aid, misc, junk, mods, ammo};