import React, {useState, useEffect} from 'react'
import './Fetchimage.css';
const Fetchimage = () => {

    const [image, setImage] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((data) => data.json())
            .then((response) => setImage(response.message))
            .catch((error) => console.log(error));
    }, [])
  return (
    <img className='randomImage' src={image} alt='Not found'/>
  )
}
export default Fetchimage;
