import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FsLightbox from 'fslightbox-react'

export default function Gallery() {
  var SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const imgArray = [
    {
      url: '/images/property/property.jpg',
      title: 'Gallery',
      id: '1'
    },
    {
      url: '/images/property/property.jpg',
      title: 'Gallery',
      id: '2'
    }
  ]

  const lightBoxArray = () => {
    const lightBox = []

    imgArray.forEach(v => {
      lightBox.push(v.url)
    })

    return lightBox
  }

  console.log(lightBoxArray())

  const [toggler, setToggler] = React.useState(false)

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <Slider {...SliderSettings}>
        {imgArray.map((v, i) => (
          <div key={v.id}>
            <h3>
              <img src={`${v.url}`} width={500} height={250} alt={'logo'} />
            </h3>
          </div>
        ))}
      </Slider>

      <FsLightbox toggler={toggler} sources={lightBoxArray()} />
    </>
  )
}
