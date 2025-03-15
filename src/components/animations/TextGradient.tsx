'use client';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';

export const TextGradient = ({ content, className }: { content: string, className: string }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <AnimatePresence>
            <span
                ref={ref}
                className={className + 'text-semibold text-transparent bg-gradient-to-r from-[#8b51fe] to-[#c321f9] bg-clip-text'}
            >
                {content.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ y: 10, opacity: 0, scale: 0 }}
                        animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 } }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>
        </AnimatePresence>
    );
};