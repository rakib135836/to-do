import { main } from "../../../../../libs/config/mongodb";
import BookInfo from "../../../../../libs/models/bookingInfo";


export const DELETE = async (request, { params }) => {
  try {
    await main();
    await BookInfo.findByIdAndDelete(params.id);
    return new Response("Delete Successfully", { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Delete Failed", { status: 404 });
  }
};

export const PATCH = async (request, { params }) => {
  const { name, title } = await request.json();
  try {
    await main();
    const exitingBook = await BookInfo.findById(params.id);
    if (!exitingBook) {
      return new Response("Book not found ", { status: 404 });
    }
    exitingBook.name = name;
    exitingBook.title = title;
    await exitingBook.save();
     return new Response("Book not found ", { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("error updating data ", { status: 500 });
  }
};
