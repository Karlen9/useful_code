import { cl } from "@/utils/cl";
import { Carousel } from "./components/Carousel";
import { carouselLogos } from "@/utils/constants";

const items = [
  { id: 1, title: "Item 1", color: "bg-blue-500" },
  { id: 2, title: "Item 2", color: "bg-green-500" },
  { id: 3, title: "Item 3", color: "bg-yellow-500" },
  { id: 4, title: "Item 4", color: "bg-red-500" },
  { id: 5, title: "Item 5", color: "bg-purple-500" },
];

export default function InfiniteCarouselPage() {
  return (
    <div className="h-screen bg-[#0C0D0F] mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Infinite Carousel Example
      </h1>
      <div className="max-w-4xl mx-auto">
        <Carousel pauseOnHover speed={10}>
          {Object.values(carouselLogos).map(({ Logo, href }, index) => (
            <div key={index} className={"mx-10"}>
              <div
                rel={"noopener noreferrer"}
                className={
                  "relative flex max-h-10 w-max items-center justify-start"
                }
              >
                <Logo />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
