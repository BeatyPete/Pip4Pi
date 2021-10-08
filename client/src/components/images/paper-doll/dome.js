function DomeSvg({blink}) {
    return (
        <svg className={`armor-piece ${blink('helmet')}`} id='dome' viewBox="0 0 68 92">
            <g>
                <path xmlns="http://www.w3.org/2000/svg" d="M50.95 4.35 Q55.65 7.15 59.2 11.3 64.3 17.2 66.25 24.65 68.7 34.0 66.6 44.35 64.4 55.05 58.2 62.1 56.95 62.95 57.3 62.25 59.15 58.45 58.45 55.15 57.65 51.4 53.55 50.75 50.9 50.4 49.85 49.1 48.8 47.85 48.8 45.2 L48.95 39.85 Q48.75 36.6 47.25 34.9 45.5 32.9 41.8 31.95 L35.5 30.9 20.6 28.9 14.45 28.65 Q10.8 28.85 8.9 30.75 5.4 34.15 4.9 37.8 L4.8 41.35 4.65 44.85 Q3.65 50.6 5.4 56.6 5.5 56.9 5.05 57.3 L4.3 57.55 Q3.3 56.85 2.6 54.9 L1.75 51.8 Q-0.05 44.85 0.0 38.9 0.1 26.7 4.65 18.9 8.65 12.2 14.4 7.65 20.05 3.15 26.6 1.25 33.55 -0.75 40.7 0.45 46.15 1.55 50.95 4.35 M7.15 15.9 Q5.25 18.8 4.0 22.25 0.1 33.25 1.55 43.85 L2.1 48.3 Q2.6 51.5 3.35 53.45 L2.9 49.65 3.15 46.4 3.45 43.15 Q3.5 39.45 4.2 37.0 5.05 34.0 7.15 31.6 9.0 29.55 10.55 28.7 12.3 27.7 14.8 27.6 L30.45 28.8 40.15 30.45 43.55 31.1 Q45.55 31.6 46.75 32.45 49.0 34.05 49.7 37.0 50.2 39.0 50.05 42.55 L49.9 45.6 Q50.0 47.55 50.95 48.35 51.9 49.15 54.35 49.5 56.7 49.85 57.65 50.7 59.45 52.3 59.75 54.9 60.05 57.15 59.2 59.75 64.5 52.4 66.0 42.2 67.45 31.95 64.5 23.6 61.5 15.05 55.1 9.3 48.55 3.35 39.8 1.55 28.7 -0.3 18.3 5.6 14.35 7.85 11.4 10.75 8.95 13.1 7.15 15.9 M47.55 30.35 Q45.65 29.3 40.75 28.3 L24.2 25.45 17.2 24.45 Q12.5 24.1 10.5 25.55 L9.9 25.6 Q9.9 25.2 10.35 24.85 12.7 23.15 17.6 23.4 L25.1 24.3 38.0 26.45 43.25 27.4 Q46.35 28.0 48.35 28.9 51.9 30.45 52.55 35.0 52.95 37.6 52.7 42.9 52.75 44.9 53.3 45.25 L55.75 45.8 Q60.1 46.75 61.05 49.6 L60.55 50.4 59.85 50.5 Q59.2 48.45 56.8 47.45 54.9 46.65 52.3 46.65 L52.05 46.5 Q51.2 44.75 51.45 41.3 51.7 37.2 51.45 35.95 50.7 32.1 47.55 30.35"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M11.4 10.75 Q14.35 7.85 18.3 5.6 28.7 -0.3 39.8 1.55 48.55 3.35 55.1 9.3 61.5 15.05 64.5 23.6 67.45 31.95 66.0 42.2 64.5 52.4 59.2 59.75 60.05 57.15 59.75 54.9 59.45 52.3 57.65 50.7 56.7 49.85 54.35 49.5 51.9 49.15 50.95 48.35 50.0 47.55 49.9 45.6 L50.05 42.55 Q50.2 39.0 49.7 37.0 49.0 34.05 46.75 32.45 45.55 31.6 43.55 31.1 L40.15 30.45 30.45 28.8 14.8 27.6 Q12.3 27.7 10.55 28.7 9.0 29.55 7.15 31.6 5.05 34.0 4.2 37.0 3.5 39.45 3.45 43.15 L3.15 46.4 2.9 49.65 3.35 53.45 Q2.6 51.5 2.1 48.3 L1.55 43.85 Q0.1 33.25 4.0 22.25 5.25 18.8 7.15 15.9 L10.65 11.55 11.4 10.75 M47.55 30.35 Q50.7 32.1 51.45 35.95 51.7 37.2 51.45 41.3 51.2 44.75 52.05 46.5 L52.3 46.65 Q54.9 46.65 56.8 47.45 59.2 48.45 59.85 50.5 L60.55 50.4 61.05 49.6 Q60.1 46.75 55.75 45.8 L53.3 45.25 Q52.75 44.9 52.7 42.9 52.95 37.6 52.55 35.0 51.9 30.45 48.35 28.9 46.35 28.0 43.25 27.4 L38.0 26.45 25.1 24.3 17.6 23.4 Q12.7 23.15 10.35 24.85 9.9 25.2 9.9 25.6 L10.5 25.55 Q12.5 24.1 17.2 24.45 L24.2 25.45 40.75 28.3 Q45.65 29.3 47.55 30.35"/>
            </g>
        </svg>
)}

export default DomeSvg;