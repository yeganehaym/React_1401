import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SiteTemplate=(props)=>{

    return(<>
<div className="index-page sidebar-collapse">
    <nav className="navbar direction-ltr fixed-top header-responsive">
        <div className="container">
            <div className="navbar-translate">
                <a className="navbar-brand" href="#pablo">
                    <img src="assets/img/logo.png" height="24px" alt="" />
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                </button>
                <div className="search-nav default">
                    <form action="">
                        <input type="text" placeholder="جستجو ..."/>
                            <button type="submit"><img src="assets/img/search.png" alt=""/></button>
                    </form>
                    <ul>
                        <li><a href=""><i className="now-ui-icons users_single-02"></i></a></li>
                        <li><a href=""><i className="now-ui-icons shopping_basket"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <div className="logo-nav-res default text-center">
                    <a href="">
                    <img src="assets/img/logo.png" height="36px" alt=""/>
                </a>
            </div>
            <ul className="navbar-nav default">
                <li className="sub-menu">
                    <a href="">کالای دیجیتال</a>
                    <ul>
                        <li className="sub-menu">
                            <a href="">لوازم جانبی گوشی</a>
                            <ul>
                                <li>
                                    <a href="">کیف و کاور گوشی</a>
                                </li>
                                <li>
                                    <a href="">پاور بانک</a>
                                </li>
                                <li>
                                    <a href="">هندزفری،هدفون</a>
                                </li>
                                <li>
                                    <a href="">پایه نگهدارنده گوشی</a>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="">گوشی موبایل</a>
                            <ul>
                                <li>
                                    <a href=""></a>
                                </li>
                                <li>
                                    <a href="">آیفون اپل</a>
                                </li>
                                <li>
                                    <a href="">هوآوی</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="">ساعت هوشمند</a>
                        </li>
                        <li>
                            <a href="">اسپیکر بلوتوث و با سیم</a>
                        </li>
                        <li className="sub-menu">
                            <a href="">موبایل</a>
                            <ul>
                                <li>
                                    <a href="">Apple</a>
                                </li>
                                <li>
                                    <a href="">Asus</a>
                                </li>
                                <li>
                                    <a href="">HTC</a>
                                </li>
                                <li>
                                    <a href="">LG</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="sub-menu">
                    <a href="">آرایشی،بهداشت</a>
                    <ul>
                        <li className="sub-menu">
                            <a href="">لوازم جانبی گوشی</a>
                            <ul>
                                <li>
                                    <a href="">کیف و کاور گوشی</a>
                                </li>
                                <li>
                                    <a href="">پاور بانک</a>
                                </li>
                                <li>
                                    <a href="">هندزفری،هدفون</a>
                                </li>
                                <li>
                                    <a href="">پایه نگهدارنده گوشی</a>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="">گوشی موبایل</a>
                            <ul>
                                <li>
                                    <a href=""></a>
                                </li>
                                <li>
                                    <a href="">آیفون اپل</a>
                                </li>
                                <li>
                                    <a href="">هوآوی</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="">ساعت هوشمند</a>
                        </li>
                        <li>
                            <a href="">اسپیکر بلوتوث و با سیم</a>
                        </li>
                        <li className="sub-menu">
                            <a href="">موبایل</a>
                            <ul>
                                <li>
                                    <a href="">Apple</a>
                                </li>
                                <li>
                                    <a href="">Asus</a>
                                </li>
                                <li>
                                    <a href="">HTC</a>
                                </li>
                                <li>
                                    <a href="">LG</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="sub-menu">
                    <a href="">خودرو،ابزار و اداری</a>
                    <ul>
                        <li className="sub-menu">
                            <a href="">لوازم جانبی گوشی</a>
                            <ul>
                                <li>
                                    <a href="">کیف و کاور گوشی</a>
                                </li>
                                <li>
                                    <a href="">پاور بانک</a>
                                </li>
                                <li>
                                    <a href="">هندزفری،هدفون</a>
                                </li>
                                <li>
                                    <a href="">پایه نگهدارنده گوشی</a>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="">گوشی موبایل</a>
                            <ul>
                                <li>
                                    <a href=""></a>
                                </li>
                                <li>
                                    <a href="">آیفون اپل</a>
                                </li>
                                <li>
                                    <a href="">هوآوی</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="">ساعت هوشمند</a>
                        </li>
                        <li>
                            <a href="">اسپیکر بلوتوث و با سیم</a>
                        </li>
                        <li className="sub-menu">
                            <a href="">موبایل</a>
                            <ul>
                                <li>
                                    <a href="">Apple</a>
                                </li>
                                <li>
                                    <a href="">Asus</a>
                                </li>
                                <li>
                                    <a href="">HTC</a>
                                </li>
                                <li>
                                    <a href="">LG</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">مد و پوشاک</a>
                </li>
                <li>
                    <a href="">خانه و آشپزخانه</a>
                </li>
                <li>
                    <a href="">کتاب،لوازم تحریر</a>
                </li>
                <li>
                    <a href="">ورزش و سفر</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>

    <div className="wrapper default">

        <header className="main-header default">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-5">
                        <div className="logo-area default">
                            <a href="">
                            <img src="assets/img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-8 col-7">
                    <div className="search-area default">
                        <form action="" className="search">
                            <input type="text" placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"/>
                                <button type="submit"><img src="assets/img/search.png" alt=""/></button>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="user-login dropdown">
                        <a href="" className="btn btn-neutral dropdown-toggle" data-toggle="dropdown"
                           id="navbarDropdownMenuLink1">
                            ورود / ثبت نام
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                            <div className="dropdown-item">
                                <a className="btn btn-info">ورود به دیجی کالا</a>
                            </div>
                            <div className="dropdown-item font-weight-bold">
                                <span>کاربر جدید هستید؟</span> <a className="register" href="">ثبت‌نام</a>
                            </div>
                        </ul>
                    </div>
                    <div className="cart dropdown">
                        <a href="" className="btn dropdown-toggle" data-toggle="dropdown" id="navbarDropdownMenuLink1">
                        <i className="now-ui-icons shopping_cart-simple"></i>
                            سبد خرید
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                        <div className="basket-header">
                            <div className="basket-total">
                                <span>مبلغ کل خرید:</span>
                                <span> ۲۳,۵۰۰</span>
                                <span> تومان</span>
                            </div>
                            <a href="" className="basket-link">
                            <span>مشاهده سبد خرید</span>
                            <div className="basket-arrow"></div>
                        </a>
                </div>
                <ul className="basket-list">
                    <li>
                        <a href="" className="basket-item">
                        <button className="basket-item-remove"></button>
                        <div className="basket-item-content">
                            <div className="basket-item-image">
                                <img alt="" src="assets/img/cart/2324935.jpg"/>
                            </div>
                            <div className="basket-item-details">
                                <div className="basket-item-title">هندزفری بلوتوث مدل S530
                                </div>
                                <div className="basket-item-params">
                                    <div className="basket-item-props">
                                        <span> ۱ عدد</span>
                                        <span>رنگ مشکی</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <a href="" className="basket-submit">ورود و ثبت سفارش</a>
        </ul>
    </div>
</div>
</div>
</div>
    <nav className="main-menu">
        <div className="container">
            <ul className="list float-right">
                <li className="list-item list-item-has-children mega-menu mega-menu-col-5">
                    <a className="nav-link" href="">کالای دیجیتال</a>
                    <ul className="sub-menu nav">
                        <li className="list-item list-item-has-children">
                            <i className="now-ui-icons arrows-1_minimal-left"></i><a className="main-list-item nav-link"
                                                                                 href="">لوازم
                                                                                 جانبی گوشی</a>
                <ul className="sub-menu nav">
                    <li className="list-item">
                        <a className="nav-link" href="">کیف و کاور گوشی</a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="">پاور بانک</a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="">هندزفری،هدفون</a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="">پایه نگهدارنده گوشی</a>
                    </li>
                    <li className="list-item list-item-has-children">
                        <i className="now-ui-icons arrows-1_minimal-left"></i><a
                        className="main-list-item nav-link" href="">گوشی موبایل</a>
                    <ul className="sub-menu nav">
                        <li className="list-item">
                            <a className="nav-link" href="">آیفون اپل</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="">هوآوی</a>
                        </li>
                    </ul>
                    </li>
                    <li className="list-item">
                        <i className="now-ui-icons arrows-1_minimal-left"></i><a
                        className="main-list-item nav-link" href="">ساعت هوشمند</a>
                    </li>
                    <li className="list-item">
                        <i className="now-ui-icons arrows-1_minimal-left"></i><a
                        className="main-list-item nav-link" href="">اسپیکر بلوتوث و با سیم</a>
                    </li>
                </ul>
            </li>
            <li className="list-item list-item-has-children">
                <i className="now-ui-icons arrows-1_minimal-left"></i><a className="main-list-item nav-link"
                                                                     href="">موبایل</a>
            <ul className="sub-menu nav">
                <li className="list-item">
                    <a className="nav-link" href="">Apple</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">ASUS</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">HTC</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">LG</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">Nokia</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">Samsung</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">Sony</a>
                </li>
            </ul>
            </li>
            <li className="list-item list-item-has-children">
                <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link" href="">تبلت
                                                                     و کتابخوان</a>
            <ul className="sub-menu nav">
                <li className="list-item">
                    <a className="nav-link" href="">Acer</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">Amazon</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">Apple</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">ASUS</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">HTC</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">Samsung</a>
                </li>
            </ul>
        </li>
        <li className="list-item list-item-has-children">
            <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link"
                                                                 href="">دوربین</a>
        <ul className="sub-menu nav">
            <li className="list-item">
                <a className="nav-link" href="">Canon</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">Casio</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">Nikon</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">Sony</a>
            </li>
        </ul>
        </li>
        <li className="list-item list-item-has-children">
            <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link"
                                                                 href="">کامپیوتر و تجهیزات
                                                                 جانبی</a>
        <ul className="sub-menu nav">
            <li className="list-item">
                <a className="nav-link" href="">هارد دیسک</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">نمایشگر</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">مادر بورد</a></li>
                <li className="list-item">
                    <a className="nav-link" href="">پردازنده</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">کارت گرافیک</a>
                </li>
        </ul>
    </li>
    <img src="assets/img/1636.png" alt=""/>
    </ul>
</li>
    <li className="list-item list-item-has-children mega-menu mega-menu-col-5">
        <a className="nav-link" href="">آرایشی،بهداشت و سلامت</a>
        <ul className="sub-menu nav">
            <li className="list-item list-item-has-children">
                <i className="now-ui-icons arrows-1_minimal-left"></i><a className="main-list-item nav-link"
                                                                     href="">لوازم
                                                                     جانبی گوشی</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">کیف و کاور گوشی</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">پاور بانک</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">هندزفری،هدفون</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">پایه نگهدارنده گوشی</a>
        </li>
        <li className="list-item list-item-has-children">
            <i className="now-ui-icons arrows-1_minimal-left"></i><a
            className="main-list-item nav-link" href="">گوشی
            موبایل</a>
        <ul className="sub-menu nav">
            <li className="list-item">
                <a className="nav-link" href="">آیفون اپل</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">هوآوی</a>
            </li>
        </ul>
    </li>
    <li className="list-item">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a
        className="main-list-item nav-link" href="">ساعت
        هوشمند</a>
</li>
    <li className="list-item">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a
        className="main-list-item nav-link" href="">اسپیکر
        بلوتوث و با سیم</a>
</li>
</ul>
</li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="main-list-item nav-link"
                                                             href="">موبایل</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">Apple</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">ASUS</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">HTC</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">LG</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Nokia</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Samsung</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Sony</a>
        </li>
    </ul>
    </li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link" href="">تبلت
                                                             و کتابخوان</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">Acer</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Amazon</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Apple</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">ASUS</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">HTC</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Samsung</a>
        </li>
    </ul>
</li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link"
                                                             href="">دوربین</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">Canon</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Casio</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Nikon</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Sony</a>
        </li>
    </ul>
    </li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link"
                                                             href="">کامپیوتر و تجهیزات
                                                             جانبی</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">هارد دیسک</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">نمایشگر</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">مادر بورد</a></li>
            <li className="list-item">
                <a className="nav-link" href="">پردازنده</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">کارت گرافیک</a>
            </li>
    </ul>
</li>
    <img src="assets/img/1636.png" alt=""/>
    </ul>
</li>
    <li className="list-item list-item-has-children mega-menu mega-menu-col-5">
        <a className="nav-link" href="">خودرو،ابزار و اداری</a>
        <ul className="sub-menu nav">
            <li className="list-item list-item-has-children">
                <i className="now-ui-icons arrows-1_minimal-left"></i><a className="main-list-item nav-link"
                                                                     href="">لوازم
                                                                     جانبی گوشی</a>
            <ul className="sub-menu nav">
                <li className="list-item">
                    <a className="nav-link" href="">کیف و کاور گوشی</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">پاور بانک</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">هندزفری،هدفون</a>
                </li>
                <li className="list-item">
                    <a className="nav-link" href="">پایه نگهدارنده گوشی</a>
                </li>
                <li className="list-item list-item-has-children">
                    <i className="now-ui-icons arrows-1_minimal-left"></i><a
                    className="main-list-item nav-link" href="">گوشی
                    موبایل</a>
                <ul className="sub-menu nav">
                    <li className="list-item">
                        <a className="nav-link" href="">آیفون اپل</a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="">هوآوی</a>
                    </li>
                </ul>
    </li>
    <li className="list-item">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a
        className="main-list-item nav-link" href="">ساعت
        هوشمند</a>
</li>
    <li className="list-item">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a
        className="main-list-item nav-link" href="">اسپیکر
        بلوتوث و با سیم</a>
</li>
</ul>
</li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="main-list-item nav-link"
                                                             href="">موبایل</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">Apple</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">ASUS</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">HTC</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">LG</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Nokia</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Samsung</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Sony</a>
        </li>
    </ul>
    </li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link" href="">تبلت
                                                             و کتابخوان</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">Acer</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Amazon</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Apple</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">ASUS</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">HTC</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Samsung</a>
        </li>
    </ul>
</li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link"
                                                             href="">دوربین</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">Canon</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Casio</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Nikon</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">Sony</a>
        </li>
    </ul>
    </li>
    <li className="list-item list-item-has-children">
        <i className="now-ui-icons arrows-1_minimal-left"></i><a className="nav-link"
                                                             href="">کامپیوتر و تجهیزات
                                                             جانبی</a>
    <ul className="sub-menu nav">
        <li className="list-item">
            <a className="nav-link" href="">هارد دیسک</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">نمایشگر</a>
        </li>
        <li className="list-item">
            <a className="nav-link" href="">مادر بورد</a></li>
            <li className="list-item">
                <a className="nav-link" href="">پردازنده</a>
            </li>
            <li className="list-item">
                <a className="nav-link" href="">کارت گرافیک</a>
            </li>
    </ul>
</li>
    <img src="assets/img/1636.png" alt=""/>
    </ul>
</li>
    <li className="list-item">
        <a className="nav-link" href="">مد و پوشاک</a>
    </li>
    <li className="list-item">
        <a className="nav-link" href="">خانه و آشپزخانه</a>
    </li>
    <li className="list-item">
        <a className="nav-link" href="">کتاب،لوازم تحریر</a>
    </li>
    <li className="list-item">
        <a className="nav-link" href="">ورزش و سفر</a>
    </li>
    <li className="list-item">
        <a className="nav-link" href="">وسایل نقلیه و صنعتی</a>
    </li>
    <li className="list-item amazing-item">
        <a className="nav-link" href="" target="_blank">شگفت‌انگیزها</a>
    </li>
</ul>
</div>
</nav>
</header>


    <main className="main default">
        {props.children}
    </main>


    <footer className="main-footer default">
        <div className="back-to-top">
            <a href=""><span className="icon"><i className="now-ui-icons arrows-1_minimal-up"></i></span> <span>بازگشت به
               بالا</span></a>
</div>
    <div className="container">
        <div className="footer-services">
            <div className="row">
                <div className="service-item col">
                    <a href="" target="_blank">
                    <img src="assets/img/svg/delivery.svg"/>
                </a>
                <p>تحویل اکسپرس</p>
            </div>
            <div className="service-item col">
                <a href="" target="_blank">
                <img src="assets/img/svg/contact-us.svg"/>
            </a>
            <p>پشتیبانی 24 ساعته</p>
        </div>
        <div className="service-item col">
            <a href="" target="_blank">
            <img src="assets/img/svg/payment-terms.svg"/>
        </a>
        <p>پرداخت درمحل</p>
    </div>
    <div className="service-item col">
        <a href="" target="_blank">
        <img src="assets/img/svg/return-policy.svg"/>
    </a>
    <p>۷ روز ضمانت بازگشت</p>
</div>
    <div className="service-item col">
        <a href="" target="_blank">
        <img src="assets/img/svg/origin-guarantee.svg"/>
    </a>
    <p>ضمانت اصل بودن کالا</p>
</div>
</div>
</div>
    <div className="footer-widgets">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
                <div className="widget-menu widget card">
                    <header className="card-header">
                        <h3 className="card-title">راهنمای خرید از دیجی کالا</h3>
                    </header>
                    <ul className="footer-menu">
                        <li>
                            <a href="">نحوه ثبت سفارش</a>
                        </li>
                        <li>
                            <a href="">رویه ارسال سفارش</a>
                        </li>
                        <li>
                            <a href="">شیوه‌های پرداخت</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="widget-menu widget card">
                    <header className="card-header">
                        <h3 className="card-title">خدمات مشتریان</h3>
                    </header>
                    <ul className="footer-menu">
                        <li>
                            <a href="">پاسخ به پرسش‌های متداول</a>
                        </li>
                        <li>
                            <a href="">رویه‌های بازگرداندن کالا</a>
                        </li>
                        <li>
                            <a href="">شرایط استفاده</a>
                        </li>
                        <li>
                            <a href="">حریم خصوصی</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="widget-menu widget card">
                    <header className="card-header">
                        <h3 className="card-title">با دیجی کالا</h3>
                    </header>
                    <ul className="footer-menu">
                        <li>
                            <a href="">فروش در دیجی کالا</a>
                        </li>
                        <li>
                            <a href="">همکاری با سازمان‌ها</a>
                        </li>
                        <li>
                            <a href="">فرصت‌های شغلی</a>
                        </li>
                        <li>
                            <a href="">تماس با دیجی کالا</a>
                        </li>
                        <li>
                            <a href="">درباره دیجی کالا</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="newsletter">
                    <p>از تخفیف‌ها و جدیدترین‌های فروشگاه باخبر شوید:</p>
                    <form action="">
                        <input type="email" className="form-control"
                               placeholder="آدرس ایمیل خود را وارد کنید..."/>
                            <input type="submit" className="btn btn-primary" value="ارسال"/>
                    </form>
                </div>
                <div className="socials">
                    <p>ما را در شبکه های اجتماعی دنبال کنید.</p>
                    <div className="footer-social">
                        <a href="" target="_blank"><i className="fa fa-instagram"></i>اینستاگرام دیجی کالا</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="info">
        <div className="row">
            <div className="col-12 col-lg-4">
                <span>هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
            </div>
            <div className="col-12 col-lg-2">شماره تماس: 021-123456789</div>
            <div className="col-12 col-lg-2">آدرس ایمیل:<a href="">info@digikala.com</a></div>
            <div className="col-12 col-lg-4 text-center">
                <a href="" target="_blank"><img src="assets/img/bazzar.png" width="159" height="48"
                   alt=""/></a>
                <a href="" target="_blank"><img src="assets/img/sibapp.png" width="159" height="48"
                   alt=""/></a>
            </div>
            </div>
        </div>
    </div>
    <div className="description">
        <div className="container">
            <div className="row">
                <div className="site-description col-12 col-lg-7">
                    <h1 className="site-title">فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین</h1>
                    <p>
                        دیجی کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با
                        پایبندی به سه اصل کلیدی، پرداخت در
                        محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده تا همگام با فروشگاه‌های
                        معتبر جهان، به بزرگ‌ترین فروشگاه
                        اینترنتی ایران تبدیل شود. به محض ورود به دیجی کالا با یک سایت پر از کالا رو به رو
                        می‌شوید! هر آنچه که نیاز دارید و به
                        ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
                    </p>
                </div>
                <div className="symbol col-12 col-lg-5">
                    <a href="" target="_blank"><img src="assets/img/symbol-01.png" alt=""/></a>
                    <a href="" target="_blank"><img src="assets/img/symbol-02.png" alt=""/></a>
                </div>
                <div className="col-12">
                    <div className="row">
                        <ul className="footer-partners default">
                            <li className="col-md-3 col-sm-6">
                                <a href=""><img src="assets/img/footer/1.svg" alt=""/></a>
                            </li>
                            <li className="col-md-3 col-sm-6">
                                <a href=""><img src="assets/img/footer/2.svg" alt=""/></a>
                            </li>
                            <li className="col-md-3 col-sm-6">
                                <a href=""><img src="assets/img/footer/3.svg" alt=""/></a>
                            </li>
                            <li className="col-md-3 col-sm-6">
                                <a href=""><img src="assets/img/footer/4.svg" alt=""/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright">
        <div className="container">
            <p>
                استفاده از مطالب فروشگاه اینترنتی دیجی کالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.
                کلیه حقوق این سایت متعلق
                به شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی کالا) می‌باشد.
            </p>
        </div>
    </div>
</footer>
</div>
</div>
        <ToastContainer />
    </>)
}