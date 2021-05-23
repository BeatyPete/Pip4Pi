/* import './status.css' */

function Special() {
    const colorChange = e => {
        let hex = (e.target.value)
        const rgb = ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
        let values = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`
        document.documentElement.style.setProperty('--color', values);
    }

    return (
    <main>
        <input type="color" onChange={colorChange}></input>
    </main>
)}

export default Special;