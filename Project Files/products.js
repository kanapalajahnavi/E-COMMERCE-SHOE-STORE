<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width-device-width, initial-scale=1.0">
        <title>All Products - Trend-line</title>
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
        <!--added a cdn link by searching font awesome4 cdn and getting this link from https://www.bootstrapcdn.com/fontawesome/ this url*/-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    </head>
    <body>
        <!--<div class ="header">-->
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <a href="index.html"><img src="images/logo.png" width="125px"></a>
                </div>
               <nav>
                    <ul id="MenuItems">
                        <li><a href="index.html">Home</a></li>
                         <li><a href="products.html">Products</a></li>
                         <li><a href="account.html">Account</a></li>

                    </ul>
                </nav>
                <a href="cart.html"><img src="images/cart.png" width="30px" height="30px"></a>
                <img src="images/menu.png" class="menu-icon" onClick="menutoggle()" >
            </div>
           
        </div>
    <!--</div>-->
    
        
        <!------------------------------ Products------------------------------>
        <div class="small-container">
            <div class="row row-2">
                <h2>All Products</h2>
                <select>
                    <option>Default sorting</option>
                    <option>Short by price</option>
                    <option>Short by popularity</option>
                    <option>Short by rating</option>
                    <option>Short by sale</option>
                </select>
            </div>
            
            
            <!--<h2 class="title" >Featured Products</h2>-->
            <div class="row">
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-11.png"></a>
                        <a href="products-details.html"><h4>Air Jordan 4</h4></a>
                        <div class="rating">
                            
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>Rs.23,500/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-2.png"></a>
                        <h4>Vans oldskool black Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>Rs.49,999/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-3.png"></a>
                        <h4>Nike mid sneakers black</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                        </div>
                        <p>Rs.22,250/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-10.png"></a>
                        <h4>Adidas pureboost go black Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                        </div>
                        <p>Rs.44,999/-</p>
                    </div>  
                </div>
            
            <!-------------- new row----------------->
            
            <div class="row">
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-5.png"></a>
                        <h4>Air Jordan 11</h4>
                        <div class="rating">
                            
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>Rs.49,999/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-15.png"></a>
                        <h4>Michael Jordan shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>Rs.25,000/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-16.png"></a>
                        <h4>Nike women sport shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                        </div>
                        <p>Rs.37,899/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-12.png"></a>
                        <h4>Adidas men trainer NMD Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                        </div>
                        <p>Rs.16,626/-</p>
                    </div>  
                </div>
            <!--new row for the latest product-->
                <div class="row">
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-13.png"></a>
                        <h4>Nike Jordan Rosa Claro shoes</h4>
                        <div class="rating">
                            
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>Rs.47,999/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-14.png"></a>
                        <h4>Adidas women NMD Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                        </div>
                        <p>Rs.10,999/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-7.png"></a>
                        <h4>Nike mid sneakers red</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                        </div>
                        <p>Rs.22,250/-</p>
                    </div>
                    <div class="col-4">
                        <a href="products-details.html"><img src="images/product-11.png"></a>
                        <h4>Air Jordan 4</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                        </div>
                        <p>Rs.64,999/-</p>
                    </div>  
                </div>
            
            <div class="page-btn">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>&#8594;</span>
            </div>
            
        </div>
        
        
        <!----------------------------------footer------------------------------------->
        <div class ="footer">
        <div class="container">
            
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div class="app-logo">
                        <img src="images/play-store.png" alt="">
                        <img src="images/app-store.png" alt="">
                    </div>
                </div>
                <div class="footer-col-2">
                    <img src="images/logo-white.png">
                    <p>We know exactly what your feet want.With us, your style & comfort are guaranteed.</p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                   <ul>
                       <li>Coupons</li>
                       <li>Blog Post</li>
                       <li>Return Policy</li>
                       <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow us</h3>
                   <ul>
                       <li>Facebook</li>
                       <li>Twitter</li>
                       <li>Instagram</li>
                       <li>Youtube</li>
                    </ul>
                </div>
                
            </div>
            
            <hr><!--horizontal line-->
            <p class="copyright">Copyright 2023 - Jahnavi,Bhargavi,Pavani,Prasanna,Latha</p>
            
        </div>
    </div>
        
        
        <!-----------------------------------js for toggle menu----------------------------------------------->
        <script>
            var menuItems=document.getElementById("MenuItems");
            
            MenuItems.style.maxHeight="0px";
            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px"){
                    MenuItems.style.maxHeight="200px";
                }
                else{
                    MenuItems.style.maxHeight="0px";
                }
            }
        </script>
    </body>
</html>
