import Navbar from "../components/Navbar.js"
import "../App.css"
import { useEffect } from "react"


import i18next from "../i18n";


function TermsCondition (){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return <div>
        <Navbar/>

        <div className="termsHeaderTitle">
            <h1>{i18next.t('terms_header_title')}</h1>
        </div>

            <div className="containers">
            <p className="termsDescription">{i18next.t('terms_Description')}<span><a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com</a></span><span>{i18next.t('terms_Des_link')}</span></p>

            <ol>
                <li className="listHeaders">1. {i18next.t('list_Headers_1')} 
                   <ol>
                   <li className="listTitle">1.1. {i18next.t('list_text_1')}</li>
                    <li>1.2. {i18next.t('list_text_2')}</li>
                    <li>1.3. {i18next.t('list_text_3')}</li>
                    <li>1.4. {i18next.t('list_text_4')}</li>
                    <li>1.5. {i18next.t('list_text_5')}</li>
                    </ol>    
                </li>
                <li className="listHeaders">2. {i18next.t('terms_Headers_2')}  
                    <ol> 
                    <li className="listTitle">2.1. {i18next.t('list_text_6')}</li>
                    <li>2.2. {i18next.t('list_text_7')}</li>
                    <li>2.3. {i18next.t('list_text_8')}</li>
                    <li>2.4. {i18next.t('list_text_9')}</li>
                    <li>2.5. {i18next.t('list_text_10')}</li>
                    <li>2.6. {i18next.t('list_text_11')}</li>
                    </ol>
                </li>
                <li className="listHeaders">3. {i18next.t('terms_Headers_3')}
                <ol>
                <li className="listTitle">3.1. {i18next.t('list_text_12')}</li>
                <li>3.2. {i18next.t('list_text_13')}</li>
                <li>3.3. {i18next.t('list_text_14')}</li>
                </ol>
                </li>
                <li className="listHeaders">4. {i18next.t('terms_Headers_4')}
                    <ol>
                    <li className="listTitle">4.1. {i18next.t('list_text_15')}</li>
                <li>4.2. {i18next.t('list_text_16')}</li>
                <li>4.3. {i18next.t('list_text_17')}</li>
                <li>4.4. {i18next.t('list_text_18')}</li>
                <li>4.5. {i18next.t('list_text_19')}</li>
                    </ol>
                </li>
                <li className="listHeaders">5. {i18next.t('terms_Headers_5')}
                    <ol>
                    <li className="listTitle">5.1. {i18next.t('list_text_20')}</li>
                    <li>5.1.1. {i18next.t('list_text_21')}</li>
                    <li>5.1.2. {i18next.t('list_text_22')}</li>
                    <li>5.1.3. {i18next.t('list_text_23')}</li>
                    <li>5.1.4. {i18next.t('list_text_24')}</li>
                    <li>5.1.5. {i18next.t('list_text_25')}</li>
                    <li>5.1.6. {i18next.t('list_text_26')}</li>
                    <li>5.2. {i18next.t('list_text_27')}</li>
                    </ol>
                </li>
                <li className="listHeaders">6. {i18next.t('terms_Headers_6')} 
                    <ol>
                     <li className="listTitle">6.1. {i18next.t('list_text_28')}</li>
                    <li>6.2. {i18next.t('list_text_29')}</li>
                    <li>6.3. {i18next.t('list_text_30')}</li>
                    </ol>
                </li>
                <li className="listHeaders">7. {i18next.t('terms_Headers_7')}
                    <ol>
                    <li className="listTitle">7.1. {i18next.t('list_text_31')}</li>
                    <li>7.2. {i18next.t('list_text_32')}</li> 
                    </ol>
                </li>
                <li className="listHeaders">8. {i18next.t('terms_Headers_8')}
                    <ol>
                    <li className="listTitle">8.1. {i18next.t('list_text_33')}</li>
                    <li>8.2. {i18next.t('list_text_34')}</li>
                    </ol>
                </li>
                <li className="listHeaders">9. {i18next.t('terms_Headers_9')} 
                <ol>
                <li className="listTitle">9.1. {i18next.t('list_text_35')}</li>
                </ol> 
                </li>
                <li className="listHeaders">10. {i18next.t('terms_Headers_10')}
                <ol>
                <li className="listTitle">10.1. {i18next.t('list_text_36')}</li>
                <li>10.2. {i18next.t('list_text_37')}</li>
                </ol>
                </li>

                <li className="listHeaders">11. {i18next.t('terms_Headers_11')}
                 <ol>
                <li className="listTitle">11.1. {i18next.t('list_text_38')}</li>
                <li>11.2. {i18next.t('list_text_39')}</li>
                 </ol>
                </li>
                <li className="listHeaders">12. {i18next.t('terms_Headers_12')}
                 <ol>
                <li className="listTitle">12.1. {i18next.t('list_text_40')}</li>
                <li>12.2. {i18next.t('list_text_41')}</li>
                <li>12.3. {i18next.t('list_text_42')}</li>
                <li>12.4. {i18next.t('list_text_43')}</li>
                <li>12.5. {i18next.t('list_text_44')}</li>
                 </ol>
                </li>

            </ol>

        </div>
    </div>
}










export default TermsCondition