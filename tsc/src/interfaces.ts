interface Book {
  id: number;
  title: string;
  author: string;
  coAuthor?: string; // ? La propiedad es opcional y no es requerida
  isLoan?: (id: number) => void; // void cuando el metodo o la funcion no retorna nada
}

const book: Book = {
  id: 5,
  title: 'My title',
  author: 'Pablo',
};

const books: Book[] = [];

function getBook(): Book {
  return { id: 1, title: 'Other title', author: 'Jacob' };
}

const myBook = getBook();
myBook.title;

function createBook(book: Book): Book {
  return book;
}

const newBook: Book = {
  id: 5,
  title: 'New title',
  author: 'Carolina',
};

createBook(newBook);
