import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './css/corousel.css'
function Corusal()
{
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
  <iframe   src="https://www.youtube.com/embed/ywdSDDpMzKk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/Wxdrig85Tno" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/rqwLLR9nSdk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  
  </Carousel.Item>
  <Carousel.Item>
  <iframe   src="https://www.youtube.com/embed/VbmWW9ytCMQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/OwNNaeYq_gM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/OB_aMR3hkmM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </Carousel.Item>
  <Carousel.Item>
  <iframe   src="https://www.youtube.com/embed/x5TRG-sHqio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/2Czprd3v7vI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/opSTqycV4A8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </Carousel.Item>
</Carousel>
    )
}

export default Corusal;