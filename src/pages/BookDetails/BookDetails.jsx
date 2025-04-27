import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utilites/addToDB';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, author, review, tags, totalPages, publisher, yearOfPublishing, rating} = singleBook;

    
    const handleMarkAsRead = id => {
      // Store with ID
      // where to store
      // array or collection
      // if book already exists then show a alert
      // if book not exits then push i the collection or array

      MySwal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      addToStoredDB(id);
    }
    

    
    return (
        <div className="flex flex-col md:flex-row gap-8 p-3 h-[711px]">
            <div className="flex-shrink-0 h-full bg-base-300 w-1/2">
                <img className="w-full h-full object-cover rounded-2xl shadow-md py-[60px] px-[74px]" src={image} alt={bookName} />
            </div>

        <div className="flex flex-col justify-between space-y-4 h-full w-full"><div>
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="text-gray-600 pt-4 pb-4">By : <span className="font-medium">{author}</span></p>

        <div className="border-t border-dashed my-2"></div>
        {/* Category */}
        <p className="text-lg font-semibold text-gray-700 pt-4 pb-4">Fiction</p>

      {/* Review */}
        <div className="border-t border-dashed my-2"></div>
        <p className="text-gray-700 text-sm pt-4 pb-4">
        <span className="font-semibold">Review :</span> {review}
        </p>

      {/* Tags */}
        <div className="space-x-2 mt-2 flex gap-6 items-center">Tag : 
        <div className='gap-4 flex'>
        <span className="badge badge-success badge-outline border-none bg-green-100 text-green-400">{tags[0]}</span>
        <span className="badge badge-success badge-outline border-none bg-green-100 text-green-400">{tags[1]}</span>
        </div>
        </div>
    </div>

    {/* Info Table */}
    <div className="border-t border-dashed"></div>
    <div className="space-y-3 text-sm w-72">
      <div className="flex justify-between">
        <span className="text-gray-500">Number of Pages:</span>
        <span className="font-semibold">{totalPages}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Publisher:</span>
        <span className="font-semibold">{publisher}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Year of Publishing:</span>
        <span className="font-semibold">{yearOfPublishing}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Rating:</span>
        <span className="font-semibold">{rating}</span>
      </div>
         {/* Buttons */}
    <div className="flex gap-4 mt-4">
      <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent">Read</button>
      <button className="btn btn-info">Wishlist</button>
    </div>
    </div>

 
        </div>
        </div>
    );
};

export default BookDetails;