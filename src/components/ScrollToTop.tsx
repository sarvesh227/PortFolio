"use client";

import { useEffect } from "react";

export const ScrollToTop = () => {
    useEffect(() => {
        // Force scroll to top on mount (refresh)
        window.scrollTo(0, 0);

        // Disable browser's default scroll restoration
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
    }, []);

    return null;
};
