import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="text-center py-14 px-4 max-w-3xl mx-auto">
      {/* Heading */}
      <p className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
        Stay Updated & Get <span className="font-bold text-black">20% Off</span>
      </p>

      {/* Subtitle */}
      <p className="text-gray-500 mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
        Join our newsletter to receive exclusive deals, early access to new arrivals,
        and curated shopping tips delivered straight to your inbox. No spam — only
        value.
      </p>

      {/* Input Box */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-7/6 flex items-center gap-4 mx-auto mt-8 border border-gray-300 rounded-full pl-6 pr-3 py-3 bg-white shadow-sm hover:shadow-md transition"
        aria-label="Subscribe to newsletter"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full outline-none text-sm sm:text-base"
          required
          aria-label="Email address"
        />

        {/* Wider button as requested */}
        <button
          type="submit"
          className="bg-black text-white text-sm sm:text-base px-10 sm:px-14 py-3 rounded-full hover:bg-gray-800 active:scale-95 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
