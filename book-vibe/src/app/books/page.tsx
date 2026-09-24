import BooksCard from "@/components/shared/BooksCard";
import { IBooks } from "@/types/books.type";
import Link from "next/link";
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const books = await res.json();
  return books;
};
const BooksPage = async () => {
  const booksData = await getBooks();
  console.log(booksData, "books data from books");
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        All Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {booksData.map((book: IBooks) => (
          <Link key={book.bookId} href={`/books/${book.bookId}`}>
            <BooksCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
