import ReadButton from "@/components/bookDetail/ReadButton";
import WishlistButton from "@/components/bookDetail/WishlistButton";
import { IBooks } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IBookDetailPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

const getBook = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const books = await res.json();
  //   const book = books.find((book) => String(book.bookId) === String(bookId));
  return books;
};
const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
  const { bookId } = await params;
  console.log(bookId);
  const booksData = await getBook();
  const book: IBooks | undefined = booksData.find((book: IBooks) => {
    return String(book.bookId) === String(bookId);
  });
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Navigation Breadcrumb Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="btn btn-sm btn-ghost gap-2 text-slate-500 hover:text-emerald-600 transition-colors"
          >
            ← Back to Collection
          </Link>
        </div>

        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 bg-base-100 border border-slate-200/60 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
          {/* Left Column: Responsive Book Artwork Display (Spans 4 columns on desktop) */}
          <div className="md:col-span-4 flex flex-col items-center justify-start gap-4">
            <div className="bg-slate-50/80 border border-slate-100 w-full rounded-2xl p-8 flex justify-center items-center shadow-inner">
              <div className="relative w-48 h-72 sm:w-56 sm:h-80 shadow-2xl rounded-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  fill
                  src={book?.image || "/default-cover.jpg"}
                  alt={`Book cover art for ${book?.bookName || "Unknown Book"}`}
                  className="object-cover"
                  sizes="(max-width: 768px) 224px, 224px"
                  priority
                  unoptimized
                />
              </div>
            </div>
            {/* Quick Info Summary Box */}
            <div className="w-full stats stats-vertical shadow-sm border border-slate-100 bg-slate-50/40 text-center">
              <div className="stat py-3">
                <div className="stat-title text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Rating Score
                </div>
                <div className="stat-value text-xl text-amber-500 mt-1 flex items-center justify-center gap-1">
                  <span>★</span> {book?.rating?.toFixed(1)}
                </div>
              </div>
              <div className="stat py-3 border-t border-slate-100">
                <div className="stat-title text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Length
                </div>
                <div className="stat-value text-xl text-slate-700 mt-1">
                  {book?.totalPages} Pages
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Book Details & Meta Information (Spans 8 columns on desktop) */}
          <div className="md:col-span-8 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-4">
              {/* Header Content Info */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-2">
                  {book?.bookName || "Unknown Book Title"}
                </h1>
                <p className="text-lg font-semibold text-white/80 mb-4">
                  By{" "}
                  <span className="text-white font-bold">
                    {book?.author || "Unknown Author"}
                  </span>
                </p>
              </div>

              {/* DaisyUI Badge Rows (Comma-separated array looping practices) */}
              <div className="flex flex-wrap gap-2 items-center py-2 border-y border-slate-100">
                <span className="badge badge-lg bg-emerald-50 border-emerald-200 text-emerald-700 font-semibold px-3.5 py-4 rounded-full">
                  Tags: {book?.tags?.join(", ") || "No tags available"}
                </span>
                <span className="badge badge-lg bg-blue-50 border-blue-200 text-blue-700 font-semibold px-3.5 py-4 rounded-full">
                  Category: {book?.category || "Unknown Category"}
                </span>
              </div>

              {/* Review Block Section */}
              <div className="mt-2">
                <h3 className="text-lg font-bold text-white mb-2">
                  Review Summary
                </h3>
                <p className="text-slate-600 leading-relaxed text-justify font-medium text-sm sm:text-base">
                  {book?.review || "No review available"}
                </p>
              </div>

              {/* Technical Specifications Data Table */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white mb-3">
                  Product Specifications
                </h3>
                <div className="overflow-x-auto border border-slate-100 rounded-xl">
                  <table className="table table-compact w-full text-slate-600 bg-slate-50/30">
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="font-semibold text-slate-400 w-1/3 py-3 pl-4">
                          Publisher
                        </td>
                        <td className="font-bold text-slate-700 py-3">
                          {book?.publisher || "Unknown Publisher"}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="font-semibold text-slate-400 py-3 pl-4">
                          Year Published
                        </td>
                        <td className="font-bold text-slate-700 py-3">
                          {book?.yearOfPublishing || "Unknown Year"}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-400 py-3 pl-4">
                          Total Pages
                        </td>
                        <td className="font-bold text-slate-700 py-3">
                          {book?.totalPages} pages
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* DaisyUI Button Interactive Action Row */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-100">
              <ReadButton book={book}></ReadButton>
              <WishlistButton book={book}></WishlistButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
