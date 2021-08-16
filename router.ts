import { Router } from "./deps.ts";
import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} from "./controllers/books.ts";
import { getInfo, addInvoice } from "./controllers/lightning.ts";

const router = new Router();
router
  .get("/ln/getinfo", getInfo)
  .post("/ln/invoices", addInvoice)
  .get("/books", getBooks)
  .get("/books/:isbn", getBook)
  .post("/books", addBook)
  .put("/books/:isbn", updateBook)
  .delete("/books/:isbn", deleteBook);

export default router;
