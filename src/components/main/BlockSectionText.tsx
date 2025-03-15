'use client'

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

const BlockSectionText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default BlockSectionText;