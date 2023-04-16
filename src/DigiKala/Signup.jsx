import {LoginTemplate} from "./Templates/LoginTemplate";

export const Signup=()=>{
    return (<>

           <div className="account-box">
               <a href="#" className="logo">
                   <img src="assets/img/logo.png" alt="" />
               </a>
               <div className="account-box-title">ثبت‌نام در دیجی کالا</div>
               <div className="message-light">اگر قبلا با ایمیل ثبت‌نام کرده‌اید، نیاز به
                   ثبت‌نام مجدد با شماره
                   همراه ندارید
               </div>
               <div className="account-box-content">
                   <form className="form-account">
                       <div className="form-account-title">پست الکترونیک یا شماره موبایل</div>
                       <div className="form-account-row">
                           <label className="input-label"><i className="now-ui-icons users_single-02"></i></label>
                           <input className="input-field" type="text"
                                  placeholder="پست الکترونیک یا شماره موبایل خود را وارد نمایید" />
                       </div>
                       <div className="form-account-title">کلمه عبور</div>
                       <div className="form-account-row">
                           <label className="input-label"><i
                               className="now-ui-icons ui-1_lock-circle-open"></i></label>
                           <input className="input-field" type="password"
                                  placeholder="کلمه عبور خود را وارد نمایید"/>
                       </div>
                       <div className="form-account-agree">
                           <label className="checkbox-form checkbox-primary">
                               <input type="checkbox" checked="checked" />
                               <span className="checkbox-check"></span>
                           </label>
                           <label htmlFor="agree">
                               <a href="#" className="btn-link-border">حریم خصوصی</a> و <a href="#"
                                                                                           className="btn-link-border">شرایط
                               و قوانین</a> استفاده از سرویس های سایت
                               دیجی کالا را مطالعه نموده و با کلیه موارد آن موافقم.</label>
                       </div>
                       <div className="form-account-row form-account-submit">
                           <div className="parent-btn">
                               <button className="dk-btn dk-btn-info">
                                   ثبت نام در دیجی کالا
                                   <i className="now-ui-icons users_circle-08"></i>
                               </button>
                           </div>
                       </div>
                   </form>
               </div>
               <div className="account-box-footer">
                   <span>قبلا در دیجی کالا ثبت‌نام کرده‌اید؟</span>
                   <a href="#" className="btn-link-border">وارد شوید</a>
               </div>
           </div>

    </>)
}