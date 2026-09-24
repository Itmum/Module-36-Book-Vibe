"use client";
import ListedBooksCard from "@/components/listedBook/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import Image from "next/image";
import React, { useContext } from "react";

const ListedBooksPage = () => {
  const booksProvider = useContext(BooksContext);
  if (!booksProvider) {
    throw new Error("BooksContext is not available");
  }
  const { readBooks, wishList } = booksProvider;
  console.log(readBooks, "Read Books");
  console.log(wishList, "Wishlist");
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        Listed Books
      </h1>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          {readBooks.length > 0 ? (
            readBooks.map((book) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center">No Read Books Found</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 scroll-py-4">
          {wishList.length > 0 ? (
            wishList.map((book) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center">No Read Books Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
