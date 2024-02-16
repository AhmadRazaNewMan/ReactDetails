import React, { useEffect, useState } from 'react';

const UseOfFetch = () => {
    const [photo, setPhoto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/photos");
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setPhoto(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRequest();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ textAlign: 'center' ,width:"50px", height:"50px",display:"flex",textWrap:'wrap'}}>
            <h1>Use of Fetch</h1>
            {photo.map((item) => (
                <div style={{width:"50px", height:"50px"}} key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.url} alt={item.title} />
                </div>
            ))}
        </div>
    );
};

export default UseOfFetch;
