
"use client";

import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardPicture,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  longdescription: string;
  image: string;
  imageFile: string;
};

const productCategories = [
  {
    id: 0,
    title: "Hydrocolloid",
    description: "A wide range of flavors for various food applications.",
    product: [
      {
        id: "0A",
        name: "Agar-Agar",
        description: "A natural gelling agent derived from red algae.",
        // about 300 words
        longdescription:
          "Agar-agar is a gelatinous substance derived from red algae, primarily used as a vegetarian substitute for gelatin. It is composed mainly of agarose and agaropectin, which are polysaccharides that form a gel when dissolved in boiling water and cooled. Agar-agar is widely used in food products such as jellies, puddings, and desserts, as well as in microbiological culture media. It has excellent gelling properties, can withstand high temperatures, and is stable over time, making it a preferred choice for many culinary applications.",
        image: "bg-[url(/images/agar-agar.jpg)]",
        imageFile: "/images/agar-agar.jpg",
      },
      {
        id: "0B",
        name: "Carrageenan",
        description: "A thickening agent extracted from seaweed.",
        longdescription:
          "Carrageenan is a natural thickening and gelling agent extracted from red seaweeds, particularly species of the Rhodophyta family. It is widely used in the food industry for its ability to stabilize, thicken, and gel various products such as dairy, meat, and plant-based alternatives. Carrageenan comes in different forms, including kappa, iota, and lambda, each with unique gelling properties. It is valued for its versatility, ability to create smooth textures, and compatibility with a wide range of ingredients.",
        image: "bg-[url(/images/carrageenan.jpg)]",
        imageFile: "/images/carrageenan.jpg",
      },
      {
        id: "0C",
        name: "Xanthan Gum",
        description: "A polysaccharide used as a food thickener.",
        longdescription:
          "Xanthan gum is a polysaccharide produced by the fermentation of glucose or sucrose by the bacterium Xanthomonas campestris. It is widely used in the food industry as a thickening and stabilizing agent, particularly in gluten-free products. Xanthan gum has excellent viscosity properties, allowing it to create a thick, gel-like consistency in liquids. It is also used in sauces, dressings, and dairy products to improve texture and prevent separation. Additionally, xanthan gum is valued for its ability to maintain stability under varying temperatures and pH levels.",
        image: "bg-[url(/images/xanthan-gum.jpg)]",
        imageFile: "/images/xanthan-gum.jpg",
      },
    ],
  },
  {
    id: 1,
    title: "Flavoring Agent",
    description: "Natural and synthetic colors for food products.",
    product: [
      {
        id: "1A",
        name: "Vanilla Flavor",
        description: "A rich and creamy vanilla flavoring.",
        longdescription:
          "Vanilla flavoring is derived from the vanilla bean, which is the fruit of the orchid Vanilla planifolia. It is one of the most popular and widely used flavors in the food industry, known for its sweet and creamy profile. Natural vanilla flavoring is extracted from cured vanilla beans, while synthetic versions are created using vanillin, a compound found in lignin or guaiacol. Vanilla flavoring is commonly used in desserts, baked goods, beverages, and confectionery products to enhance taste and aroma.",
        image: "bg-[url(/images/vanilla-flavor.jpg)]",
        imageFile: "/images/vanilla-flavor.jpg",
      },
      {
        id: "1B",
        name: "Chocolate Flavor",
        description: "A deep and rich chocolate flavoring.",
        longdescription:
          "Chocolate flavoring is a popular ingredient used to impart the rich and indulgent taste of chocolate in various food products. It can be derived from natural cocoa beans or created synthetically using flavor compounds. Chocolate flavoring is commonly used in desserts, candies, beverages, and baked goods to enhance the overall taste profile. It can range from dark and intense flavors to milder milk chocolate notes, allowing for versatility in culinary applications.",
        image: "bg-[url(/images/chocolate-flavor.jpg)]",
        imageFile: "/images/chocolate-flavor.jpg",
      },
      {
        id: "1C",
        name: "Strawberry Flavor",
        description: "A sweet and fruity strawberry flavoring.",
        longdescription:
          "Strawberry flavoring is a popular ingredient used to replicate the sweet and fruity taste of fresh strawberries in various food products. It can be derived from natural strawberry extracts or created synthetically using flavor compounds. Strawberry flavoring is commonly used in desserts, beverages, candies, and baked goods to enhance the overall taste profile. It can range from light and refreshing notes to more intense and concentrated flavors, allowing for versatility in culinary applications.",
        image: "bg-[url(/images/strawberry-flavor.jpg)]",
        imageFile: "/images/strawberry-flavor.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Food color",
    description: "Ingredients to extend the shelf life of food items.",
    product: [
      {
        id: "2A",
        name: "Red Color",
        description: "A vibrant red food color for various applications.",
        longdescription:
          "Red food color is a widely used ingredient in the food industry to enhance the visual appeal of products. It can be derived from natural sources such as beetroot, hibiscus, or annatto, or created synthetically using artificial dyes. Red food color is commonly used in candies, beverages, baked goods, and sauces to create a vibrant and eye-catching appearance. It is valued for its ability to provide consistent and stable coloring in various formulations, making it a popular choice for food manufacturers.",
        image: "bg-[url(/images/red-color.jpg)]",
        imageFile: "/images/red-color.jpg",
      },
      {
        id: "2B",
        name: "Yellow Color",
        description: "A bright yellow food color for enhancing appearance.",
        longdescription:
          "Yellow food color is a popular ingredient used to impart a bright and cheerful hue to various food products. It can be derived from natural sources such as turmeric, saffron, or marigold petals, or created synthetically using artificial dyes. Yellow food color is commonly used in candies, baked goods, sauces, and beverages to enhance visual appeal and create an inviting appearance. It is valued for its ability to provide consistent and stable coloring in formulations, making it a versatile choice for food manufacturers.",
        image: "bg-[url(/images/yellow-color.jpg)]",
        imageFile: "/images/yellow-color.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Sweetener",
    description: "Sweeteners to enhance the taste of food products.",
    product: [
      {
        id: "3A",
        name: "Sucralose",
        description: "A zero-calorie artificial sweetener.",
        longdescription:
          "Sucralose is a zero-calorie artificial sweetener derived from sugar. It is approximately 600 times sweeter than sucrose, making it an effective sugar substitute in various food and beverage products. Sucralose is heat-stable, allowing it to be used in cooking and baking without losing its sweetness. It is commonly found in diet sodas, sugar-free desserts, and low-calorie snacks. Due to its non-caloric nature, sucralose is popular among individuals looking to reduce their sugar intake while still enjoying sweet flavors.",
        image: "bg-[url(/images/sucralose.jpg)]",
        imageFile: "/images/sucralose.jpg",
      },
      {
        id: "3B",
        name: "Aspartame",
        description: "A low-calorie sweetener used in many products.",
        longdescription:
          "Aspartame is a low-calorie artificial sweetener composed of two amino acids, phenylalanine and aspartic acid. It is approximately 200 times sweeter than sucrose, making it a popular sugar substitute in various food and beverage products. Aspartame is commonly used in diet sodas, sugar-free desserts, and low-calorie snacks. It provides sweetness without the calories associated with sugar, making it a preferred choice for individuals looking to manage their weight or reduce their sugar intake. However, individuals with phenylketonuria (PKU) should avoid aspartame due to its phenylalanine content.",
        image: "bg-[url(/images/aspartame.jpg)]",
        imageFile: "/images/aspartame.jpg",
      },
    ],
  },
];

export default function Product() {
  const [selectedProductCategories, setSelectedProductCategories] = useState<
    Set<number>
  >(new Set());

  const [selectedProduct, setSelectedProduct] = useState<Product|null>(null);

  useEffect(() => {
    console.log("Selected Categories:", Array.from(selectedProductCategories));
  });

  return (
    <div className="flex flex-col bg-slate-800 ">
      <div className="bg-slate-900 mask-b-from-60% mask-b-to-100% bg-cover bg-[url(/bg-product.jpg)] bg-blend-hard-light justify-items-center h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="absolute w-full h-screen backdrop-blur-[3px] z-0 bg-slate-900 opacity-80" />
        <main className="relative flex flex-col gap-16 z-10 m-20">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-center pt-10">
              Our Product
            </h2>
          </div>
          <h3 className="text-xl font-bold text-center">
            Select Product Categories
          </h3>
          <div className="flex flex-col gap-4 justify-center">
            {productCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-row gap-4 items-center"
              >
                <Toggle
                  className="w-50 h-10 flex flex-col"
                  defaultValue={category.id}
                  onClick={() => {
                    const newSelection = new Set(selectedProductCategories);
                    if (newSelection.has(category.id)) {
                      newSelection.delete(category.id);
                    } else {
                      newSelection.add(category.id);
                    }
                    setSelectedProductCategories(newSelection);
                  }}
                >
                  {category.title}
                </Toggle>
                <p className="text-sm sm:text-base">{category.description}</p>
              </div>
            ))}
            <Button className="w-fit text-white self-end">
              <Link href="/product#query-result" className="flex items-center">
                <Search className="mr-2" />
                Search
              </Link>
            </Button>
          </div>
        </main>
      </div>
      {
        selectedProductCategories.size > 0 && 
        <div className="min-h-screen flex flex-col gap-8 p-20" id="query-result">
          <h2 className="text-2xl sm:text-4xl font-bold text-center">
            Searched Product
          </h2>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              {Array.from(selectedProductCategories).map((categoryId) => {
                const category = productCategories.find(
                  (cat) => cat.id === categoryId
                );
                return (
                  <div key={category?.id} className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">{category?.title}</h3>
                    {category?.product?.map((product) => {
                      return (
                        <Card
                          key={product.id}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <CardTitle>
                            {product.name}
                            <CardDescription>
                              {product.description}
                            </CardDescription>
                          </CardTitle>
                          <CardPicture
                            className={`${product.image}`}
                          ></CardPicture>
                        </Card>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="sticky top-20 w-full md:w-1/2 h-fit min-h-100 bg-card text-card-foreground flex flex-row gap-4 rounded-xl border shadow-sm overflow-hidden transition-all hover:shadow-md focus-within:shadow-md">
              <div className="flex flex-col gap-4 p-4 w-full">
                <h3 className="text-lg font-bold text-center">Product Details</h3>
                { 
                  selectedProduct ? (
                    <div className="flex flex-col gap-2 text-center justify-center items-center">
                      <h4 className="text-md font-semibold">
                        {selectedProduct.name}
                      </h4>
                      <p className="text-sm">
                        {selectedProduct.description}
                      </p>
                      <p className="text-sm indent-8 mt-2 text-start">
                        {selectedProduct.longdescription}
                      </p>
                      <Image 
                        src={selectedProduct.imageFile}
                        alt={selectedProduct.name}
                        width={500}
                        height={300}
                        className="rounded-lg mt-4"
                      ></Image>
                    </div>
                  ) :
                  <p className="text-sm text-muted-foreground">
                  Select a product to see details here.
                </p>}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
