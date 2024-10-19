import React from 'react'
import { ListFilterIcon } from 'lucide-react';
import { BsCoin } from 'react-icons/bs';
import "bootstrap/dist/css/bootstrap.min.css";

const FilterForMobile = ({ setCategory, setPriceRange }) => {
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
          
<button className="btn btn-primary d-none d-sm-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><ListFilterIcon size={24} className='d-flex align-self-center .d-lg-none .d-sm-block ' />Filter</button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">

    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
     <div className='flex m-side '>
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
            <input class="form-check-input " type="radio" name="price" value="[0,2000]" onChange={handlePriceChange} />
            <label  class="ms-3">All</label>
          </div>
          <div className='d-flex mb-3'>
            <input class="form-check-input " type="radio" name="price" value="[0,500]" onChange={handlePriceChange} />
            <label  class="ms-3">$0 - $500</label>
          </div>
          <div className='d-flex mb-3'>
            <input class="form-check-input " type="radio" name="price" value="[500,1000]" onChange={handlePriceChange} />
            <label  class="ms-3">$500 - $1000</label>
          </div>
          <div className='d-flex mb-3'>
            <input class="form-check-input" type="radio" name="price" value="[1000,5000]" onChange={handlePriceChange} />
            <label class="ms-3">$1000 - $2000</label>
          </div>
        </div>
      </div>
  </div>
</div>
    </div>
  )
}

export default FilterForMobile