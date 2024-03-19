import React from "react";
import product from "../assets/image-product-desktop.jpg";
import product_2 from "../assets/image-product-mobile.jpg";

import cart from "../assets/icon-cart.svg";
function Preview() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center Figtree">
        <div className="md:w-[42%] w-[91%] bg-white rounded-xl flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <img src={product} alt="product" className="hidden lg:block w-full rounded-l-xl" />
            <img src={product_2} alt="product" className="block lg:hidden w-full rounded-t-xl" />

          </div>
          <div className="p-4 lg:p-8 w-full lg:w-1/2">
            <p className="text-sm pb-4 montserrat-medium uppercase text-[hsl(228,12%,48%)] tracking-[5px] opacity-80">Perfume</p>
            <h1 className="fraunces-bold text-[hsl(212,21%,14%)] text-4xl leading-[35px]">Gabrielle Essence Eau De Parfum</h1>
            <p className="montserrat-medium text-[hsl(228,12%,48%)] leading-[25px] text-[16px] py-6 opacity-80">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p> 
            <p className="pb-4 lg:pb-8 text-4xl fraunces-bold text-[hsl(158,36%,37%)]">
              $149.99
              <span className="text-sm montserrat-medium text-[hsl(228,12%,48%)] line-through pl-6 top-0 opacity-80">$169.99</span>
            </p>
            <button className="py-[0.85rem] montserrat-bold bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,37%,17%)] text-center w-full rounded-lg text-white">
            <img src={cart} alt="cart" className="w-4 inline-block" />
            {" "}<span className="pl-2">Add to Cart</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
