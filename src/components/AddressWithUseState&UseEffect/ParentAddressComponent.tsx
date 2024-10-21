import { useEffect, useState } from "react";
import ChildAddressComponent from "./ChildAddressComponent";

const ParentAddressComponent = () => {
 const initialAddress = { division: '', district: '', upazila: '' };
 const [presentAddress, setPresentAddress] = useState(initialAddress);
 const [permanentAddress, setPermanentAddress] = useState(initialAddress);

 useEffect(() => {
  setPresentAddress({ "division": "Khulna", "district": "Chuadanga", "upazila": "Damurhuda" })
  setPermanentAddress({ "division": "Khulna", "district": "Jhenaidah", "upazila": "Maheshpur" })
 }, [])

 return (
  <main className="flex">
   <ChildAddressComponent label="Present Address" address={presentAddress} setAddress={setPresentAddress} />
   <ChildAddressComponent label="Permanent Address" address={permanentAddress} setAddress={setPermanentAddress} />
  </main>
 )
}

export default ParentAddressComponent;
