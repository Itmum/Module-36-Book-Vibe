"use client";
import { IBooks } from "@/types/books.type";
import React, { createContext, useState } from "react";
export interface IBooksContext {
  readBooks: IBooks[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBooks[]>>;
  wishList: IBooks[];
  setWishList: React.Dispatch<React.SetStateAction<IBooks[]>>;
}
export const BooksContext = createContext<IBooksContext | undefined>(undefined);
const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBooks[]>([]);
  const [wishList, setWishList] = useState<IBooks[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };
  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
