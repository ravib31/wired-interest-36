import { Box, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState([]);
  const [price,setPrice]=useState("")

  const handleChange = (e) => {
    const option = e.target.value;
    let newCategoryOptions = [...category];
    if (category.includes(option)) {
      newCategoryOptions.splice(newCategoryOptions.indexOf(option), 1);
    } else {
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  const handleSort=(e)=>{
    setPrice(e.target.value)
  }

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    }
    // if(price){
    //   setSearchParams({ price });
    // }
    if(price && category){
      setSearchParams({ category, price });
    }
    // let params={};
    // params.category=category;
    // price && (params.price=price);
    // setSearchParams(params)
  }, [category, setSearchParams,price]);
  
  return (
    <div >
      <h3>Filters</h3>
      <div>Category</div>
      <div style={{
            fontWeight: "700",
            padding: "10px 0px",
            borderTop: "1px solid grey",
            marginTop: "10px",
          }}>
        <div>
          <input onChange={handleChange} type="checkbox" value="Men" />
          <label>Men</label>
        </div>
        <div>
          <input onChange={handleChange} type="checkbox" value="Women" />
          <label>Women</label>
        </div>
        <div>
          <input onChange={handleChange} type="checkbox" value="Kids" />
          <label>Kids</label>
        </div>
        {/* <div>
          <input onChange={handleSort} name="price" type="checkbox" value="1" />
          <label htmlFor="price">Low to High</label>
        </div>
        <div>
          <input onChange={handleSort} name="price" type="checkbox" value="-1" />
          <label htmlFor="price"> High to Low</label>
        </div> */}
        <br /><br /><br /><br /><br />
        <Box>
        <label>Sort By</label>
        <Select onChange={handleSort} name="price" id="">
          <option value="">select</option>
          <option value="1">low to high</option>
          <option value="-1">high to low</option>
        </Select>
        </Box>
      </div>
    </div>
  );
};

export default Filter;
