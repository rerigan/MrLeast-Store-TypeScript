import { useEffect, useState } from "react";

interface Product {
  category: string;
}
interface FetchResponse {
  products: Product[];
}

const Sidebarr = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirts",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products...", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-64 p-5 pl-15 h-screen">
      <h1 className="text 2xl font-bold mb-10 mt-4 ">MrLeast Store</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search products"
        ></input>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Min"
          ></input>
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Max"
          ></input>
        </div>
        {/* Categorias */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>

        <section>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2 text-left">
              <input
                type="radio"
                name="category"
                value={category}
                className="mr-2 w-[16px] h-[16px] "
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>
        {/* Keywords */}
        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3 ">Keywords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200 hover:text-black"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">Filtrar</button>
      </section>
    </div>
  );
};

export default Sidebarr;
