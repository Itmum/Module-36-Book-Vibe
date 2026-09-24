"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBooks } from "@/types/books.type";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: IBooks | undefined }) => {
  const booksprovider = useContext(BooksContext);
  if (!booksprovider) {
    throw new Error("BooksContext is not available");
  }
  const { readBooks, setReadBooks } = booksprovider;
  //   console.log(booksProvider);
  const handleReadButton = () => {
    // console.log("Read Button Clicked");
    if (!book) {
      alert("Book data is not available.");
      return;
    }
    setReadBooks([...readBooks, book]);
    alert(`${book?.bookName} has been marked as read!`);
  };
  return (
    <button
      className="btn bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none shadow-md shadow-emerald-600/10 rounded-xl px-6 flex-1 sm:flex-none"
      onClick={() => handleReadButton()}
    >
      Mark as Read
    </button>
  );
};

export default ReadButton;
