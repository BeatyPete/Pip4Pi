function ChestSvg({blink}) {
    return (
        <svg className={`armor-piece ${blink('chest')}`} id='chestplate' viewBox="0 0 63 92">
            <g>
                <path d="M52.35 6.9 Q46.55 12.7 46.0 17.95 45.3 25.05 47.55 31.5 50.2 39.35 56.1 41.1 L60.4 41.35 Q61.65 41.3 61.8 42.45 L61.8 45.15 Q62.4 51.2 61.05 59.45 L60.05 59.7 Q58.6 60.1 55.3 61.45 47.6 64.7 44.15 69.9 42.2 72.8 40.55 77.45 L37.85 85.35 Q35.85 90.5 29.95 90.85 L29.55 90.85 Q23.4 91.1 20.65 86.3 L19.7 84.55 17.1 79.2 13.85 71.95 Q11.9 68.0 9.55 66.0 6.65 64.35 6.6 64.15 5.6 60.05 4.5 53.65 L2.65 43.1 Q1.4 36.3 2.45 31.2 2.9 29.1 5.15 24.55 7.2 20.4 7.45 17.75 7.9 13.4 5.25 6.0 4.55 4.1 6.4 2.35 8.25 0.65 9.25 3.05 11.85 9.15 13.05 11.15 15.95 16.05 19.35 16.85 31.45 19.85 39.7 15.7 L40.05 15.45 Q44.65 12.35 46.8 6.3 L47.7 2.8 Q48.1 0.35 51.45 1.15 53.85 1.75 55.95 3.2 L56.6 3.45 55.75 3.95 52.35 6.9" />
            </g>
        </svg>
)}

export default ChestSvg;