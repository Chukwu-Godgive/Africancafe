import '../About/About.css' //About css file
import Chiefcook from '../../images/Chiefcook.jpg';  //image
import Signature from '../../images/Signature.png';     //image



function About() {
    return(
        <div className='about-container'>
            <div className='about-contents'>

                <div className='about-pix'>
                    <img src={Chiefcook} alt='owner' />
                </div>

{/* Here controlls the heading and writeup of About Us Page */}
                <div className='about-writeup-container'>
                    <div className='about-heading'>
                        <p>About</p>
                        <h1>Paul Adaroje</h1>
                        <h3>Head Chef</h3>
                    </div>

                    <div className='about-writeup'>
                        <p>Welcome to African Cafe website. Here we try to share our vision about food quality, our mission about customer's satisfaction and introducing services that we provide for each one of you.</p>

                        <p>We offer fast food, served fresh with the highest quality of ingredients: fresh, handcut chicken, buns baked fresh in our own bakeries, local African dishes and the most delicious hot dogs with a varity of toppings.</p>

                        <img src={Signature} alt='Signature' width='100px' />
                    </div>

                </div>

            </div>
        </div>
    )
};
export default About;