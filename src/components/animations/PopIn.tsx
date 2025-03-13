'use client';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';

export const PopIn = ({ children, className }: { children: React.ReactNode, className: string }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 0.3,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};