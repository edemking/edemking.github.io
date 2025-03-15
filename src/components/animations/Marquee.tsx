import { motion, useAnimation } from "framer-motion";

import * as React from 'react';

const Marquee = (
    { children,
        hoverPause = false,
        initialValue = 0,
        directionValue = 2000,
        durationVal = 20,
    }:
        {
            children: React.JSX.Element,
            direction?: string,
            hoverPause?: boolean,
            initialValue?: number,
            directionValue?: number,
            durationVal?: number,
        }) => {
    const variantX = [initialValue, directionValue];
    // const marqueeVariants = !hoverPause ? {
    //     animate: {
    //         x: variantX,
    //         transition: {
    //             x: {
    //                 duration: 20,
    //                 ease: "linear",
    //                 repeat: Infinity,
    //                 repeatType: "loop",
    //                 delay: .5,
    //             },
    //         },
    //     },
    // } : {
    //     rest: {
    //         x: variantX,
    //         transition: {
    //             x: {
    //                 duration: 20,
    //                 ease: "linear",
    //                 repeat: Infinity,
    //                 repeatType: "loop",
    //                 delay: .5,
    //             },
    //         },
    //     },
    //     hover: {
    //         x: variantX,
    //         transition: {
    //             x: {
    //                 duration: 0,
    //             },
    //         },
    //     },
    // }

    const ref = React.useRef(null);

    const hoverDisabled = {
        rest: {
            x: initialValue,
        },
        animate: {
            x: directionValue,
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop" as const,
                delay: .5,
            },
        },
    };

    const hoverEnabled = {
        rest: {
            x: initialValue,
        },
        animate: {
            x: directionValue,
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop" as const,
                delay: .5,
            },
        },
        hover: {
            transition: {
                duration: 0,
            },
        },
    };

    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({
            x: variantX,
            transition: {
                duration: durationVal,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                delay: .5,
            },
        });
    }, [controls, variantX]);

    return (
        <motion.div
            ref={ref}
            className="absolute whitespace-nowrap"
            animate="animate"
            variants={hoverPause ? hoverEnabled : hoverDisabled}
        >
            {children}
        </motion.div>
    );
};

export default Marquee;