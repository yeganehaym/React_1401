export const LoginTemplate=(props)=>{

    return (<>

        <div className="wrapper default">
            <div className="container">
                <div className="row">

                    <div className="main-content col-12 col-md-7 col-lg-5 mx-auto">


                        {props.children}

                    </div>



                </div>
            </div>

            <footer className="mini-footer">
                <nav>
                    <div className="container">
                        <ul className="menu">
                            <li>
                                <a href="#">درباره آکادمی برنامه نویس</a>
                            </li>
                            <li>
                                <a href="#">فرصت‌های شغلی</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                            <li>
                                <a href="#">همکاری با سازمان‌ها</a>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div className="copyright-bar">
                    <div className="container">
                        <p>
                            استفاده از مطالب فروشگاه اینترنتی دیجی کالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع
                            است.
                            کلیه حقوق این سایت متعلق
                            به شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی کالا) می‌باشد.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </>)
}