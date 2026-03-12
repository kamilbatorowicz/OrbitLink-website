import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;      // 0..1, starts at 1
    size: number;
}

export default function RocketCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -500, y: -500 });
    const particles = useRef<Particle[]>([]);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Resize canvas to full viewport
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Track mouse
        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };

            // Spawn 3 particles per frame
            for (let i = 0; i < 3; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 1.2 + 0.3;
                particles.current.push({
                    x: e.clientX + (Math.random() - 0.5) * 4,
                    y: e.clientY + (Math.random() - 0.5) * 4,
                    vx: Math.cos(angle) * speed * 0.4,
                    vy: Math.sin(angle) * speed * 0.4 + 0.6, // slight gravity drift down
                    life: 1,
                    size: Math.random() * 3 + 1.5,
                });
            }
        };
        document.addEventListener("mousemove", onMove);

        // Animation loop
        const loop = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update + draw particles
            particles.current = particles.current.filter((p) => p.life > 0);

            for (const p of particles.current) {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.028;

                const alpha = Math.max(0, p.life);
                const radius = p.size * alpha;

                // Cyan → blue gradient glow
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 2.5);
                grad.addColorStop(0, `rgba(167, 243, 252, ${alpha})`);   // light cyan core
                grad.addColorStop(0.4, `rgba(34, 211, 238, ${alpha * 0.8})`); // cyan
                grad.addColorStop(1, `rgba(37, 99, 235, 0)`);            // blue fade

                ctx.beginPath();
                ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(rafRef.current);
            document.removeEventListener("mousemove", onMove);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9997]"
            style={{ mixBlendMode: "screen" }}
        />
    );
}
