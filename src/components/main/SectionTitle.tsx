'use client'

import React from 'react'
import { TypingEffect } from '../animations/TypingEffect'
import { motion, useInView } from 'framer-motion'

const SectionTitle = ({
    content,
    className,
    showPoint = true,
}: {
    content: string,
    className?: string,
    showPoint?: boolean
}) => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <span className={`${className} relative`}>
                {showPoint &&
                    <motion.span
                        ref={ref}
                        initial={{ y: -50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5, type: 'spring', bounce: 0.5 }}
                        className="title-gradient-circle"></motion.span>
                }
                {/* <TextFade direction="up">
                    <h1 className={className}>{content}</h1>
                </TextFade> */}
                <TypingEffect text={content} className={`${className}`} />
            </span>
        </>
    )
}

export default SectionTitle