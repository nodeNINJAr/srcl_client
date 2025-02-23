import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useOurServices from "../../components/hooks/useOurServices";


const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [services] = useOurServices();

  useEffect(() => {
    const selectedService = services.find((s) => s._id === parseInt(id));
    setService(selectedService);
  }, [id]);

  if (!service) return <div className="text-center text-gray-500">Service not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
      <p className="text-gray-600 mt-2">{service.short_desc}</p>
      <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg mt-4" />

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">About This Service</h2>
        <p className="text-gray-700 mt-2">{service.details.description}</p>

        {service.details.programs && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Programs Offered:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {service.details.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>
        )}

        {service.details.services && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Services Offered:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {service.details.services.map((serviceItem, index) => (
                <li key={index}>{serviceItem}</li>
              ))}
            </ul>
          </div>
        )}

        {service.details.target_audience && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Target Audience:</h3>
            <p className="text-gray-700">{service.details.target_audience.join(", ")}</p>
          </div>
        )}

        {service.details.industries_served && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Industries Served:</h3>
            <p className="text-gray-700">{service.details.industries_served.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
