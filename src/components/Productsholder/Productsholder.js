import '../Productsholder/Productsholder.css';

function Productsholder(props) {
    return(
        <div className='product-holder'>
            <div className='product-innerholder'>
                <div className='product-image'>
                    <img src={props.foodpicture} alt="" />
                    
                </div>
                <div>
                    <p className="product-name">{props.foodname}</p>
                    <p className="product-description">AfricanCafe looks for unique ingredients to cook our local foods</p>
                    <p className="product-price">{props.foodprice}</p>
                    <button className='product-button'>BUY</button>
                </div>
            </div>
        </div>
    )
};
export default Productsholder;