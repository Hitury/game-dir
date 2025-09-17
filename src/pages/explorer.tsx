import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import Carousel from "@/components/carousel-explorer";
import { ScrollToTopButton } from '@/components/scrolltotop'; // Adjust the path as needed

// Function to handle smooth scrolling to a specific section
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Main functional component
export default function ExplorerPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="flex flex-col items-center max-w-lg text-center">
                    <h1 className={title()}>Explorer</h1>
                    <br />
                    {/* Search bar with an input field and search icon */}
                    <div className="relative w-[600px] max-w-xl mt-[30px]">
                        <input
                            className="bg-[#00000055] p-3 pr-10 w-full rounded-xl focus:outline-none"
                            placeholder="Search"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                    {/* Subtitle for Categories */}
                    <h1 className={subtitle()}>Categories</h1>
                    <br />
                    {/* Button group for categories with click events for scrolling */}
                    <div className="flex items-center space-x-2">
                        <button onClick={() => scrollToSection('fps')} className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">FPS</button>
                        <button onClick={() => scrollToSection('souls-like')} className="w-28 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Souls Like</button>
                        <button onClick={() => scrollToSection('rpg')} className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">RPG</button>
                        <button onClick={() => scrollToSection('racing')} className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Racing</button>
                        <button onClick={() => scrollToSection('survival')} className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Survival</button>
                        <button onClick={() => scrollToSection('co-op')} className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Co-Op</button>
                        <button onClick={() => scrollToSection('rogue-like')} className="w-28 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Rogue-Like</button>
                        <button onClick={() => scrollToSection('anime')} className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Anime</button>
                    </div>
                </div>
                {/* Divider between sections */}
                <Divider className="my-16 bg-[#DB924B] h-0.5" />
                {/* Section headers for different categories */}
                <h1 id="recommended" className={title()}>Recommended for You</h1>
                <Carousel />
                <h1 id="fps" className={title()}>FPS</h1>
                <Carousel />
                <h1 id="souls-like" className={title()}>Souls Like</h1>
                <Carousel />
                <h1 id="rpg" className={title()}>RPG</h1>
                <Carousel />
                <h1 id="racing" className={title()}>Racing</h1>
                <Carousel />
                <h1 id="survival" className={title()}>Survival</h1>
                <Carousel />
                <h1 id="co-op" className={title()}>Co-Op</h1>
                <Carousel />
                <h1 id="rogue-like" className={title()}>Rogue-Like</h1>
                <Carousel />
                <h1 id="anime" className={title()}>Anime</h1>
                <Carousel />
            </section>
            <ScrollToTopButton />
        </DefaultLayout>
    );
}