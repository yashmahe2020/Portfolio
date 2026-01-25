import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Dynamic Gradient Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 120, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-32 left-1/4 w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[140px]"
            />

            {/* Glass-ish Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-100"></div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`,
                    backgroundSize: '32px 32px'
                }}
            ></div>
        </div>
    );
};

export default Background;
