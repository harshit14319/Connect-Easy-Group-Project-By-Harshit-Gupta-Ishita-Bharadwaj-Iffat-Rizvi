import React from 'react'
import "./Rules.css";
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';

const Rules = () => {
    return (
        <>
        <MetaData title="Rules" />
        <Header />
        <div className='rules' style={{
            padding:"50px 30px",
            display:"flex",
            width:"95%",
            overflow:"hidden"
        }}>
            <ul className='rules'>
                <span style={{
                    color:"#000",
                    fontSize:"1.3rem",
                    fontWeight:"800",
                    fontFamily:"Roboto",
                }}>Some Rules:</span>
                <li>1. You can easily Sell your Products</li>
                <li>2. Send me the details on whatsapp No.<strong>7985403660</strong></li>
                    <li>3. Details to be sent :</li>
                    <ul>
                        <li>Name of Seller</li>
                        <li>Year , Department</li>
                        <li>Hostel Name if opted</li>
                        <li>Product Name</li>
                        <li>Price you want to Sell your Product</li>
                        <li>Discription of the Product: Quality, Buying Date</li>
                    </ul>
                <li>4. We will upload your Product on ConnectEasy</li>
                <li>5. We will contact you if anyone want to Buy the products</li>
                <li>6. At last thanks for visit our website...Have a good day !</li>
            </ul>
        </div>
        <Footer />
        <BottomTab />
        </>
    )
}

export default Rules
