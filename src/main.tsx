import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import AddressComponent from './components/AddressComponent'; // Ensure this path is correct
import './index.css';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <Provider store={store}>
   <AddressComponent />
  </Provider>
 </StrictMode>
);
