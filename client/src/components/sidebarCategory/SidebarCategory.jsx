import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sidebarCategory/SidebarCategory.css';
import { ListFilterIcon } from 'lucide-react';
import {  BsCoin } from 'react-icons/bs';

const SidebarCategory = ({ setCategory, setPriceRange }) => {
  // to handle category filtration
  const handleCategoryProducts = (e) => {
    const selectedCategory = e.target.getAttribute('data-value');
    setCategory(selectedCategory);
  };

  // to handle price filtration
  const handlePriceChange = (e) => {
    const priceRange = JSON.parse(e.target.value);  // Parse the array string
    setPriceRange(priceRange);
  };

  return (
    <div>
      <div className='flex m-side d-none d-sm-none d-md-block'>
        
        <div className='d-flex title'>
          <ListFilterIcon size={24} className='d-flex align-self-center' />
          <p>Categories</p>
        </div>
        <div className='m-main'>
          <p data-value='tv' onClick={handleCategoryProducts}>TV</p>
          <p data-value='audio' onClick={handleCategoryProducts}>Audio</p>
          <p data-value='laptop' onClick={handleCategoryProducts}>Laptop</p>
          <p data-value='mobile' onClick={handleCategoryProducts}>Mobile</p>
          <p data-value='gaming' onClick={handleCategoryProducts}>Gaming</p>
          <p data-value='appliances' onClick={handleCategoryProducts}>Appliances</p>
        </div>

        {/* Price Filter */}
        <div className='d-flex title'>
                  {/* <ListFilterIcon size={24} className='d-flex align-self-center' /> */}
                  <BsCoin   size={16} className='d-flex align-self-center'/>
          <p  className='p-title'>Filter by Price</p>
        </div>
        <div className='m-main'>
          <div className='d-flex mb-3'>
            <input className="form-check-input " type="radio" name="price" value="[0,2000]" onChange={handlePriceChange} />
            <label  className="ms-3">All</label>
          </div>
          <div className='d-flex mb-3'>
            <input className="form-check-input " type="radio" name="price" value="[0,500]" onChange={handlePriceChange} />
            <label  className="ms-3">$0 - $500</label>
          </div>
          <div className='d-flex mb-3'>
            <input className="form-check-input " type="radio" name="price" value="[500,1000]" onChange={handlePriceChange} />
            <label  className="ms-3">$500 - $1000</label>
          </div>
          <div className='d-flex mb-3'>
            <input className="form-check-input" type="radio" name="price" value="[1000,5000]" onChange={handlePriceChange} />
            <label className="ms-3">$1000 - $2000</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCategory;