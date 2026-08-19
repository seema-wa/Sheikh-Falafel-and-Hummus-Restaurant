interface Dish {
  image: string;
  title: string;
  price: string;
  descriptionAr: string;
}

const DISHES: Dish[] = [
  {
    image: "/images/dish1.jpg",
    title: "Hummus Special",
    price: "18 SAR",
    descriptionAr:
      "حمص ناعم على الطريقة الشامية مع زيت الزيتون البكر والصنوبر المحمص",
  },
  {
    image: "/images/dish2.jpg",
    title: "Foul Moudammas",
    price: "15 SAR",
    descriptionAr:
      "فول مدمس مطبوخ بطريقة تقليدية مع التتبيلة الخاصة وزيت الزيتون",
  },
  {
    image: "/images/dish3.jpg",
    title: "Hummus Fatteh",
    price: "25 SAR",
    descriptionAr: "فتة حمص شامية بالسمن البلدي والمكسرات المقلية",
  },
  {
    image: "/images/dish4.jpg",
    title: "Mix Falafel Plate",
    price: "20 SAR",
    descriptionAr: "صحن فلافل مشكل مقرمش مع التراطور والمخللات الشامية",
  },
];

function KhatimStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 0 L61 22 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 22 Z" />
    </svg>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="bg-[#FBF4E4] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <KhatimStar className="h-6 w-6 text-[#9C3B2A]" />
          <h2 className="mt-4 font-['Fraunces',serif] text-4xl font-semibold text-[#1E1B16] sm:text-5xl">
            From Our Kitchen
          </h2>
          <p className="mt-3 font-['Work_Sans',sans-serif] text-base text-[#1E1B16]/60">
            A few of the dishes Jeddah keeps coming back for.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DISHES.map((dish) => (
            <article
              key={dish.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#1E1B16]/5 transition-shadow hover:shadow-xl sm:flex-row"
            >
              <div className="relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-44">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-['Fraunces',serif] text-xl font-semibold text-[#1E1B16]">
                      {dish.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-[#57642B]/10 px-3 py-1 font-['Work_Sans',sans-serif] text-sm font-semibold text-[#57642B]">
                      {dish.price}
                    </span>
                  </div>

                  <p
                    dir="rtl"
                    lang="ar"
                    className="mt-3 font-['Noto_Kufi_Arabic',sans-serif] text-sm leading-relaxed text-[#1E1B16]/70"
                  >
                    {dish.descriptionAr}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
