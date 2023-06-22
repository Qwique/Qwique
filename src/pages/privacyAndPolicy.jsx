import Navbar from "../components/Navbar.js";
import "../App.css";
import { useEffect } from "react";
import i18next from "../i18n";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      <div className="termsHeaderTitle">
        <h1>{i18next.t("pols_header_title")}</h1>
      </div>

      <div className="containers">
        <p className="termsDescription">{i18next.t("pols_Description")} <span><a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com</a>.</span></p>

        <ol>
          <li className="listHeaders">
            {" "}
            1. {i18next.t("pols_Headers_1")}
            <ol>
              <li className="listTitle">
                {" "}
                1.1. {i18next.t("pols_text_1")}
                <ol>
                  <li>· {i18next.t("pols_text_2")}</li>
                  <li>· {i18next.t("pols_text_3")}</li>
                  <li>· {i18next.t("pols_text_4")}</li>
                  <li>· {i18next.t("pols_text_5")}</li>
                  <li>· {i18next.t("pols_text_6")}</li>
                  <li>· {i18next.t("pols_text_7")}</li>
                  <li>· {i18next.t("pols_text_8")}</li>
                  <li>· {i18next.t("pols_text_9")}</li>
                  <li>· {i18next.t("pols_text_10")}</li>
                  <li>· {i18next.t("pols_text_11")}</li>
                </ol>
              </li>
              <li>
                1.2. {i18next.t("pols_text_12")}
                <ol>
                  <li>· {i18next.t("pols_text_13")}</li>
                  <li>· {i18next.t("pols_text_14")}</li>
                </ol>
              </li>
            </ol>
          </li>
          <li className="listHeaders">
            2. {i18next.t("pols_Headers_2")}
            <ol>
              <li className="listTitle">{i18next.t("pols_text_15")}</li>
              <li>· {i18next.t("pols_text_16")}</li>
              <li>· {i18next.t("pols_text_17")}</li>
              <li>· {i18next.t("pols_text_18")}</li>
              <li>· {i18next.t("pols_text_19")}</li>
              <li>· {i18next.t("pols_text_20")}</li>
              <li>· {i18next.t("pols_text_21")}</li>
              <li>· {i18next.t("pols_text_22")}</li>
              <li>· {i18next.t("pols_text_23")}</li>
              <li>· {i18next.t("pols_text_24")}</li>
              <li>· {i18next.t("pols_text_25")}</li>
              <li>· {i18next.t("pols_text_26")}</li>
              <li>· {i18next.t("pols_text_27")}</li>
              <li>· {i18next.t("pols_text_28")}</li>
              <li>· {i18next.t("pols_text_29")}</li>
              <li>· {i18next.t("pols_text_30")}</li>
              <li>· {i18next.t("pols_text_31")}</li>
              <li>· {i18next.t("pols_text_32")}</li>
            </ol>
          </li>
          <li className="listHeaders">
            {" "}
            3. {i18next.t("pols_Headers_3")}
            <ol>
              <li className="listTitle">{i18next.t("pols_text_33")}</li>
            </ol>
          </li>
          <li className="listHeaders">
            {" "}
            4. {i18next.t("pols_Headers_4")}
            <ol>
              <li className="listTitle">{i18next.t("pols_text_34")}</li>
            </ol>
          </li>
          <li className="listHeaders">
            5. {i18next.t("pols_Headers_5")}
            <ol>
              <li className="listTitle">{i18next.t("pols_text_35")}</li>
            </ol>
          </li>
          <li className="listHeaders">
            6. {i18next.t("pols_Headers_6")}
            <ol>
              <li className="listTitle">{i18next.t("pols_text_36")}</li>
            </ol>
          </li>
          <li className="listHeaders">
            7. {i18next.t("pols_Headers_7")}
            <ol>
              <li className="listTitle">{i18next.t("pols_text_37")}</li>
            </ol>
          </li>
          <li className="listHeaders">
            8. {i18next.t("pols_Headers_8")}
            <ol>
              <li className="listTitle">
                {i18next.t("pols_text_38")}
              </li>
            </ol>
          </li>
          <li className="listHeaders">
            9. {i18next.t("pols_Headers_9")}
            <ol>
              <li className="listTitle">
                {i18next.t("pols_text_39")}
              </li>
            </ol>
          </li>
          <li className="listHeaders">
            10. {i18next.t("pols_Headers_10")}
            <ol>
              <li>
                {i18next.t("pols_text_40")}<span><a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com</a>.</span>
              </li>
            </ol>
          </li>

          <li className="listHeaders">
            11. {i18next.t("pols_Headers_11")}
            <ol>
              <li className="listTitle">
                {i18next.t("pols_text_41")} 
              </li>
            </ol>
          </li>
          <li className="listHeaders">
            12. {i18next.t("pols_Headers_12")}
            <ol>
              <li className="listTitle">
                {i18next.t("pols_text_42")}<span><a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com</a>.</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>

    );
}

export default PrivacyPolicy;
