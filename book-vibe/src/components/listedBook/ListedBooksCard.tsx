import { IBooks } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListedBooksCard = ({ book }: { book: IBooks }) => {
  return (
    <div
      key={book.bookId}
      className="card card-side bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4 gap-4 sm:gap-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full"
    >
      {/* Left Area: Responsive Book Cover (Locks dimensions cleanly without fixed layout stretching) */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex-shrink-0 flex justify-center items-center w-28 h-36 relative">
        <Image
          fill
          src={book.image}
          alt={`Book cover of ${book.bookName}`}
          className="object-cover rounded shadow-sm"
          sizes="112px"
        />
      </div>

      {/* Right Area: Dynamic Specifications Content Block */}
      <div className="flex-1 flex flex-col justify-between w-full h-full gap-2">
        <div>
          {/* Tags & Categories Row */}
          <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start mb-1">
            <span className="badge badge-sm bg-emerald-50 border-emerald-200 text-emerald-700 font-bold">
              {book.tags.join(", ")}
            </span>
            <span className="badge badge-sm bg-slate-100 border-slate-200 text-slate-500 font-medium">
              {book.category}
            </span>
          </div>

          {/* Book Identity Titles */}
          <h2 className="font-extrabold text-xl text-slate-800 line-clamp-1">
            {book.bookName}
          </h2>
          <p className="text-sm font-semibold text-slate-500 mt-0.5">
            By {book.author}
          </p>

          {/* Horizontal Technical Metadata Info */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-medium mt-3 justify-center sm:justify-start">
            <span>
              <strong>Publisher:</strong> {book.publisher}
            </span>
            <span>•</span>
            <span>
              <strong>Year:</strong> {book.yearOfPublishing}
            </span>
            <span>•</span>
            <span>
              <strong>Length:</strong> {book.totalPages} Pages
            </span>
          </div>
        </div>

        {/* Footer Metrics & Actions Row */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-2 w-full">
          <div className="flex items-center gap-1 font-bold text-sm text-slate-700">
            <span className="text-amber-500 text-base">★</span>
            <span>{book.rating.toFixed(1)}</span>
          </div>
        </div>
        <Link
          href={`/books/${book.bookId}`}
          className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg px-4 border-none shadow-sm transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListedBooksCard;
