// app/api/books/[id]/route.ts
import { Params } from "next/dist/server/request/params";
import books from "../../db";

export async function PUT(
    request :Request,
    context :{params:{id:string}}
){
    const id = +context.params.id;
    const book = await request.json();

    const index = books.findIndex((book)=>book.id === id);
    books[index] = book;
    return Response.json(books)

}

export async function DELETE(
    request :Request,
    context :{params:{id:string}}
){
    const id = +context.params.id;

    const index = books.findIndex((book)=>book.id === id);
    books.splice(index,1);
    return Response.json(books);

}