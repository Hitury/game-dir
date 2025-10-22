import { useEffect, useState } from "react";

// Function to scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function ScrollToTopButton() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // Effect to handle scroll position and show/hide the button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
        showScrollToTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 p-3 bg-[#db934b21] rounded-full hover:bg-[#db934b7d] transition"
            >
                ↑ Top
            </button>
        )
    );
}