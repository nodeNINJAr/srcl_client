import React from 'react'

const OurClient = () => {
  const images = [
    { id: 1, image: "https://i.ibb.co.com/0j4NtrQG/360-F-261953928-p-I6-As-HQqz9za-Yz-Qs-removebg-preview-1.png" },
    { id: 2, image: "https://i.ibb.co.com/TDnGQtb6/1024px-BEXIMCO-logo-svg-removebg-preview.png" },
    { id: 3, image: "https://i.ibb.co.com/v6b7HqL9/All-logo-01-removebg-preview.png" },
    { id: 4, image: "https://i.ibb.co.com/Hf8g7R4F/baira-logo-removebg-preview.png" },
    { id: 5, image: "https://i.ibb.co.com/b5tjz0Hq/BFLLFEA-removebg-preview.png" },
    { id: 6, image: "https://i.ibb.co.com/TBSypfHD/BSK-English-Logo-Centre-v2-1024x-removebg-preview.png" },
    { id: 7, image: "https://i.ibb.co.com/gb81h03L/dudak-logo-png-seeklogo-531956-removebg-preview.png" },
    { id: 8, image: "https://i.ibb.co.com/8nsvpZwD/hq720-1-removebg-preview.png" },
    { id: 9, image: "https://i.ibb.co.com/My1gcx5d/hq720-2-removebg-preview.png" },
    { id: 10, image: "https://i.ibb.co.com/2380FKhM/ICT-2024-08-14-66bbb2cc64eef-removebg-preview.png" },
    { id: 11, image: "https://i.ibb.co.com/TDBCmcRY/Image9-removebg-preview.png" },
    { id: 12, image: "https://i.ibb.co.com/23jK6N30/image-removebg-preview.png" },
    { id: 13, image: "https://i.ibb.co.com/8gfQQTWb/images-1-removebg-preview.png" },
    { id: 14, image: "https://i.ibb.co.com/ynz8m683/images-2-removebg-preview.png" },
    { id: 15, image: "https://i.ibb.co.com/bR3bbLML/images-3-removebg-preview.png" },
    { id: 16, image: "https://i.ibb.co.com/W4jMjQ8z/images-4-removebg-preview.png" },
    { id: 17, image: "https://i.ibb.co.com/ynzwHF60/images-5-removebg-preview.png" },
    { id: 18, image: "https://i.ibb.co.com/KRPrG0V/images-removebg-preview.png" },
    { id: 19, image: "https://i.ibb.co.com/vCZVqQRC/L2-min-300x180-removebg-preview.png" },
    { id: 20, image: "https://i.ibb.co.com/HDzLrnmD/lokkhipur-removebg-preview.png" },
    { id: 21, image: "https://i.ibb.co.com/v48nSnnf/sarkari-niyog-13-removebg-preview.png" },
    { id: 22, image: "https://i.ibb.co.com/Hfz8wQ13/undp-logo-png-seeklogo-322648-removebg-preview.png" },
    { id: 23, image: "https://i.ibb.co.com/PZj93vWk/untitled-design-2023-06-24t110-removebg-preview.png" },
    { id: 24, image: "https://i.ibb.co.com/yBdpC2p6/Untitled-1-copy-311-1-2411241336-removebg-preview.png" },
    { id: 26, image: "https://i.ibb.co.com/4wHp1fRs/grid-img-43-removebg-preview.png" },
    { id: 27, image: "https://i.ibb.co.com/v4mLhDp8/grid-img-50-removebg-preview.png" },
    { id: 28, image: "https://i.ibb.co.com/jpVRtX0/grid-img-53-removebg-preview.png" },
    { id: 29, image: "https://i.ibb.co.com/wZ85QNvS/grid-img-46-removebg-preview.png" },
    { id: 30, image: "https://i.ibb.co.com/qFBw0ZP5/grid-img-55-removebg-preview.png" },
    { id: 31, image: "https://i.ibb.co.com/wh8C8JR4/grid-img-54-removebg-preview.png" },
    { id: 32, image: "https://i.ibb.co.com/jk7zZNPF/grid-img-29-removebg-preview.png" },
    { id: 33, image: "https://i.ibb.co.com/7JpmD5Pg/grid-img-27-removebg-preview.png" },
    { id: 34, image: "https://i.ibb.co.com/BDggrpX/grid-img-51-removebg-preview.png" },
    { id: 35, image: "https://i.ibb.co.com/4wyscNDB/grid-img-41-removebg-preview.png" },
    { id: 36, image: "https://i.ibb.co.com/MbMddJs/grid-img-28-removebg-preview.png" },
    { id: 37, image: "https://i.ibb.co.com/6RWLGT9G/grid-img-48-removebg-preview.png" },
    { id: 38, image: "https://i.ibb.co.com/3yzVm9Sv/grid-img-39-removebg-preview.png" },
    { id: 39, image: "https://i.ibb.co.com/yBsCfSSq/grid-img-26-removebg-preview.png" },
    { id: 40, image: "https://i.ibb.co.com/B2Y1D5Dg/grid-img-44-removebg-preview.png" },
    { id: 41, image: "https://i.ibb.co.com/DP8ZGwvg/grid-img-47-removebg-preview.png" },
    { id: 42, image: "https://i.ibb.co.com/Kj2s3SNp/grid-img-32-removebg-preview.png" },
    { id: 43, image: "https://i.ibb.co.com/Q7wkYWsQ/grid-img-36-removebg-preview.png" },
    { id: 44, image: "https://i.ibb.co.com/8Lhz3k4w/grid-img-31-removebg-preview.png" },
    { id: 45, image: "https://i.ibb.co.com/twpjMynW/grid-img-52-removebg-preview.png" },
    { id: 46, image: "https://i.ibb.co.com/RGzdwyhx/grid-img-40-removebg-preview.png" },
    { id: 47, image: "https://i.ibb.co.com/LD8r6McW/grid-img-33-removebg-preview.png" },
    { id: 48, image: "https://i.ibb.co.com/NdC8mtCC/grid-img-30-removebg-preview.png" },
  ];
  
    // 
  return (
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4'>
  {images?.map((image) => (
    <figure
      className='w-full mx-auto bg-white/40 backdrop-blur-lg h-32 rounded-xl p-1 flex items-center'
      key={image?.id}
      style={{ height: 'auto' }} // Allow the height to adjust based on the image
    >
      <img
        className='w-full h-fit object-fill mx-auto rounded-xl p-2 mix-' // Ensure the image covers the grid cell
        src={image?.image}
        alt={`Image ${image.id}`}
      />
    </figure>
  ))}
</div>
  )
}

export default OurClient