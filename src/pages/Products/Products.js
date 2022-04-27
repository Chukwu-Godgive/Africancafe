import Productsholder from '../../components/Productsholder/Productsholder';  //The reusable productholder
import '../Products/Products.css'      //Css file is merged in the app.css
import Food1 from '../../images/Food1.jpg'; //images of foodproducts
import Food2 from '../../images/Food2.png';
import Food3 from '../../images/Food3.png';
import Drinks1 from '../../images/Drinks1.jpg';
import Drinks2 from '../../images/Drinks2.jpg';
import Drinks3 from '../../images/Drinks3.jpg';
import Snacks1 from '../../images/Snacks1.jpg';
import Snacks2 from '../../images/Snacks2.jpg';
import Snacks3 from '../../images/Snacks3.jpg';


// <------------------------------------------------------------>

function Products() {
    return(
        <div className='products-container'>
            
            <h1 className='products-heading'>Our Products</h1>
            <h3 className='products-subheading'>Foods Items</h3>

{/* Here goes our Props and its reusablity, you can copy it and paste Drinks Items and Snacks Items.
Then start changeing the name, price & pictures imported for each product section. */}

                {/* From here to  */}
                {/* Products 1 Section */}

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

                    {/* Products 2 Section */}
                <h3 className='products-subheading'>Drinks Items</h3>
                <div className='products-all'> 
                <div className='products'>
                    <Productsholder
                        foodpicture={Drinks1}
                        foodname="Metador"
                        foodprice="₦3,500.00"
                    />
                </div>
                <div className='products'>
                    <Productsholder
                        foodpicture={Drinks2}
                        foodname="Cocktail Metador"
                        foodprice="₦6,000.00"
                    />
                </div>
                <div className='products'>
                    <Productsholder
                        foodpicture={Drinks3}
                        foodname="Volkal Liqur"
                         foodprice="₦10,000.00"
                    />
                </div>
            </div>

                {/* Products 3 Section */}
                <h3 className='products-subheading'>Snacks Items</h3>
                <div className='products-all'> 
                <div className='products'>
                    <Productsholder
                        foodpicture={Snacks1}
                        foodname="Pastrami Burger"
                        foodprice="₦3,500.00"
                    />
                </div>
                <div className='products'>
                    <Productsholder
                        foodpicture={Snacks2}
                        foodname="Roasted Beef"
                        foodprice="₦5,000.00"
                    />
                </div>
                <div className='products'>
                    <Productsholder
                        foodpicture={Snacks3}
                        foodname="Fresh Burger"
                         foodprice="₦1,000.00"
                    />
                </div>
            </div>

        </div>
    )
};
export default Products;