"use client"
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function WordsPullUp({
    text,
    className = '',
}: {
    text: string;
    className?: string;
}) {
    const splittedText = text.split(' ');

    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
    };
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
            {splittedText.map((current, i) => (
                <motion.span
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={`${className} pr-2 `}
                >
                    {current == '' ? <span>&nbsp;</span> : current}
                </motion.span>
            ))}
        </>
    );
}