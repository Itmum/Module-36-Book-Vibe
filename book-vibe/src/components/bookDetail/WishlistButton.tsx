"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBooks } from "@/types/books.type";
import { useContext } from "react";

const WishlistButton = ({ book }: { book: IBooks | undefined }) => {
  const booksProvider = useContext(BooksContext);
  if (!booksProvider) {
    throw new Error("BooksContext is not available");
  }
  const { wishList, setWishList } = booksProvider;

  const handleWishlistButton = () => {
    if (!book) {
      alert("Book data is not available.");
      return;
    }
    setWishList([...wishList, book]);
    alert(`${book?.bookName} has been added to your wishlist!`);
    // console.log("Wish List Button Clicked.", book);
  };
  return (
    <button
      className="btn btn-outline border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl px-6 flex-1 sm:flex-none"
      onClick={() => handleWishlistButton()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
