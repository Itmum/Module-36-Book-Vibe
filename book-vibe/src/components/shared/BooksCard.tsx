import { IBooks } from "@/types/books.type";
import Image from "next/image";
import React from "react";

const BooksCard = ({ book }: { book: IBooks }) => {
  return (
    <div className="flex flex-col justify-between w-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Graphic Area: Centered Book Cover Container */}
      <div className="bg-slate-50 p-6 flex justify-center items-center">
        {/* Relative parent controls the dimensions for the responsive 'fill' Image */}
        <div className="relative w-36 h-52 shadow-md rounded overflow-hidden">
          <Image
            fill
            src={book.image}
            alt={`Book cover of ${book.bookName}`}
            className="object-cover"
            sizes="144px"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          {/* Tags & Categories Row (Array comma practices) */}
          <div className="flex gap-2 items-center flex-wrap">
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              {book.tags.join(", ")}
            </span>
            <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full ml-auto">
              {book.category}
            </span>
          </div>

          {/* Book Details */}
          <div className="mt-1">
            <h3
              className="font-bold text-lg text-slate-800 line-clamp-1"
              title={book.bookName}
            >
              {book.bookName}
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-0.5">
              By {book.author}
            </p>
          </div>
        </div>

        {/* Divider Footer Item */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
          <span>{book.totalPages} Pages</span>

          {/* Ratings Item */}
          <div className="flex items-center gap-1">
            <span className="text-amber-500 text-sm">★</span>
            <span className="text-slate-700 font-bold">
              {book.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
