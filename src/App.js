import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MetadataPage = () => {
  const [metadata, setMetadata] = useState({
    title: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch('http://localhost:3001/clicks/metadata/123456');
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
      
        // const data = await response.json();
        const data  ={
          title: 'Telegaram Image Preview',
          description: 'Click here to view more infos',
          imageUrl:
            'https://png.pngtree.com/png-clipart/20220620/ourmid/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_5230763.png',
        };
        console.log(data)
        setMetadata({
          title: data.title,
          description: data.description,
          image: data.image,
        });
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchMetadata();
  }, []);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </Helmet>
      <div>
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        <img src={metadata.image} alt={metadata.title} />
      </div>
    </>
  );
};

export default MetadataPage;
