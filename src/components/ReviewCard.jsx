import React from "react";

const ReviewCard = ({
  image = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  name = "Andrews",
  position = "UI Designer",
  heading = "It was a very good experience",
  description = "Choosing the services for my graduation from this website was the best decision I made. The attention to detail in my gown and the seamless photoshoot experience truly made my day memorable",
}) => {
  return (
    <div className="shadow-2xl shadow-light-green rounded-3xl p-4 ml-3 h-80">
      <div className="flex">
        <button
          type="button"
          class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">Open user menu</span>
          <img class="h-12 w-12 rounded-full" src={image} alt="" />
        </button>
        <div className="ml-2">
          <h4 className="font-bold">{name}</h4>
          <p className="font-semibold">{position}</p>
        </div>
      </div>
      <h4 className="font-bold text-center my-6">{heading}</h4>
      <p className="text-center">"{description}” </p>
    </div>
  );
};

export default ReviewCard;
