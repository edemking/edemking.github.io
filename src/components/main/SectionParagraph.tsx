'use client'

import React from 'react'
import { TextFade } from '../animations/TextFade'

const SectionParagraph = ({
    content,
    className,
}: {
    content: string,
    className?: string
}) => {

    return (
        <>
            <TextFade direction="up">
                <p className={className}>{content}</p>
            </TextFade>
        </>
    )
}

export default SectionParagraph