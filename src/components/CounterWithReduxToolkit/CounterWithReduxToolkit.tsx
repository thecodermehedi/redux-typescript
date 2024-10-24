import { increment, decrement, incrementByAmount } from '../../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

const CounterWithReduxToolkit = () => {
 const dispatch = useAppDispatch();
 const count = useAppSelector((state) => state.counter.count);

 return (
  <div className="h-screen w-auto flex justify-center items-center selection:bg-none">
   <div className="p-10 flex flex-col justify-between items-center gap-16 bg-gray-100 rounded-md">
    <div
     onClick={() => dispatch(decrement())}
     className="px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white transition-colors
         duration-300 ease-in-out cursor-pointer shadow hover:shadow-md">
     - Decrement
    </div>
    <p className="text-2xl font-bold">{count}</p>
    <div
     onClick={() => dispatch(increment())}
     className="px-3 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors duration-300 ease-in-out cursor-pointer shadow hover:shadow-md">
     + Increment
    </div>
    <div
     onClick={() => dispatch(incrementByAmount(5))}
     className="px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300 ease-in-out cursor-pointer shadow hover:shadow-md">
     +5
    </div>
   </div>
  </div>
 );
};

export default CounterWithReduxToolkit;
