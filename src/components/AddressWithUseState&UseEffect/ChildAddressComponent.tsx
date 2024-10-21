import axios from "axios";
import { useEffect, useState } from "react";

type TAddress = {
 division: string,
 district: string,
 upazila: string
}

type TDivision = {
 division: string
 divisionbn: string
 coordinates: string
}

type TDistrict = {
 district: string
 districtbn: string
 coordinates: string
}

const ChildAddressComponent = ({
 label,
 address,
 setAddress
}: {
 label: string;
 address: TAddress;
 setAddress: React.Dispatch<React.SetStateAction<TAddress>>;
}) => {
 const [divisionArray, setDivisionArray] = useState<TDivision[]>([])
 const [selectedDivision, setSelectedDivision] = useState(address.division)
 const [districtArray, setDistrictArray] = useState<TDistrict[]>([])
 const [selectedDistrict, setSelectedDistrict] = useState(address.district)
 const [upazilaArray, setUpazilaArray] = useState<string[]>([])
 const [selectedUpazila, setSelectedUpazila] = useState(address.upazila)
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  (async () => {
   try {
    setLoading(true); // Start loading
    const result = await axios('https://bdapis.com/api/v1.2/divisions');
    setDivisionArray(result.data.data);
   } catch (err) {
    console.error(err);
   } finally {
    setLoading(false); // Stop loading after requests are done
   }
  })();
 }, []);

 useEffect(() => {
  if (selectedDivision) {
   (async () => {
    const result = await axios(`https://bdapis.com/api/v1.2/division/${selectedDivision}`);
    setDistrictArray(result.data.data);
    setAddress(prev => ({ ...prev, division: selectedDivision }));
   })();
  }
 }, [selectedDivision, setAddress]);

 useEffect(() => {
  if (selectedDistrict) {
   (async () => {
    const result = await axios(`https://bdapis.com/api/v1.2/district/${selectedDistrict}`);
    setUpazilaArray(result.data.data[0].upazillas);
    setAddress(prev => ({ ...prev, district: selectedDistrict }));
   })();
  }
 }, [selectedDistrict, setAddress]);

 useEffect(() => {
  if (selectedUpazila) {
   setAddress(prev => ({ ...prev, upazila: selectedUpazila }));
  }
 }, [selectedUpazila, setAddress]);

 useEffect(() => {
  setSelectedDivision(address.division);
  setSelectedDistrict(address.district);
  setSelectedUpazila(address.upazila);
 }, [address]);

 if (loading) return <div className="min-h-screen w-full flex justify-center items-center">Loading...</div>;

 return (
  <div className="border rounded-lg p-4 m-4 space-y-4 w-full">
   <h2 className="text-2xl font-bold">{label}</h2>
   <div className="flex items-center justify-start gap-x-4">
    <div className="min-w-52">
     <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
      Division
     </label>
     <select id="division" name="division" className="p-2 border border-gray-300 w-full rounded-lg"
      value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)}>
      <option value="">Select Division</option>
      {divisionArray?.map((item) => (
       <option key={item.division} value={item.division}>{`${item.division} (${item?.divisionbn})`}</option>
      ))}
     </select>
    </div>
    <div className="min-w-52">
     <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
      District
     </label>
     <select id="district" name="district" className="p-2 border border-gray-300 w-full rounded-lg"
      disabled={selectedDivision === ""} value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
      <option value="">Select District</option>
      {districtArray?.map((item) => (
       <option key={item.district} value={item.district}>{`${item.district} (${item?.districtbn})`}</option>
      ))}
     </select>
    </div>
    <div className="min-w-52">
     <label htmlFor="upazila" className="block text-sm font-medium text-gray-700 mb-1">
      Upazila
     </label>
     <select id="upazila" name="upazila" className="p-2 border border-gray-300 w-full rounded-lg"
      disabled={selectedDistrict === ""} value={selectedUpazila} onChange={(e) => setSelectedUpazila(e.target.value)}>
      <option value="">Select Upazila</option>
      {upazilaArray?.map((item) => (
       <option key={item} value={item}>{item}</option>
      ))}
     </select>
    </div>
   </div>
   <div>
    <h3 className="text-lg font-semibold mb-2">Output:</h3>
    <div className="bg-black p-3 rounded-md relative">
     <pre className="text-sm">
      <code className="text-green-500">
       {`{
  division: "${address.division.toLowerCase()}",
  district: "${address.district.toLowerCase()}",
  upazila: "${address.upazila.toLowerCase()}"
}`}
      </code>
     </pre>
     <button
      onClick={() => navigator.clipboard.writeText(JSON.stringify(address))}
      className="absolute top-2 right-2 p-1 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Copy to clipboard">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       className="w-5 h-5">
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
       />
      </svg>
     </button>
    </div>
   </div>
  </div>
 );
};

export default ChildAddressComponent;
