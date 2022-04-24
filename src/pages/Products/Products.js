import Productsholder from '../../components/Productsholder/Productsholder';  //The reusable productholder
import '../Products/Products.css'      //Css file is merged in the app.css
import Food1 from '../../images/Food1.jpg'; //images of foodproducts
import Food2 from '../../images/Food2.png';
import Food3 from '../../images/Food3.png';

// images of Drinks items should be imported here


// images of Snacks items should be imported here

// <------------------------------------------------------------>

function Products() {
    return(
        <div className='products-container'>
            
            <h1 className='products-heading'>Our Products</h1>
            <h3 className='products-subheading'>Foods Items</h3>

{/* Here goes our Props and its reusablity, you can copy it and paste Drinks Items and Snacks Items.
Then start changeing the name, price & pictures imported for each product section. */}

                {/* From here to  */}
            <div className='products-all'> 
                <div className='products'>
                    <Productsholder
                        foodpicture={Food2}
                        foodname="Loal Recipes"
                        foodprice="₦1,500.00"
                    />
                </div>
                <div className='products'>
                    <Productsholder
                        foodpicture={Food1}
                        foodname="Egusi"
                        foodprice="₦2,000.00"
                    />
                </div>
                <div className='products'>
                    <Productsholder
                        foodpicture={Food3}
                        foodname="Amala"
                         foodprice="₦1,000.00"
                    />
                </div>
            </div>
                    {/* To here --- */}

                <h3 className='products-subheading'>Drinks Items</h3>
    {/* You can paste the reusable here that will take care of Drinks Section. */}


                <h3 className='products-subheading'>Snacks Items</h3>
    {/* You can paste the reusable here that will take care of Snacks Section. */}

        </div>
    )
};
export default Products;