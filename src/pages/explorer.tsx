import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center max-w-lg text-center">
          <h1 className={title()}>Explorer</h1>
          <br />
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
          {/* Categories (h1 tag is subtitle lol) */}
          <h1 className={subtitle()}>Categories</h1>
          <br/>
          <div className="flex items-center space-x-2">
            <button className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">FPS</button>
            <button className="w-28 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Souls Like</button>
            <button className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">RPG</button>
            <button className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Racing</button>
            <button className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Survival</button>
            <button className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Co-Op</button>
            <button className="w-28 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Rogue-Like</button>
            <button className="w-20 rounded-full bg-[#db934b21] p-[10px] hover:bg-[#db934b7d]">Anime</button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
