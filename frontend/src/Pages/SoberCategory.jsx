import React, { useContext } from 'react'
import './CSS/SoberCategory.css'
import { HomeContext } from '../Context/HomeContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Items/Item'

export const SoberCategory = (props) => {
  const { all_product } = useContext(HomeContext);
  return (
    <div className='sober-category'>
      <img className='sobercategory-banner' src={props.banner} alt="" />
      <div className="sobercategory-indexSort">
        <p>
          <span>Sowing 1-12</span> out of 36 products
        </p>
        <div className="sobercategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="sobercategory-products">
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }else{
            return null;
          }
        })}
      </div>

      <div className="sobercategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
