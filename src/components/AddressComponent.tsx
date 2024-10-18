const AddressComponent = () => {
 const address = {
  division: '',
  district: '',
  upazila: '',
 };
 return (
  <section className="min-h-screen flex justify-center items-center">
   <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Bangladesh Address Selector</h2>
    <div className="space-y-4">
     <div>
      <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
       Division
      </label>
      <select
       id="division"
       name="division"
       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
       <option value="">Select Division</option>
       <option value="Dhaka">Dhaka (ঢাকা)</option>
       <option value="Chittagong">Chittagong (চট্টগ্রাম)</option>
      </select>
     </div>
     <div>
      <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
       District
      </label>
      <select
       id="district"
       name="district"
       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
       <option value="">Select District</option>
       <option value="Dhaka">Dhaka (ঢাকা)</option>
       <option value="Gazipur">Gazipur (গাজীপুর)</option>
      </select>
     </div>
     <div>
      <label htmlFor="upazila" className="block text-sm font-medium text-gray-700 mb-1">
       Upazila
      </label>
      <select
       id="upazila"
       name="upazila"
       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
       <option value="">Select Upazila</option>
       <option value="Savar">Savar (সাভার)</option>
       <option value="Dhamrai">Dhamrai (ধামরাই)</option>
      </select>
     </div>
     <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Selected Address:</h3>
      <div className="bg-gray-100 p-3 rounded-md relative">
       <pre className="text-sm overflow-x-auto">{JSON.stringify(address)}</pre>
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
   </div>
  </section>
 );
};

export default AddressComponent;
