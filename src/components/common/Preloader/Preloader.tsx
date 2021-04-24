import preloader_spinner from "../../../assets/images/preloader_spinner.svg";
import React from "react";
import s from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <>
      <div className={s.loading}>
        <div className={s.loading_text}>
          <span className={s.loading_text_words}>L</span>
          <span className={s.loading_text_words}>O</span>
          <span className={s.loading_text_words}>A</span>
          <span className={s.loading_text_words}>D</span>
          <span className={s.loading_text_words}>I</span>
          <span className={s.loading_text_words}>N</span>
          <span className={s.loading_text_words}>G</span>
          <span className={s.loading_text_words}>.</span>
          <span className={s.loading_text_words}>.</span>
          <span className={s.loading_text_words}>.</span>
        </div>
      </div>

      {/* --------- second --------------- */}
      {/* <div className={s.preloader__wrap}>
      <div className={s.preloader}>
        <div className={s.preloader__ring}>
          <div className={s.preloader__sector}>L</div>
          <div className={s.preloader__sector}>o</div>
          <div className={s.preloader__sector}>a</div>
          <div className={s.preloader__sector}>d</div>
          <div className={s.preloader__sector}>i</div>
          <div className={s.preloader__sector}>n</div>
          <div className={s.preloader__sector}>g</div>
          <div className={s.preloader__sector}>.</div>
          <div className={s.preloader__sector}>.</div>
          <div className={s.preloader__sector}>.</div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
        </div>
        <div className={s.preloader__ring}>
          <div className={s.preloader__sector}>L</div>
          <div className={s.preloader__sector}>o</div>
          <div className={s.preloader__sector}>a</div>
          <div className={s.preloader__sector}>d</div>
          <div className={s.preloader__sector}>i</div>
          <div className={s.preloader__sector}>n</div>
          <div className={s.preloader__sector}>g</div>
          <div className={s.preloader__sector}>.</div>
          <div className={s.preloader__sector}>.</div>
          <div className={s.preloader__sector}>.</div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
          <div className={s.preloader__sector}></div>
        </div>
      </div>
      </div> */}
    </>
  );
};
