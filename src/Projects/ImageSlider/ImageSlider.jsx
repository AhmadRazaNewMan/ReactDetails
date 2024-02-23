// import React, { useEffect, useState } from "react";

// const ImageSlider = ({ url, page, limit }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [photos, setPhotos] = useState([]);

//   const fetchImagesFunction = async (getUrl) => {
//     try {
//       setLoading(true);
//       const data = await fetch(`${getUrl}?page=${page}$&limit=${limit}`);
//       const res = await data.json();
//       if (res) {
//         setPhotos(res);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (url !== "") {
//       fetchImagesFunction(url);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url]);
//   console.log(photos);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return <div>
//     <h1>Image Slider </h1>
//      {photos.length>0 &&
//         photos.map((item)=>(
//             <div key={item.id}>
//                 <img src={item.url} alt={item.author}/>
//             </div>
//         ))
//      }
//   </div>;
// };

// export default ImageSlider;
