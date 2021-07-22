const weapons = [
    {
        name: 'Baseball Grenade',
        quantity: 2,
        type: 'grenade',
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
        type: 'grenade',
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
        type: 'weapon',
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
        type: 'grenade',
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
        type: 'grenade',
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
        name: 'Suppressed Calibrated Poweful 10mm Pistol',
        type: 'weapon',
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
        type: 'weapon',
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
        type: 'weapon',
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
        blurb: 'Automatically use a Stimpack when hit while health is 25% or less, once every 60 seconds.',
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
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
    {
        name: 'Cryo Mine',
        type: 'grenade',
        stats: []
    },
]
const misc = []
const junk = []
const mods = []
const ammo = []

module.exports = {weapons, apparel, aid, misc, junk, mods, ammo};