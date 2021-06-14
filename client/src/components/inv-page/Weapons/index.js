import './weapons.css'

function Weapons() {
/* character stats like damage and armor value could be stored in global store */
    const items = [
        {
            name: 'Baseball Grenade',
            quantity: 2,
            type: 'grenade',
            Damage: {
                physical: 200
            },
            'Fire Rate': 0,
            Range: 93,
            Accuracy: 0,
            Weight: 1,
            Value: 40
        },
        {
            name: 'Cryo Mine',
            quantity: 1,
            type: 'grenade',
            Damage: {
                physical: 60
            },
            'Fire Rate': 0,
            Range: 93,
            Accuracy: 0,
            Weight: 0.5,
            Value: 50
        },
        {
            name: 'Electrified Chinese Officer Sword',
            type: 'weapon',
            Damage: {
                physical: 85,
                energy: 20
            },
            Speed: 'MEDIUM',
            Weight: 3,
            Value: 100
        },
        {
            name: 'Fragmentation Grenade',
            quantity: 2,
            type: 'grenade',
            Damage: {
                physical: 300
            },
            'Fire Rate': 0,
            Range: 93,
            Accuracy: 0,
            Weight: 0.5,
            Value: 50
        },
        {
            name: 'Fragmentation Mine',
            quantity: 4,
            type: 'grenade',
            Damage: {
                physical: 250
            },
            'Fire Rate': 0,
            Range: 93,
            Accuracy: 0,
            Weight: 0.5,
            Value: 50
        },
        {
            name: 'Suppressed Calibrated Poweful 10mm Pistol',
            type: 'weapon',
            Damage: {
                physical: 55
            },
            ammo: '10mm',
            'Fire Rate': 46,
            Range: 89,
            Accuracy: 77,
            Weight: 6.9,
            Value: 180
        },
        {
            name: 'Suppressed Hardened Pipe Bolt-Action Sniper Rifle',
            type: 'weapon',
            Damage: {
                physical: 85
            },
            ammo: '.308',
            'Fire Rate': 2,
            Range: 185,
            Accuracy: 106,
            Weight: 7.3,
            Value: 94
        },
        {
            name: 'Two Shot Boosted Automatic Laser Rifle',
            type: 'weapon',
            Damage: {
                energy: 91
            },
            ammo: 'Cell',
            'Fire Rate': 100,
            Range: 227,
            Accuracy: 77,
            Weight: 6.9,
            Value: 360
        },
    ]

    console.log(items)

    return (
    <main className='flex-center'>
        <div className='inventory-grid'>
            <section className='small-text item-list'>
                <ul>
                    <li>Baseball Grenade (2)</li>
                    <li>Cryo Mine</li>
                    <li>Electrified Chinese Officer Sword</li>
                    <li>Fragmentation Grenade</li>
                    <li>Fragmentation Mine</li>
                    <li>Suppressed Calibrated Powerful 10mm Pistol</li>
                    <li>Suppressed Hardened Pipe Bolt-Action Sniper Rifle</li>
                    <li>Two Shot Boosted Automatic Laser Rifle</li>
                </ul>
            </section>
            <section className='item-details-container'>
                <div></div>
                
                    <ul className='small-text'>
                         <li>
                             <div>Damage</div>
                             <div>
                                <svg className='stat-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="1.1">
                                    <g id="surface1">
                                    <path d="M 89.8125 37.761719 C 83.699219 31.644531 76.300781 28.160156 67.625 27.308594 L 67.625 36.691406 L 66.558594 39.464844 L 64 40.320312 L 61.226562 39.464844 L 60.160156 36.691406 L 60.160156 27.308594 C 51.484375 28.160156 44.019531 31.644531 37.761719 37.761719 C 31.644531 44.019531 28.160156 51.484375 27.308594 60.160156 L 35.839844 60.160156 L 38.613281 61.226562 L 39.679688 64 L 38.613281 66.558594 L 35.839844 67.625 L 27.308594 67.625 C 28.160156 76.300781 31.644531 83.769531 37.761719 90.027344 C 44.019531 96.140625 51.484375 99.625 60.160156 100.480469 L 60.160156 91.09375 L 61.226562 88.535156 C 61.9375 87.679688 62.863281 87.253906 64 87.253906 C 64.996094 87.253906 65.847656 87.679688 66.558594 88.535156 L 67.625 91.09375 L 67.625 100.480469 C 76.300781 99.625 83.699219 96.140625 89.8125 90.027344 C 96.070312 83.769531 99.625 76.300781 100.480469 67.625 L 91.09375 67.625 L 88.535156 66.558594 C 87.679688 65.847656 87.253906 64.996094 87.253906 64 C 87.253906 62.863281 87.679688 61.9375 88.535156 61.226562 L 91.09375 60.160156 L 100.480469 60.160156 C 99.625 51.484375 96.070312 44.019531 89.8125 37.761719 M 66.558594 1.066406 L 67.625 3.625 L 67.625 19.625 C 78.4375 20.621094 87.609375 24.960938 95.148438 32.640625 C 102.828125 40.179688 107.09375 49.351562 107.945312 60.160156 L 124.160156 60.160156 L 126.71875 61.226562 L 128 64 L 126.71875 66.558594 L 124.160156 67.625 L 107.945312 67.625 C 107.09375 78.4375 102.828125 87.609375 95.148438 95.148438 C 87.609375 102.828125 78.4375 107.09375 67.625 107.945312 L 67.625 124.160156 L 66.558594 126.71875 L 64 128 C 62.863281 128 61.9375 127.574219 61.226562 126.71875 L 60.160156 124.160156 L 60.160156 107.945312 C 49.351562 107.09375 40.105469 102.828125 32.425781 95.148438 C 24.890625 87.609375 20.621094 78.4375 19.625 67.625 L 3.625 67.625 L 1.066406 66.558594 L 0 64 L 1.066406 61.226562 L 3.625 60.160156 L 19.625 60.160156 C 20.621094 49.351562 24.890625 40.179688 32.425781 32.640625 C 40.105469 24.960938 49.351562 20.621094 60.160156 19.625 L 60.160156 3.625 L 61.226562 1.066406 L 64 0 L 66.558594 1.066406 "/>
                                    </g>
                                </svg>
                                 200
                             </div>
                         </li>
                         <li>
                             <div>Fire Rate</div>
                            <div>0</div>
                         </li>
                         <li>
                             <div>Range</div>
                             <div>93</div>
                         </li>
                         <li>
                             <div>Accuracy</div>
                             <div>0</div>
                         </li>
                         <li>
                             <div>Weight</div>
                             <div>1</div>
                         </li>
                         <li>
                             <div>Value</div>
                             <div>40</div>
                         </li>
                    </ul>
            </section>
        </div>
    </main>
)}

export default Weapons;