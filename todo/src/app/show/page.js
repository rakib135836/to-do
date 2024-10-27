"use client";

import Info from "@/components/Info";
import { useEffect, useState } from "react";

const FetchPage = () => {
  const [books, setBooks] = useState([]);
  const fetchBook = async () => {
    const response = await fetch("/api/book");
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const handleDelete = async (book) => {
    console.log("delete successfully", book);
    const confirmed = confirm("Are you sure to delete this data !");
    if (confirmed) {
      try {
        await fetch(`/api/book/${book._id.toString()}`, {
          method: "DELETE",
        });

        const remaining = books.filter((item) => item._id != book._id);
        setBooks(remaining);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleUpdate = async (book , newBookName , newBookTitle) =>{
    console.log("Update Successfully" , book)
    const updateData = confirm("Are you sure update data")
   if(updateData){
    try{
       const response = await fetch(`/api/book/${book._id}`,{
          method:"PATCH",
          body:JSON.stringify({
            name: newBookName,
            title:newBookTitle
          })
        })
        if(response?.ok){
          alert("Update Successfully")
          fetchBook();
        }

    }
    catch (error){
        console.log(error.message)

    }
   }
  }
  return (
    <div>
      <h3 className="text-center text-red-700">Your Data : {books.length}</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
        {books.map((book) => (
          <Info
            key={book.id}
            book={book}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></Info>
        ))}
      </div>
    </div>
  );
};

export default FetchPage;
