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
  <iframe   src="https://www.youtube.com/embed/ywdSDDpMzKk" title="a" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/Wxdrig85Tno" title="b" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/rqwLLR9nSdk" title="c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  
  </Carousel.Item>
  <Carousel.Item>
  <iframe   src="https://www.youtube.com/embed/VbmWW9ytCMQ" title="d" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/OwNNaeYq_gM" title="e" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/OB_aMR3hkmM" title="f" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </Carousel.Item>
  <Carousel.Item>
  <iframe   src="https://www.youtube.com/embed/x5TRG-sHqio" title="g" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/2Czprd3v7vI" title="h" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe   src="https://www.youtube.com/embed/opSTqycV4A8" title="i" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </Carousel.Item>
</Carousel>
    )
}

export default Corusal;