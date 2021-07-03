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
        name: 't shirt',
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