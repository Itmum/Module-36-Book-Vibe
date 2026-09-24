import { IBooks } from "@/types/books.type";
import BooksCard from "../shared/BooksCard";
import Link from "next/link";
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const books = await res.json();
  return books;
};
const Books = async () => {
  const booksData = await getBooks();
  // console.log(booksData, "books data from books");
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        Popular Books
      </h1>
      <h1 className="text-2xl font-semibold text-white mb-6 text-center">
        Explore our curated collection of popular books, handpicked for every
        reader.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {booksData.slice(0, 4).map((book: IBooks) => (
          <Link key={book.bookId} href={`/books/${book.bookId}`}>
            <BooksCard book={book} />
          </Link>
        ))}
      </div>
      <Link href="/books" className="mt-8 flex justify-center">
        <button className="btn btn-primary mx-auto block">
          View All Books
        </button>
      </Link>
    </div>
  );
};

export default Books;
