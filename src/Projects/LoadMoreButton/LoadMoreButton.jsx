import React, { useEffect, useState } from 'react';

const LoadMoreButton = () => {
    let initialValue = 5; 
    const [data, setData] = useState([]);
    const [showmore, setShowMore] = useState(initialValue);
    const [showless,setShowLess] = useState(false)

    const fetchDataFunction = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDataFunction();
    }, []);

    const loadMoreData = () => {
        setShowMore(data.length);
        setShowLess(true)
    };
    const showlessData = () => {
        setShowMore(initialValue);
        setShowLess(false)
    };

    return (
        <div className='flex flex-col items-center border-2 justify-center'>
            {data.slice(0, showmore).map((item) => (
                <div key={item.id} className='border-2 border-black text-wrap w-60 h-80'>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" width={100} height={100}  />
                </div>
            ))}
         {showmore<data.length ?<button type='button' onClick={loadMoreData}>load More Data</button>:<button type='button' onClick={showlessData}>Show Less</button>}
            
        </div>
    );
};

export default LoadMoreButton;
