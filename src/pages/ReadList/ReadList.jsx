import React, { useEffect, useState } from 'react';
import { data, useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utilites/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([]);

    const [sort, setSort] = useState('');

    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoreBook();
        const convertedStoreBooks = storedBookData.map(id=> parseInt(id))
        const myReadList = data.filter(book => convertedStoreBooks.includes(book.bookId));
        setReadList(myReadList);
    
    },[])

    const handleSort = (type) => {
        setSort(type);
        if(type === 'pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            console.log(sortedByPage);
        }
        if(type === 'ratings') {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating);
        }
    }

    return (
    <div>

    <details className="dropdown">
        <summary className="btn m-1">Sort By : {sort?sort:''}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a onClick={() => handleSort ('pages')}>pages</a></li>
            <li><a onClick={() => handleSort ('ratings')}>rating</a></li>
        </ul>
    </details>

    <Tabs>
        <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
            <h2>Book i read {readList.length}</h2>

            {
                readList.map(b =><Book key={b.bookId} singleBook={b}></Book> ) 
            }
        </TabPanel>
        <TabPanel>
            <h2>My Wishlist</h2>
        </TabPanel>
    </Tabs>

    </div>
    );
};

export default ReadList;