import { useParams } from "react-router";
import useOurResources from "../components/hooks/useOurResources";
import HeadingTitle from "../components/shared/heading/HeadingTitle";
import { useEffect, useState } from "react";
import Loader from "../components/shared/loader/Loader";

const LogisticSupports = () => {
  const { category } = useParams();
  //
  const [equipments, isLoading] = useOurResources();
  const [subItmes, setSubItems] = useState([]);
  console.log(subItmes);

  useEffect(() => {
    // 
    if (!equipments || equipments.length === 0) return;
    // 
    const categoriesItems = equipments.filter(
      (item) => item?.category === category
    );
    const flattenedItems = categoriesItems.map((i) => i?.items).flat();
    setSubItems(flattenedItems);
  }, [category,equipments]);


  if(isLoading) return <Loader/>

  //
  return (
    <div>
      <HeadingTitle title={category.split("-").join(" ")} />
      {/* main content */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subItmes?.map((i) => (
          <div key={i?.id} className="font-roboto">
            <figure>
              <img loading="lazy" className="w-full h-56 object-fill" src={i?.image} alt={i.name} />
            </figure>
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
              <span className="text-base font-bold">{i?.name}</span>
              <span className="text-sm font-Poppins font-semibold">Model : {i?.brand}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LogisticSupports;
