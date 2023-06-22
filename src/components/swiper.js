import Mainbody from "./Landingpage";

export default function LandingPageSwiper() {

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel" data-bs-touch="true" 
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000" aria-current="true" data-bs-slide-to="0">
          <Mainbody
            header_title_one={"header_title_one"}
            header_title_two={"header_title_two"}
            header_title_three={"header_title_three"}
            header_title_four={"header_title_four"}
            header_description={"header_description"}
          />
        </div>
        <div className="carousel-item"  data-bs-interval="6000" data-bs-slide-to="1">
          <Mainbody
            header_title_one={"sm_header_title_one"}
            header_title_two={"sm_header_title_two"}
            header_title_three={"sm_header_title_three"}
            header_title_four={"sm_header_title_four"}
            header_description={"sm_header_description"}

          />
        </div>
        <div className="carousel-item" data-bs-interval="8000" data-bs-slide-to="2">
          <Mainbody
            header_title_one={"ds_header_title_one"}
            header_title_two={"ds_header_title_two"}
            header_title_three={"ds_header_title_three"}
            header_title_four={"ds_header_title_four"}
            header_description={"ds_header_description"}
          />
        </div>
      </div>
    </div>
  );
}
