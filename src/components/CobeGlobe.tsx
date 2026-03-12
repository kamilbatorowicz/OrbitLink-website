import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function CobeGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1000,
            height: 1000,
            phi: 0,
            theta: 0.3,
            dark: 1, // Keep space dark
            diffuse: 1.0,
            mapSamples: 20000, // Zwiększona szczegółowość
            mapBrightness: 12, // Mocniej świecąca Ziemia
            baseColor: [0.1, 0.4, 0.8], // Zmiana na "deep tech blue" zamiast szarego
            markerColor: [0.2, 1, 0.9], // Markery o kolorze cyan/neonowym
            glowColor: [0.1, 0.3, 0.7], // Mocna, niebieskawa atmosfera
            markers: [
                // Random locations scattered globally to represent the constellation
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.0060], size: 0.1 },
                { location: [51.5074, -0.1278], size: 0.05 },
                { location: [35.6895, 139.6917], size: 0.08 },
                { location: [-33.8688, 151.2093], size: 0.05 },
                { location: [1.3521, 103.8198], size: 0.06 },
                { location: [52.5200, 13.4050], size: 0.04 },
                { location: [48.8566, 2.3522], size: 0.06 },
                { location: [19.4326, -99.1332], size: 0.07 },
                { location: [-23.5505, -46.6333], size: 0.08 },
                { location: [55.7558, 37.6173], size: 0.05 },
                { location: [25.2048, 55.2708], size: 0.06 },
                { location: [-34.6037, -58.3816], size: 0.04 },
                { location: [-1.2921, 36.8219], size: 0.05 },
                { location: [39.9042, 116.4074], size: 0.09 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.003;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="w-full max-w-[600px] aspect-square mx-auto relative flex items-center justify-center">
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    cursor: "grab",
                    contain: "layout paint size",
                    opacity: 1,
                    transition: "opacity 1s ease",
                }}
                className="drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            />
        </div>
    );
}
