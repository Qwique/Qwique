
import logo from '../assets/Logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import i18next from '../i18n';
import { Link } from 'react-router-dom';



const Footer = () => {

    const myRow = {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-evenly",
        // gap:"20px",
        alignItems: "center",
    };

    // const myColumn = {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     width: "80%"
    // }

    return (
        <div className="footer">
            <div className="footer-content" >
                <div >
                    <p style={{
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "30px",
                        margin: "40px 10px 30px 10px",
                        textAlign: "center",
                        color: "#5D5D5D",
                    }}>{i18next.t('contact_title')} <span>
                            <a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com </a></span> {i18next.t('contact_info')}
                    </p>
                </div>

                <div className='hr' style={{ borderTop: "2px solid #F4F4F4 ", margin: "2% 5%" }}></div>

                {/* <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000'
                }} /> */}


                <div className="base-footer">
                    <img src={logo} alt="" style={{verticalAlign: 'middle', marginBottom: '1rem'}} />

                        <p><Link to='/terms-and-condition'  className='termsLink' style={{color:'inherit', textDecoration:'none'}}>{i18next.t('terms_header_title')}</Link></p>
                        <p>{i18next.t('copy_right')}</p>
                        <p><Link to='/privacy-policy'  className='termsLink' style={{color:'inherit', textDecoration:'none'}}>{i18next.t('pols_header_title')}</Link></p>

                    <ul style={myRow}>
                        <li><a href="https://www.facebook.com/QwiqueHQ?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebookF size={25} /> </a></li>
                        <li><a href="https://twitter.com/Qwique_HQ?t=xwD-J4j1xhzbvvWBW3IzGQ&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter size={25} /></a> </li>
                        <li><a href="https://instagram.com/qwiquehq?igshid=OGQ2MjdiOTE=" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} /></a></li>
                        <li><a href="http://http://linkedin.com/company/qwiquenq" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={25} /></a></li>
                    </ul>

                </div>

            </div>
        </div>
    );
}

export default Footer;


