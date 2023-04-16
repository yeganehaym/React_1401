import {LoginTemplate} from "./Templates/LoginTemplate";
import {Link} from "react-router-dom";

export const Login=()=>{

    return (<>


           <div className="account-box">
               <a href="#" className="logo">
                   <img src="assets/img/logo.png" alt="" />
               </a>
               <div className="account-box-title text-right">ورود به دیجی کالا</div>
               <div className="account-box-content">
                   <form className="form-account">
                       <div className="form-account-title">ایمیل یا شماره موبایل</div>
                       <div className="form-account-row">
                           <label className="input-label"><i className="now-ui-icons users_single-02"></i></label>
                           <input className="input-field" type="text"
                                  placeholder="ایمیل یا شماره موبایل خود را وارد نمایید"/>
                       </div>
                       <div className="form-account-title">رمز عبور
                           <a href="" className="btn-link-border form-account-link">رمز
                               عبور خود را فراموش
                               کرده ام</a>
                       </div>
                       <div className="form-account-row">
                           <label className="input-label"><i
                               className="now-ui-icons ui-1_lock-circle-open"></i></label>
                           <input className="input-field" type="password"
                                  placeholder="رمز عبور خود را وارد نمایید" />
                       </div>
                       <div className="form-account-row form-account-submit">
                           <div className="parent-btn">
                               <button className="dk-btn dk-btn-info">
                                   ورود به دیجی کالا
                                   <i className="fa fa-sign-in"></i>
                               </button>
                           </div>
                       </div>
                       <div className="form-account-agree">
                           <label className="checkbox-form checkbox-primary">
                               <input type="checkbox" checked="checked" id="agree" />
                               <span className="checkbox-check"></span>
                           </label>
                           <label htmlFor="agree">مرا به خاطر داشته باش</label>
                       </div>
                   </form>
               </div>
               <div className="account-box-footer">
                   <span>کاربر جدید هستید؟</span>
                   <Link  to="/signup" className="btn-link-border">ثبت‌نام در
                       دیجی کالا</Link>
               </div>
           </div>



    </>)
}