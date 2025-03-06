import React from 'react'
import OurProjectCard from '../../components/card/OurProjectCard';

const OnGoing = () => {
  //  s
  // const completedProjects = [
  //   {
  //     id: 1,
  //     title: "Environmental Quality Survey for Narayanganj Transport Plan",
  //     short_description: "Assessing environmental impacts for sustainable urban transport.",
  //     description: "A comprehensive survey to evaluate the environmental impact of the proposed transport master plan for Narayanganj City Corporation, ensuring sustainable urban mobility.",
  //     image: "https://via.placeholder.com/400x250"
  //   },
  //   {
  //     id: 2,
  //     title: "Upgrading National Highway N-6 and N-603 (Rajshahi Bypass)",
  //     short_description: "Expansion of highways to four lanes for better connectivity.",
  //     description: "Development of the Belpukur to Katakhali section of National Highway N-6 and the Rajshahi Bypass (N-603) into four lanes to enhance transportation efficiency and safety.",
  //     image: "https://via.placeholder.com/400x250"
  //   },
  //   {
  //     id: 3,
  //     title: "Southern Agricultural Improvement Project (SAIP)",
  //     short_description: "Boosting agricultural productivity in southern regions.",
  //     description: "A project aimed at modernizing agricultural practices, improving irrigation, and increasing farm productivity in the southern regions of Bangladesh.",
  //     image: "https://via.placeholder.com/400x250"
  //   },
  //   {
  //     id: 4,
  //     title: "Sustainable Management of Inland Fisheries",
  //     short_description: "Ecosystem-based fisheries management for sustainability.",
  //     description: "A stocktaking report on the sustainable management of inland fisheries using an ecosystem-based approach to ensure long-term conservation and resource efficiency.",
  //     image: "https://via.placeholder.com/400x250"
  //   },
  //   {
  //     id: 5,
  //     title: "Good Aquaculture Practices & Cluster Farming",
  //     short_description: "Promoting sustainable aquaculture and farming techniques.",
  //     description: "A study on the implementation of good aquaculture practices and the benefits of cluster farming in enhancing production and sustainability in the aquaculture sector.",
  //     image: "https://via.placeholder.com/400x250"
  //   },
  //   {
  //     id: 6,
  //     title: "Women's Income-Generating Training (Phase 2)",
  //     short_description: "Empowering women through skill-based training.",
  //     description: "An initiative designed to provide women at the Upazila level with income-generating training, enhancing their employment opportunities and financial independence.",
  //     image: "https://via.placeholder.com/400x250"
  //   },
  //   {
  //     id: 7,
  //     title: "Chattogram Tax Building Construction",
  //     short_description: "New tax office infrastructure in Chattogram.",
  //     description: "Construction of a modern tax office building in Chattogram to improve administrative efficiency and facilitate better taxpayer services.",
  //     image: "https://via.placeholder.com/400x250"
  //   },
  //   {
  //     id: 8,
  //     title: "GIS Survey for Natural Capital Mapping",
  //     short_description: "Mapping land cover and natural capital using GIS.",
  //     description: "A GIS-based field survey aimed at generating land cover and natural capital maps to support integrated forest management and conservation efforts.",
  //     image: "https://via.placeholder.com/400x250"
  //   }
  // ];
  
  const ongoingProjects = [
    {
      id: 9,
      title: "Renovation of Government Water Bodies in Mymensingh",
      short_description: "Restoring ponds and water bodies for better resource management.",
      description: "A project focused on renovating and excavating government-owned ponds, kachari ponds, and other water bodies in Mymensingh to enhance water conservation and usage.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 10,
      title: "Assessment of Pond Sand Filter & Groundwater Salinity",
      short_description: "Evaluating water filtration systems for safe drinking water.",
      description: "A detailed assessment of pond sand filters, reverse osmosis systems, and groundwater salinity levels to ensure safe drinking water access in affected areas.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 11,
      title: "Development of Bangladesh Fisheries Survey Method",
      short_description: "Enhancing data collection for fisheries resource assessment.",
      description: "A project aimed at improving the methodology for surveying and analyzing Bangladesh’s fisheries resources to support sustainable fisheries management.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 12,
      title: "Bangladesh Energy Regulatory Commission (BERC) Building Construction",
      short_description: "New headquarters for energy regulation and governance.",
      description: "Construction of a state-of-the-art office building for the Bangladesh Energy Regulatory Commission (BERC) to enhance governance in the energy sector.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 13,
      title: "Academic Building Construction for National Heart Institute",
      short_description: "Expanding medical education and research facilities.",
      description: "Development of an academic building at the National Heart Institute in Sher-e-Bangla Nagar, Dhaka, to support medical education, research, and training.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 14,
      title: "Rajshahi 4-Lane Connecting Road Construction",
      short_description: "New four-lane road to improve city connectivity.",
      description: "Construction of a four-lane connecting road from Alif Lam Meem Bhata to Kashiadanga Rail Crossing, enhancing traffic flow and connectivity in Rajshahi.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 15,
      title: "Upgrading Regional Highways (Phase 2 - Rangpur Zone)",
      short_description: "Widening regional highways for better transport.",
      description: "A project to upgrade regional highways in the Rangpur Zone, improving road conditions and expanding capacity to meet growing transportation needs.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 16,
      title: "Expansion of Chattogram-Cox’s Bazar Highway (N-1)",
      short_description: "Upgrading a major highway to support tourism and trade.",
      description: "Expansion of the Chattogram to Cox’s Bazar section of the N-1 National Highway into four lanes, facilitating smoother travel and boosting regional tourism.",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  
  
  
  // 
  return (
    <div>
        {ongoingProjects?.map(project=>(
            <OurProjectCard key={project?.id} project={project}/>
        ))}
    </div>
  )
}

export default OnGoing