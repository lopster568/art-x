"use client"
import { motion } from "framer-motion"

import { ReactNode } from "react";

const TextAnimation = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div animate="visible" initial="hidden" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .1,
                    ease: "easeInOut"
                },
            },
        }} >
            {children}

        </motion.div>

    );
}

export default TextAnimation;