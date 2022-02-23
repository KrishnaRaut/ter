import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
   <>
   <footer>
   <div className="content">
     <div className="left box">
       <div className="upper">
         <div className="topic">About us</div>
         <p>E-shop is a responsive dynamic ecommerce website where 
           you can find all kinds of products.
         </p>
       </div>
       <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <Link to="#"><i className="fas fa-phone-volume"></i>9818154569</Link>
         </div>
         <div className="email">
           <Link to="#"><i className="fas fa-envelope"></i>harish@gmail.com</Link>
         </div>
       </div>
     </div>
     <div className="middle box">
       <div className="topic">Customer Care</div>
       <div><Link to="#">Home Delivery</Link></div>
       <div><Link to="#">Help Center</Link></div>
       <div><Link to="#">Return & Refunds</Link></div>
       <div><Link to="#">How to buy</Link></div>
       <div><Link to="#">Contact Us</Link></div>
       <div><Link to="#">Terms & Conditions</Link></div>
     </div>
     <div className="right box">
       <div className="topic">Get Connected</div>
       <form action="#">
         <input type="text" placeholder="Enter email address" />
         <input type="submit" name="" value="Send" />
         <div className="media-icons">
           <Link to="#"><i className="fab fa-facebook-f"></i></Link>
           <Link to="#"><i className="fab fa-instagram"></i></Link>
           <Link to="#"><i className="fab fa-twitter"></i></Link>
           <Link to="#"><i className="fab fa-youtube"></i></Link>
           <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
           </div>
           </form>
         </div>
     </div>
   <div className="bottom">
     <p>Copyright © 2022 <Link to="#">E-Shop</Link> All rights reserved
     Developed by: Harish Saud.
     </p>
   </div>
 </footer>

   </>
  )
}

export default Footer
