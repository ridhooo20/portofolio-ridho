import React from "react";

const Card = ({ image, title, description, content, buttonLabel }) => {
  return (
    <div className="max-w-sm h-[34rem] mx-auto rounded-lg shadow-lg shadow-sky-300 bg-gray-100">
      {/* Gambar */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      {/* Header */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-cyan-700">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {/* Konten */}
      <div className="p-4">
        <p className="text-black">{content}</p>
      </div>
      {/* Footer */}
      <div className="p-4 text-right">
        <a href="https://wa.me/+6282282816854" className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;
