import React from "react";

const Faq = () => {
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h2 className="text-3xl text-center text-green-300 mb-10">Frequently Asked Questions</h2>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">
          Why are we doing this?
        </div>
        <div className="collapse-content text-sm">
          We believe in reducing food waste and helping people in need. Our mission is to connect individuals and communities so that excess food can be shared rather than thrown away.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
          Are the foods fresh and safe to eat?
        </div>
        <div className="collapse-content text-sm">
          Yes. We encourage all food donors to share only freshly prepared or properly stored food. Each post includes preparation time and expiration information for transparency.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
           Who can post or request food?
        </div>
        <div className="collapse-content text-sm">
          Anyone can join! Whether you have extra food to share or are in need, our platform is open to all with a heart to give or receive.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
           Is there any cost involved?
        </div>
        <div className="collapse-content text-sm">
         No. Our platform is completely free to use. The food shared is free, and we never charge users for posting or requesting food.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
          Is home delivery available?
        </div>
        <div className="collapse-content text-sm">
         It depends. Some donors may offer delivery, while others may prefer pickup. Each food post clearly mentions the delivery or pickup options.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
          How do I know the food is not expired?
        </div>
        <div className="collapse-content text-sm">
         Each post requires the donor to mention the preparation and best-before times. We also encourage users to rate and report posts to maintain quality and trust..
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
          Can restaurants or food businesses join?
        </div>
        <div className="collapse-content text-sm">
         Absolutely. Restaurants, cafes, and food businesses are welcome to share surplus food responsibly and help reduce food waste.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
         How do I trust the person I’m meeting?
        </div>
        <div className="collapse-content text-sm">
         We provide profile verification, reviews, and ratings to build trust among users. We also recommend meeting in safe, public places for exchanges.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
          What types of food can I post?
        </div>
        <div className="collapse-content text-sm">
        You can post homemade meals, leftovers, groceries, bakery items, or any edible item that’s safe to consume and within its usable period.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">
          How can I report inappropriate behavior or spoiled food?
        </div>
        <div className="collapse-content text-sm">
         You can report any issue directly from the post or user profile. Our team reviews reports promptly to ensure a safe and respectful community.
        </div>
      </div>
    </div>
  );
};

export default Faq;
