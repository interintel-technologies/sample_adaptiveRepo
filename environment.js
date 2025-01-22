/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


/**
 * Theme components loaded.
 * Valid options for this are the name of the folders inside src/themes
 * @type {string}
 */
window.THEME =
// 'looper';
 //  'bulkit';
// 'dsv1.0';
'dsv3.0';


/**
 * Page Template Loaded
 * Valid Options for this are
 * - service
 * - landing
 * - payments
 * - canvas
 * - section
 * @type {string}
 */
window.TEMPLATE = 'landing';
window.NEWSECTIONSIZE = false


/**
 * Set Debug Mode, this does the following
 * - set's log level to debug
 * -
 * @type {boolean}
 */
window.debug = true;

window.REGISTER_SW = false;

/**
 * Backend Url to call for initial configurations
 * This is normally used in combination with `Quick Mock Server` or `Live Environment` Setups
 * @type {string}
 */

// let URL = 'https://adaptiveui.danleyb2.online/';
// const URL = 'http://localhost:3000/6/';
// URL = 'https://bidfather.com/index/';
// URL = 'https://dooka.shop/home/';
// URL = 'https://dooka.shop/index/';


/**
 * Set to true to disable networking, removes mock server requirement
 * this is the quickest development environment setup
 * @type {boolean}
 */
window.NO_NETWORKING = true;

/**
 * Initial Interface payload, this is used in combination with NO_NETWORKING
 * Check here to understand the structure
 * docs/payload/Payload.md
 * @type Object
 */
const SERVICE_PAYLOAD = {
    "response": {
        "get_gateway_details": {
            "google_tag_code": "G-DYEGZNXKYW",
            "google_analytics_code": "UA-145149638-3",
            "google_recaptcha_secret_key": "6LfWhEAnAAAAAJjnbV0X514mUmd7zWPncbDYrwZQ",
            "logo": "administration_gateway_logo/mipay.png",
            "icon_image": "administration_gateway_icon_image/Mipay_1.png",
            "name": "MIPAY",
            "tagline": "MIPAY",
            "background_image": "linear-gradient(to bottom, RGBA(255,184,19,1) 10%, RGBA(2,50,98,1) 90%)",
            "host": "www.gomipay.com",
            "default_color": "#023262",
            "primary_color": "RGBA(255,184,19,1)",
            "secondary_color": "RGBA(255,184,19,1)",
            "accent_color": "RGBA(2,50,98,1)",
            "theme": "dsv3.0",
            "design": "dsv3.0",
            "font_family": ""
        },
        "get_interface": {
            "this_page_inputs": {
                "0": {
                    "3": {
                        "page_var": [
                            "About",
                            ""
                        ],
                        "About": {
                            "0": {
                                "About": {
                                    "0": [
                                        "About",
                                        "NAVBAR 2",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "Mipay Privacy Policy"
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "About",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Hero Section": {
                                    "0": [
                                        "Making all your payment experiences hustle free",
                                        "HERO ELEMENT",
                                        "0",
                                        "0",
                                        "Making all your payment experiences hustle free",
                                        "Our platform enables you to manage all your payment needs, shop, pay bills and transfer money all in one place.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "link": {
                                                "path": "https://mipay.cash/#/2/0",
                                                "label": "Get Started"
                                            },
                                            "backgroundImage": "https://mipay.cash/static/prod/src/themes/dsv1.0/img/isometic/customer.jpg"
                                        }
                                    ],
                                    "input_var": [
                                        "Hero Section",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Hero Section",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "4": {
                        "page_var": [
                            "Services",
                            ""
                        ],
                        "Services": {
                            "1": {
                                "Hero Section": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "Spacer",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Payments Made Easier",
                                        "SECTION TITLE",
                                        "0",
                                        "0",
                                        "Payments Made Easier",
                                        "With Mipay Your Payments Are Hustle Free!",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Service Description",
                                        "TILE ELEMENT",
                                        "0",
                                        "0",
                                        "Service Section",
                                        "mipay_services",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "OverView",
                                        "HERO ELEMENT",
                                        "0",
                                        "0",
                                        "For all your payment processing needs, The future is now",
                                        "Empowering customers to manage and control payments  We aspire to make your payment experience easy and safe, our platform is an innovative, user friendly mobile and web application accessible anywhere, anytime with the click of a button.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "link": {
                                                "path": "https://mipay.cash/#/2/0",
                                                "label": "Go to"
                                            },
                                            "backgroundImage": "media/dsc_imagelist_image/hero-2-svg.png",
                                            "_backgroundImage": "src/themes/dsv1.0/img/isometic/hero-2.svg"
                                        }
                                    ],
                                    "4": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "SPACER 2",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "Mipay Quick Actions Set up",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "Mipay Quick Action Set Up",
                                        "The quick action settings enable you to set up your preferences when it comes to your normal day to day transactions",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "6": [
                                        "Quick actions",
                                        "TILE ELEMENT 3",
                                        "1",
                                        "100",
                                        "",
                                        "quick_action_landing",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Hero Section",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Service",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "5": {
                        "page_var": [
                            "Solutions",
                            ""
                        ],
                        "Solutions": {
                            "0": {
                                "Solutions": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "Spacer",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Solutions",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "Solutions",
                                        "For all your payment processing needs, The future is now",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Description Box",
                                        "DESCRIPTION BOX",
                                        "1",
                                        "100",
                                        "Description Box",
                                        "mipay_description",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Find Us On Google Play Store",
                                        "INFO CTA",
                                        "1",
                                        "100",
                                        "We Are Also On Google Play Store",
                                        "Download our app on Google  Play Store",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": " https://play.google.com/store/apps/details?id=ke.co.interintel.mipay&hl=en",
                                            "bg_image": "src/themes/dsv1.0/img/isometic/phone.jpg",
                                            "screen_shot": "src/themes/dsv1.0/img/isometic/mipayscreenshot.png",
                                            "button_title": "Download Now"
                                        }
                                    ],
                                    "6": [
                                        "Mipay  Blog",
                                        "HERO ELEMENT 7",
                                        "1",
                                        "100",
                                        "Mipay Blog",
                                        "Our blog posts contains useful tips and information around the services we are offering have a read.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://mipay.medium.com/",
                                            "subtitle": "Have a look at our blog posts",
                                            "button_title": "Read More",
                                            "hero_image_src": "https://images.unsplash.com/photo-1592890288687-961242c04db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                                        }
                                    ],
                                    "input_var": [
                                        "Solutions",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Solutions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "6": {
                        "page_var": [
                            "Contact Us",
                            ""
                        ],
                        "Contact Us": {
                            "0": {
                                "Footer": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Mipay",
                                        "FOOTER ELEMENT 2",
                                        "1",
                                        "100",
                                        "InterIntel",
                                        "Footer content",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook",
                                                        "instagram",
                                                        "twitter"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://mipay.cash/media/administration_gateway_logo/mipay.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Footer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Customer",
                        "icons:lock"
                    ]
                },
                "1": {
                    "1": {
                        "page_var": [
                            "About",
                            ""
                        ],
                        "About": {
                            "0": {
                                "Navigation": {
                                    "0": [
                                        "NavBar",
                                        "NAVBAR 2",
                                        "1",
                                        "100",
                                        "Navbar 2",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "Mipay Privacy Policy"
                                            ]
                                        }
                                    ],
                                    "1": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "0",
                                        "0",
                                        "spacer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Navigation",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Navigation",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "About": {
                                    "2": [
                                        "Allowing businesses to accept  payments, online and offline.",
                                        "HERO BANNER",
                                        "1",
                                        "100",
                                        "Hero",
                                        "Processing all your payments hustle free. Ensuring security you receive, disburse and withdraw payments.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": "https://mipay.cash/#/2/0",
                                            "bg_image": "src/themes/dsv1.0/img/isometic/business-photo.jpg",
                                            "button_title": "Try It Now",
                                            "hero_image_src": "src/themes/dsv1.0/img/isometic/hero-2.svg"
                                        }
                                    ],
                                    "input_var": [
                                        "About",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "Services",
                            ""
                        ],
                        "Services": {
                            "0": {
                                "Spacer": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "spacer",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "100px",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Your Trusted Payment Processor",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Service Description",
                                        "TILE ELEMENT",
                                        "1",
                                        "100",
                                        "Mipay",
                                        "mipay-merchant",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Our Dashboard",
                                        "HERO ELEMENT 4",
                                        "1",
                                        "100",
                                        "OverView",
                                        "Our payment processing service and solution is able to cater to a multitude of clients ranging from small family-owned businesses to large corporations and established conglomerates. We help you collect payments in a completely secure and expedient manner, making it easy to maintain high customer ratings for your businesses. Our high capacity payment platform is designed to process transactions in high volumes – making hundreds of thousands of payments on a daily basis.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": "https://mipay.cash/#/2/0",
                                            "button_title": "Get Started",
                                            "hero_image_src": "src/themes/dsv1.0/img/isometic/mipay_dashboard.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Spacer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Service section",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "3": {
                        "page_var": [
                            "Solution",
                            ""
                        ],
                        "Solution": {
                            "0": {
                                "Solutions": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Manage All Your Payment needs ",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "Solution",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Description Box",
                                        "DESCRIPTION BOX",
                                        "1",
                                        "100",
                                        "description",
                                        "merchant-description",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Solutions",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Solutions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "4": {
                        "page_var": [
                            "Contact Us",
                            ""
                        ],
                        "Contact Us": {
                            "0": {
                                "Footer": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Download Our App on Google Play Store",
                                        "INFO CTA",
                                        "1",
                                        "100",
                                        "Find Us on Google",
                                        "Download our app on Google  Play Store",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": " https://play.google.com/store/apps/details?id=ke.co.interintel.mipay&hl=en",
                                            "bg_image": "src/themes/dsv1.0/img/isometic/phone.jpg",
                                            "screen_shot": "src/themes/dsv1.0/img/isometic/mipayscreenshot.png",
                                            "button_title": "Download Now"
                                        }
                                    ],
                                    "2": [
                                        "Mipay",
                                        "FOOTER ELEMENT 2",
                                        "1",
                                        "100",
                                        "Footer",
                                        "footer content",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook",
                                                        "instagram",
                                                        "twitter"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://mipay.cash/media/administration_gateway_logo/mipay.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Footer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Business",
                        ""
                    ]
                },
                "2": {
                    "1": {
                        "page_var": [
                            "Log in",
                            ""
                        ],
                        "Log in": {
                            "0": {
                                "Log in": {
                                    "0": [
                                        "Navbar",
                                        "NAVBAR 2",
                                        "0",
                                        "0",
                                        "navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                ""
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "Log in",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Login",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Login": {
                                    "0": [
                                        "Username/Email/Mobile Number",
                                        "TEXT INPUT",
                                        "5",
                                        "45",
                                        "email_msisdn",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Submit",
                                        "SUBMIT",
                                        "1",
                                        "100",
                                        "Submit",
                                        "none",
                                        "check",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Forgot Password",
                                        "HYPERLINK",
                                        "0",
                                        "0",
                                        "Forgot Password",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "FORGOT PASSWORD",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Log In to your Account",
                                        "MARKUP ELEMENT",
                                        "00",
                                        "0",
                                        "Trustmark",
                                        "<div id=\"mfesecure-ts-image\" title=\"McAfee SECURE\" style=\"margin: 0px; padding: 0px; border: 0px; background: url(&quot;https://cdn.ywxi.net/meter/w3schools.com/105.png?ts=1577927419578&quot;) center center / 92px 38px no-repeat rgb(255, 255, 255); max-width: none; max-height: none; position: fixed; height: 38px !important; width: 92px !important; overflow: hidden !important; bottom: 0px !important; right: 0px !important; z-index: 1000003 !important; cursor: pointer !important; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px; border-top-left-radius: 2px;\"></div>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "4": [
                                        "Finger Print",
                                        "FINGERPRINT ELEMENT",
                                        "0",
                                        "0",
                                        "fingerprint",
                                        "",
                                        "icons:help-outline",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Login",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "LOGIN",
                                        "",
                                        "",
                                        "24|12|12",
                                        "",
                                        false,
                                        "",
                                        "LOGIN VALIDATION",
                                        900,
                                        "",
                                        {
                                            "title": "MIPAY payment gateway",
                                            "bg_image": "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG5haXJvYml8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                                            "subtitle": "The platform that facilitates your payment needs from one place."
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Log in",
                        ""
                    ]
                },
                "4": {
                    "1": {
                        "page_var": [
                            "Privacy Policy",
                            ""
                        ],
                        "Privacy Policy": {
                            "0": {
                                "Privacy Policy Nav": {
                                    "0": [
                                        "Privacy Policy",
                                        "NAVBAR 2",
                                        "0",
                                        "0",
                                        "placeholder",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": []
                                        }
                                    ],
                                    "input_var": [
                                        "Privacy Policy Nav",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Privacy Policy",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Privacy Policy": {
                                    "0": [
                                        "Privacy Policy",
                                        "MARKUP ELEMENT",
                                        "1",
                                        "100",
                                        "Mipay Privacy Policy",
                                        "<img src=\"https://mipay.cash/media/administration_gateway_logo/mipay.png\" height=\"100px\" width=\"200px\"/><p></p><p></p><p><strong>Purpose</strong><br> The purpose of the Interintel privacy policy is to establish what we do with our clients personal data. It is critical on how Interintel is going to collect, store and use your personal data on our websites and therefore it is important that you understand what happens to your personal information.<br> Interintel is committed to correct use of personal data of all our clients which is collected through our products and services.</p><br><br> <p><strong>Scope</strong><br> This privacy policy document applies to all users, using our products and/or our services. This entails all the information collected on our websites as well as any related services such as marketing, events or sales. The adherence to this privacy policy is mandatory to all users of our websites.</p><br><br> <p><strong>Policy</strong><br> Interintel is committed to protecting your personal information and the right to privacy to all the users of our websites. The privacy of your personal information is taken very seriously. This privacy policy document covers the general regulations and privacy concerns so as to establish all the information that is collected from our websites is safe and secure.<br> This document will give a description of what we do with your personal information. It will describe what our website collects, stores, uses or shares. It will make our clients aware of what we do with their personal information. This document seeks to explain in an understandable manner how we use your information, how we collect your information and what rights you have in relation to it.</p><br><br> <p><strong>What information do we collect?</strong><br> We collect personal information that identifies an individual. This includes; first and last name, email address, billing and shipping address, social media login data and payment data.<br> <strong>Personal information:</strong> We collect first and last name, email addresses, phone numbers, passwords, usernames, credit card information, billing addresses and any other similar information.<br> <strong>Payment data:</strong> We collect information in response to process your payments when you make purchases. This includes; credit card numbers, Mpesa and Mipay.<br> <strong>Social media login data:</strong> We have the option of registering with Google or Facebook. Information about your social media credentials will be collected.</p><br><br> <p><strong>How do we use your information?</strong><br> We use the information that you provide to generally fulfill any requisitions that you make through the website. This includes processing for payments and providing you with the services/ products that you want.<br> We use the information that you provide to do the following;<br> <strong>To facilitate account registration/login:</strong> We collect information that you use to register or login into our website.<br> <strong>Communicate with you:</strong> Your personal information might be used to send you information about our products/ services.<br> <strong>Manage your orders:</strong> We may use the information you provide to us, to manage your orders, payments that you make through the website.<br> <strong>Delivery of services to the user:</strong> Your information will be used to facilitate the delivery of requested services.</p><br><br> <p><strong>Will your information be shared with anyone?</strong><br> We can only share your personal information so as to help use your personal information in the following ways;<br> <strong>Business partners:</strong> We may share your personal information with our business partners for the purposes of services or promotions.<br> <strong>Google maps platforms APIs:</strong> We may share your personal information with Google maps APIs<br> <strong>Consultants, vendors and other third-party service providers:</strong> We may share your personal information with vendors, consultants, service providers and other contractors in the need of your data for them to offer us services.</p><br><br> <p><strong>Who will your information be shared with?</strong><br> We only share personal information for the purposes of sales and marketing, data analysis, procession of payments and social media incorporation.</p><br><br> <p><strong>How long do we keep your information?</strong><br> We provide ways for you to access, alter or delete your personal information. When you register/ login through the website we will maintain or retain your personal information for the period in which the users have an account with us.</p><br><br>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Privacy Policy",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Privacy Policy",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "logo": "https://mipay.cash/media/administration_gateway_logo/mipay.png",
                                            "title": "Mipay Privacy Policy",
                                            "bg_image": "https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80",
                                            "subtitle": "Our platform enables you to manage all your payment needs, shop, pay bills and transfer money all in one place. This is our privacy policy",
                                            "logInSubtitle": "Privacy Policy Disclaimer"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Mipay Privacy Policy",
                        ""
                    ]
                },
                "138": {
                    "1": {
                        "page_var": [
                            "Terms and Conditions",
                            ""
                        ],
                        "Terms and Conditions": {
                            "0": {
                                "Privacy Policy Nav": {
                                    "0": [
                                        "Navbar 2",
                                        "NAVBAR 2",
                                        "1",
                                        "100",
                                        "Navbar 2",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "NenaSasa home",
                                                "SMS",
                                                "Email",
                                                "Whatsapp API",
                                                "Reseller"
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "Privacy Policy Nav",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Privacy Policy",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Terms and Conditons": {
                                    "2": [
                                        "Mark up Element",
                                        "MARKUP ELEMENT",
                                        "1",
                                        "10000",
                                        "terms and conditions- mipay",
                                        "<p><strong>1. Introduction </strong><br/>Welcome to Mipay Mobile. These Terms and Conditions govern your use of our mobile payments and payment integrations services. By accessing or using Mipay Mobile, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please refrain from using our services.<br/><br/></p><p><strong>2. Acceptance of Terms </strong><br/> By using Mipay Mobile, you agree to: <br/> Comply with all applicable laws and regulations<br/>Provide accurate and complete information <br/>Safeguard your account credentials and notify us immediately of any unauthorized access.<br/> <br/> </p><p><strong>3. Description of Services</strong> <br/> Mipay Mobile provides mobile payment and payment integration services. We reserve the right to modify or discontinue, temporarily or permanently, the services with or without notice. <br/><br/></p><p><strong>4. Privacy and Security: </strong><br/> Our Privacy Policy, incorporated by reference, outlines how we collect, use, and protect your personal information. By using Mipay Mobile, you consent to the practices described in our Privacy Policy. <br/><br/></p><p><strong>5. Payments and Transactions: </strong><br/>  When making payments or transactions through Mipay Mobile, you agree to provide accurate payment information and ensure sufficient funds are available, Mipay Mobile reserves the right to refuse or cancel transactions for any reason. <br/><br/></p><p><strong>6. Prohibited Activities: </strong><br/> You agree not to engage in any prohibited activities, including but not limited to: <br/> Violating any laws or regulations , Engaging in fraudulent or illegal activities, Interfering with the functionality of Mipay Mobile. <br/> <br/></p><p> <strong>7. User Responsibilities </strong><br/> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer <br/><br/></p><p><strong><p> <strong>8. Intellectual Property Rights </strong> <br/> All content included on this site, such as text, graphics, logos, images, is our property or its content suppliers and protected by international copyright laws. <br/><br/></p><p><strong><p><strong>9. Limitation of Liability  </strong><br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/><br/></p><p> <strong>9. Limitation of Liability  </strong> <br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/> <br/></p><p> <strong>10. Governing Law  </strong> <br/> This agreement shall be governed by and construed in accordance with the laws of the country in which Mipay Mobile is registered </p><br/><p> <strong>11.Changes to Terms  </strong><br/> Mipay Mobile has the discretion to update these terms at any time. When we do, we will post a notification on the main page of our site. <br/><br/></p><p> <strong>12. Contacting Us</strong><br/> If you have any questions about these Terms and Conditions, the practices of this site, or your dealings with this site, please contact us.<br/><br/></p>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "<p><strong>6. Prohibited Activities: </strong><br/> You agree not to engage in any prohibited activities, including but not limited to: <br/> Violating any laws or regulations , Engaging in fraudulent or illegal activities, Interfering with the functionality of Mipay Mobile. <br/> <br/></p><p> <strong>7. User Responsibilities </strong><br/> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer <br/><br/></p><p><strong><p> <strong>8. Intellectual Property Rights </strong> <br/> All content included on this site, such as text, graphics, logos, images, is our property or its content suppliers and protected by international copyright laws. <br/><br/></p><p><strong><p><strong>9. Limitation of Liability  </strong><br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/><br/></p><p> <strong>9. Limitation of Liability  </strong> <br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/> <br/></p><p> <strong>10. Governing Law  </strong> <br/> This agreement shall be governed by and construed in accordance with the laws of the country in which Mipay Mobile is registered </p><br/><p> <strong>11.Changes to Terms  </strong><br/> Mipay Mobile has the discretion to update these terms at any time. When we do, we will post a notification on the main page of our site. <br/><br/></p><p> <strong>12. Contacting Us</strong><br/> If you have any questions about these Terms and Conditions, the practices of this site, or your dealings with this site, please contact us.<br/><br/></p>",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Terms and Conditons",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Terms and Conditions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "logo": "https://mipay.cash/media/administration_gateway_logo/mipay.png",
                                            "title": "Mipay Terms and Conditions",
                                            "bg_image": "https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80",
                                            "subtitle": "Our platform enables you to manage all your payment needs, shop, pay bills and transfer money all in one place. This is our Terms and Conditions",
                                            "logInSubtitle": "Terms and Conditions Disclaimer"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "MIPAY TERMS AND CONDITIONS",
                        ""
                    ]
                }
            },
            "all_pages": {
                "0": {
                    "Customer": {
                        "3": [
                            "About",
                            ""
                        ],
                        "4": [
                            "Services",
                            ""
                        ],
                        "5": [
                            "Solutions",
                            ""
                        ],
                        "6": [
                            "Contact Us",
                            ""
                        ]
                    }
                },
                "1": {
                    "Business": {
                        "1": [
                            "About",
                            ""
                        ],
                        "2": [
                            "Services",
                            ""
                        ],
                        "3": [
                            "Solution",
                            ""
                        ],
                        "4": [
                            "Contact Us",
                            ""
                        ]
                    }
                },
                "2": {
                    "Log in": {
                        "1": [
                            "Log in",
                            ""
                        ]
                    }
                },
                "4": {
                    "Mipay Privacy Policy": {
                        "1": [
                            "Privacy Policy",
                            ""
                        ]
                    }
                },
                "138": {
                    "MIPAY TERMS AND CONDITIONS": {
                        "1": [
                            "Terms and Conditions",
                            ""
                        ]
                    }
                }
            }
        },
        "get_section": {
            "this_page_inputs": {
                "0": {
                    "1": {
                        "page_var": [
                            "About Nikobizz",
                            ""
                        ],
                        "About Nikobizz": {
                            "0": {
                                "About Nikobizz": {
                                    "0": [
                                        "About Nikobizz",
                                        "NAVBAR 15",
                                        "0",
                                        "0",
                                        "Navbar 15",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "Features",
                                                "Getting Started",
                                                "Pricing",
                                                "Request Demo",
                                                "Contact Us",
                                                "About",
                                                "Loyalty Program",
                                                "Loyalty Page",
                                                "Customer Loyalty Program",
                                                "Loyalty Features",
                                                "How it works",
                                                "Booking Price Plan"
                                            ],
                                            "group": [
                                                "Loyalty",
                                                "Ecommerce",
                                                "Booking"
                                            ],
                                            "groupTitle": "Products"
                                        }
                                    ],
                                    "1": [
                                        "Nikobizz Business Solutions Provider Agency",
                                        "HERO BANNER",
                                        "1",
                                        "100",
                                        "hero",
                                        "We provide you with a range of business solutions for e-commerce, Loyalty programs, and Booking systems to help propel your business to the next level.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": "https://nikobizz.com/#/2/0",
                                            "bg_image": "https://i.postimg.cc/tTnNPRWS/pexels-christina-morillo-1181248.jpg",
                                            "button_title": "Sign Up"
                                        }
                                    ],
                                    "2": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "About Nikobizz",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About Nikobizz",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "Services",
                            ""
                        ],
                        "Services": {
                            "0": {
                                "Services": {
                                    "0": [
                                        "About Nikobizz Business Solutions",
                                        "HERO ELEMENT 8",
                                        "0",
                                        "0",
                                        "About NikoBizz Mobile Business Solutions",
                                        "NikoBizz Mobile is a business solutions provider brand. We focus on providing digital business solutions to help businesses provide excellent services to their customers. We are highly invested in helping our clients integrate our solutions into their business for better performance. Our clients are our main priority that is why we have superb customer support.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "image": "https://i.postimg.cc/VLJDn8Pb/Customer-Survey.png"
                                        }
                                    ],
                                    "1": [
                                        "Our Services",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "",
                                        "Here are the services we offer to suite you business needs",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "services",
                                        "TILE ELEMENT",
                                        "1",
                                        "100",
                                        "Features",
                                        "nikobizz_services_2",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Nikobizz is a platform to enable growth in business by offering solution for ecommerce, booking and loyalty reward program towards business clients",
                                        "SECTION FRONT 2",
                                        "1",
                                        "100",
                                        "",
                                        "Nikobizz is a platform to enable growth in business by offering solution for ecommerce, booking and loyalty reward program towards business clients",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "Features at a Glance",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "",
                                        "Here are the main Nikobizz services features at a glance",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "6": [
                                        "Features slideshow",
                                        "SERVICES CAROUSEL",
                                        "1",
                                        "100",
                                        "Features",
                                        "nikobizz_home_features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "7": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "8": [
                                        "Why Choose Us",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "",
                                        "Here is why you need to get onboard with Nikobizz services",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "9": [
                                        "Why Choose Us points",
                                        "HERO ELEMENT 14",
                                        "1",
                                        "100",
                                        "POINTS",
                                        "nikobizz_reasons",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "image": "https://i.postimg.cc/L6WCJWc8/Why-choose-us.png",
                                            "points": [
                                                {
                                                    "title": "Superb and 24/7 customer service.",
                                                    "description": "We provide a single point of Contact to communicate new features and roadmaps to our customers on a 24-7 basis. Our goal is for our customers to feel valued and that they have a home with us."
                                                },
                                                {
                                                    "title": "Integration Expertise.",
                                                    "description": "Our Integration expertise allows us to overcome the barriers of generic email platforms and create segments that leverage the data already stored in your Core system"
                                                },
                                                {
                                                    "title": "Affordable Pricing plans for services",
                                                    "description": "Our services are farely affordable across the different services we offer.Get in touch with us to know more and start using our services"
                                                }
                                            ]
                                        }
                                    ],
                                    "10": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "11": [
                                        "Uko Bizz? Get in touch with us on 0757 598 293 for more information",
                                        "HERO ELEMENT 10",
                                        "1",
                                        "100",
                                        "Ready to get Started",
                                        "Already interested in our services?",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nikobizz.com/#/2/0",
                                            "text": "Create your account by clicking the button below",
                                            "button_title": "Sign up"
                                        }
                                    ],
                                    "12": [
                                        "Download The app for free",
                                        "INFO CTA 3",
                                        "1",
                                        "100",
                                        "download app",
                                        "Our NikoBizz Mobile App is available on both Google Play Store and App Store. Download it today and get started.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "app_store": "https://play.google.com/store/apps/dev?id=6308973369108124915",
                                            "google_play": "https://play.google.com/store/apps/dev?id=6308973369108124915",
                                            "screen_shot": "https://i.postimg.cc/L594ZP4z/6.png"
                                        }
                                    ],
                                    "13": [
                                        "Our Blog",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "",
                                        "Find out more of our services by checking our our blog",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "14": [
                                        "Nikobizz Blog",
                                        "HERO ELEMENT 7",
                                        "1",
                                        "100",
                                        "blog",
                                        "Accurate and tailored towards our Nikobizz products and services",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nikobizz.medium.com/",
                                            "subtitle": "Have a look at our blog posts",
                                            "button_title": "Read More",
                                            "hero_image_src": "https://i.postimg.cc/jSJ9CFrz/pexels-cottonbro-5054531-2x.png"
                                        }
                                    ],
                                    "15": [
                                        "Nikobizz",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "nikobizz",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://web.facebook.com/NikobizzKE",
                                                        "instagram|https://www.instagram.com/nikobizz/",
                                                        "twitter|https://twitter.com/Nikobizz_ke"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nikobizz.com/media/administration_gateway_logo/nikobizz.png"
                                        }
                                    ],
                                    "16": [
                                        "scroll to top",
                                        "SCROLL TO TOP",
                                        "1",
                                        "100",
                                        "scroll",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Services",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Services",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "3": {
                        "page_var": [
                            "About",
                            ""
                        ],
                        "About": {
                            "0": {
                                "About": {
                                    "0": [
                                        "About",
                                        "NAVBAR 2",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "Mipay Privacy Policy"
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "About",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Hero Section": {
                                    "0": [
                                        "Making all your payment experiences hustle free",
                                        "HERO ELEMENT",
                                        "0",
                                        "0",
                                        "Making all your payment experiences hustle free",
                                        "Our platform enables you to manage all your payment needs, shop, pay bills and transfer money all in one place.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "link": {
                                                "path": "https://mipay.cash/#/2/0",
                                                "label": "Get Started"
                                            },
                                            "backgroundImage": "https://mipay.cash/static/prod/src/themes/dsv1.0/img/isometic/customer.jpg"
                                        }
                                    ],
                                    "input_var": [
                                        "Hero Section",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Hero Section",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "4": {
                        "page_var": [
                            "Services",
                            ""
                        ],
                        "Services": {
                            "1": {
                                "Hero Section": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "Spacer",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Payments Made Easier",
                                        "SECTION TITLE",
                                        "0",
                                        "0",
                                        "Payments Made Easier",
                                        "With Mipay Your Payments Are Hustle Free!",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Service Description",
                                        "TILE ELEMENT",
                                        "0",
                                        "0",
                                        "Service Section",
                                        "mipay_services",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "OverView",
                                        "HERO ELEMENT",
                                        "0",
                                        "0",
                                        "For all your payment processing needs, The future is now",
                                        "Empowering customers to manage and control payments  We aspire to make your payment experience easy and safe, our platform is an innovative, user friendly mobile and web application accessible anywhere, anytime with the click of a button.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "link": {
                                                "path": "https://mipay.cash/#/2/0",
                                                "label": "Go to"
                                            },
                                            "backgroundImage": "media/dsc_imagelist_image/hero-2-svg.png",
                                            "_backgroundImage": "src/themes/dsv1.0/img/isometic/hero-2.svg"
                                        }
                                    ],
                                    "4": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "SPACER 2",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "Mipay Quick Actions Set up",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "Mipay Quick Action Set Up",
                                        "The quick action settings enable you to set up your preferences when it comes to your normal day to day transactions",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "6": [
                                        "Quick actions",
                                        "TILE ELEMENT 3",
                                        "1",
                                        "100",
                                        "",
                                        "quick_action_landing",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Hero Section",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Service",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "5": {
                        "page_var": [
                            "Solutions",
                            ""
                        ],
                        "Solutions": {
                            "0": {
                                "Solutions": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "Spacer",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Solutions",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "Solutions",
                                        "For all your payment processing needs, The future is now",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Description Box",
                                        "DESCRIPTION BOX",
                                        "1",
                                        "100",
                                        "Description Box",
                                        "mipay_description",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Find Us On Google Play Store",
                                        "INFO CTA",
                                        "1",
                                        "100",
                                        "We Are Also On Google Play Store",
                                        "Download our app on Google  Play Store",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": " https://play.google.com/store/apps/details?id=ke.co.interintel.mipay&hl=en",
                                            "bg_image": "src/themes/dsv1.0/img/isometic/phone.jpg",
                                            "screen_shot": "src/themes/dsv1.0/img/isometic/mipayscreenshot.png",
                                            "button_title": "Download Now"
                                        }
                                    ],
                                    "6": [
                                        "Mipay  Blog",
                                        "HERO ELEMENT 7",
                                        "1",
                                        "100",
                                        "Mipay Blog",
                                        "Our blog posts contains useful tips and information around the services we are offering have a read.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://mipay.medium.com/",
                                            "subtitle": "Have a look at our blog posts",
                                            "button_title": "Read More",
                                            "hero_image_src": "https://images.unsplash.com/photo-1592890288687-961242c04db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                                        }
                                    ],
                                    "input_var": [
                                        "Solutions",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Solutions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "6": {
                        "page_var": [
                            "Contact Us",
                            ""
                        ],
                        "Contact Us": {
                            "0": {
                                "Footer": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Mipay",
                                        "FOOTER ELEMENT 2",
                                        "1",
                                        "100",
                                        "InterIntel",
                                        "Footer content",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook",
                                                        "instagram",
                                                        "twitter"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://mipay.cash/media/administration_gateway_logo/mipay.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Footer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Customer",
                        "icons:lock"
                    ]
                },
                "1": {
                    "1": {
                        "page_var": [
                            "About",
                            ""
                        ],
                        "About": {
                            "0": {
                                "Navigation": {
                                    "0": [
                                        "NavBar",
                                        "NAVBAR 2",
                                        "1",
                                        "100",
                                        "Navbar 2",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "Mipay Privacy Policy"
                                            ]
                                        }
                                    ],
                                    "1": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "0",
                                        "0",
                                        "spacer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Navigation",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Navigation",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "About": {
                                    "2": [
                                        "Allowing businesses to accept  payments, online and offline.",
                                        "HERO BANNER",
                                        "1",
                                        "100",
                                        "Hero",
                                        "Processing all your payments hustle free. Ensuring security you receive, disburse and withdraw payments.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": "https://mipay.cash/#/2/0",
                                            "bg_image": "src/themes/dsv1.0/img/isometic/business-photo.jpg",
                                            "button_title": "Try It Now",
                                            "hero_image_src": "src/themes/dsv1.0/img/isometic/hero-2.svg"
                                        }
                                    ],
                                    "input_var": [
                                        "About",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "Services",
                            ""
                        ],
                        "Services": {
                            "0": {
                                "Spacer": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "spacer",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "100px",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Your Trusted Payment Processor",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Service Description",
                                        "TILE ELEMENT",
                                        "1",
                                        "100",
                                        "Mipay",
                                        "mipay-merchant",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Our Dashboard",
                                        "HERO ELEMENT 4",
                                        "1",
                                        "100",
                                        "OverView",
                                        "Our payment processing service and solution is able to cater to a multitude of clients ranging from small family-owned businesses to large corporations and established conglomerates. We help you collect payments in a completely secure and expedient manner, making it easy to maintain high customer ratings for your businesses. Our high capacity payment platform is designed to process transactions in high volumes – making hundreds of thousands of payments on a daily basis.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": "https://mipay.cash/#/2/0",
                                            "button_title": "Get Started",
                                            "hero_image_src": "src/themes/dsv1.0/img/isometic/mipay_dashboard.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Spacer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Service section",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "3": {
                        "page_var": [
                            "Solution",
                            ""
                        ],
                        "Solution": {
                            "0": {
                                "Solutions": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Manage All Your Payment needs ",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "Solution",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Description Box",
                                        "DESCRIPTION BOX",
                                        "1",
                                        "100",
                                        "description",
                                        "merchant-description",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Solutions",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Solutions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "4": {
                        "page_var": [
                            "Contact Us",
                            ""
                        ],
                        "Contact Us": {
                            "0": {
                                "Footer": {
                                    "0": [
                                        "Spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Download Our App on Google Play Store",
                                        "INFO CTA",
                                        "1",
                                        "100",
                                        "Find Us on Google",
                                        "Download our app on Google  Play Store",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": " https://play.google.com/store/apps/details?id=ke.co.interintel.mipay&hl=en",
                                            "bg_image": "src/themes/dsv1.0/img/isometic/phone.jpg",
                                            "screen_shot": "src/themes/dsv1.0/img/isometic/mipayscreenshot.png",
                                            "button_title": "Download Now"
                                        }
                                    ],
                                    "2": [
                                        "Mipay",
                                        "FOOTER ELEMENT 2",
                                        "1",
                                        "100",
                                        "Footer",
                                        "footer content",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook",
                                                        "instagram",
                                                        "twitter"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://mipay.cash/media/administration_gateway_logo/mipay.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Footer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Business",
                        ""
                    ]
                },
                "2": {
                    "1": {
                        "page_var": [
                            "Log in",
                            ""
                        ],
                        "Log in": {
                            "0": {
                                "Log in": {
                                    "0": [
                                        "Navbar",
                                        "NAVBAR 2",
                                        "0",
                                        "0",
                                        "navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                ""
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "Log in",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Login",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Login": {
                                    "0": [
                                        "Username/Email/Mobile Number",
                                        "TEXT INPUT",
                                        "5",
                                        "45",
                                        "email_msisdn",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Submit",
                                        "SUBMIT",
                                        "1",
                                        "100",
                                        "Submit",
                                        "none",
                                        "check",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Forgot Password",
                                        "HYPERLINK",
                                        "0",
                                        "0",
                                        "Forgot Password",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "FORGOT PASSWORD",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Log In to your Account",
                                        "MARKUP ELEMENT",
                                        "00",
                                        "0",
                                        "Trustmark",
                                        "<div id=\"mfesecure-ts-image\" title=\"McAfee SECURE\" style=\"margin: 0px; padding: 0px; border: 0px; background: url(&quot;https://cdn.ywxi.net/meter/w3schools.com/105.png?ts=1577927419578&quot;) center center / 92px 38px no-repeat rgb(255, 255, 255); max-width: none; max-height: none; position: fixed; height: 38px !important; width: 92px !important; overflow: hidden !important; bottom: 0px !important; right: 0px !important; z-index: 1000003 !important; cursor: pointer !important; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px; border-top-left-radius: 2px;\"></div>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "4": [
                                        "Finger Print",
                                        "FINGERPRINT ELEMENT",
                                        "0",
                                        "0",
                                        "fingerprint",
                                        "",
                                        "icons:help-outline",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Login",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "LOGIN",
                                        "",
                                        "",
                                        "24|12|12",
                                        "",
                                        false,
                                        "",
                                        "LOGIN VALIDATION",
                                        900,
                                        "",
                                        {
                                            "title": "MIPAY payment gateway",
                                            "bg_image": "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG5haXJvYml8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                                            "subtitle": "The platform that facilitates your payment needs from one place."
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Log in",
                        ""
                    ]
                },
                "3": {
                    "1": {
                        "page_var": [
                            "Register",
                            ""
                        ],
                        "Register": {
                            "0": {
                                "Navbar": {
                                    "0": [
                                        "Navbar 2",
                                        "NAVBAR 2",
                                        "1",
                                        "100",
                                        "Navbar 2",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "Terms And Conditions",
                                                "NenaSasa Popup",
                                                "Nenasasa Terms and Conditions",
                                                "Nenasasa Privacy Policy",
                                                "Loyalty",
                                                "Booking",
                                                "Ecommerce"
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "Navbar",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Register": {
                                    "0": [
                                        "First Name",
                                        "TEXT INPUT",
                                        "3",
                                        "35",
                                        "First Name",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Last Name",
                                        "TEXT INPUT",
                                        "3",
                                        "35",
                                        "Last Name",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Email",
                                        "EMAIL INPUT",
                                        "3",
                                        "55",
                                        "Email",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Phone Number",
                                        "NUMBER INPUT",
                                        "10",
                                        "10",
                                        "Phone Number",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "Create Password",
                                        "PASSWORD INPUT",
                                        "5",
                                        "100",
                                        "Create Password",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "Confirm Password",
                                        "PASSWORD INPUT",
                                        "5",
                                        "100",
                                        "Confirm Password",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "6": [
                                        "I agree with the Terms and Conditions",
                                        "TERMS CONDITIONS",
                                        "1",
                                        "100",
                                        "I agree with the Terms and Conditions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "7": [
                                        "Recaptcha",
                                        "RECAPTCHA ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "6Lc4tygbAAAAABZogHicVOkCkO4DzAPz7Egf0-yF",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "8": [
                                        "Or",
                                        "DIVIDER ELEMENT",
                                        "1",
                                        "100",
                                        "OR",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "9": [
                                        "Register Google",
                                        "REGISTER GOOGLE",
                                        "1",
                                        "100",
                                        "Register Google",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "10": [
                                        "Register Facebook",
                                        "REGISTER FACEBOOK",
                                        "1",
                                        "100",
                                        "Register Facebook",
                                        "",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "11": [
                                        "Register",
                                        "SUBMIT",
                                        "0",
                                        "0",
                                        "placeholder",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Register",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Register",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "logo": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png",
                                            "title": "NikoBizz",
                                            "bg_image": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
                                            "subtitle": "NikoBizz E-Commerce platform for merchants and buyers",
                                            "logInSubtitle": "Get started by registering below"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "NikoBizz Registration",
                        ""
                    ]
                },
                "4": {
                    "1": {
                        "page_var": [
                            "Customer Loyalty Program",
                            ""
                        ],
                        "Customer Loyalty Program": {
                            "0": {
                                "About Loyalty": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Customer Loyalty Program",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "Customer Loyalty Program",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "banner",
                                        "HERO ELEMENT 13",
                                        "1",
                                        "100",
                                        "banner",
                                        "A customer Loyalty Program is the systematic collection of customer data in return for rewards, benefits, and additional privileges and benefits to the best and loyal customers. The primary objectives of Loyalty programs are to retain customers and recruit them to be brand ambassadors by referring your products and services to family and friends.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "image": "https://i.postimg.cc/Y2Tb8r6K/undraw-business-shop-qw5t.png"
                                        }
                                    ],
                                    "3": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "How it works",
                                        "SECTION FRONT 2",
                                        "1",
                                        "100",
                                        "",
                                        "How Nikobizz Loyalty works",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "`",
                                        "MANUAL SLIDESHOW",
                                        "1",
                                        "100",
                                        "set up",
                                        "loyalty_guide",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "About Loyalty",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About Loyalty",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        },
                        "Loyalty page": {
                            "0": {
                                "Loyalty": {
                                    "0": [
                                        "Loyalty",
                                        "NAVBAR 15",
                                        "0",
                                        "0",
                                        "navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "About",
                                                "Loyalty Program",
                                                "How it works",
                                                "Booking Price Plan",
                                                "Features",
                                                "Services",
                                                "Getting Started",
                                                "Pricing",
                                                "Contact Us",
                                                "Request Demo"
                                            ],
                                            "group": [
                                                "Booking",
                                                "Ecommerce",
                                                "Loyalty"
                                            ],
                                            "groupTitle": "Products"
                                        }
                                    ],
                                    "1": [
                                        "Loyalty Program",
                                        "HERO ELEMENT 3",
                                        "1",
                                        "100",
                                        "Reward, Build Sell More",
                                        "Apperciate loyal customers,reward their loyalty with personalized rewards and discounts off their purchases.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nikobizz.com/#/2/0",
                                            "bg_image": "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
                                            "button_title": "Register"
                                        }
                                    ],
                                    "input_var": [
                                        "Loyalty",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Loyalty",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        },
                        "Privacy Policy": {
                            "0": {
                                "Privacy Policy Nav": {
                                    "0": [
                                        "Privacy Policy",
                                        "NAVBAR 2",
                                        "0",
                                        "0",
                                        "placeholder",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": []
                                        }
                                    ],
                                    "input_var": [
                                        "Privacy Policy Nav",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Privacy Policy",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Privacy Policy": {
                                    "0": [
                                        "Privacy Policy",
                                        "MARKUP ELEMENT",
                                        "1",
                                        "100",
                                        "Mipay Privacy Policy",
                                        "<img src=\"https://mipay.cash/media/administration_gateway_logo/mipay.png\" height=\"100px\" width=\"200px\"/><p></p><p></p><p><strong>Purpose</strong><br> The purpose of the Interintel privacy policy is to establish what we do with our clients personal data. It is critical on how Interintel is going to collect, store and use your personal data on our websites and therefore it is important that you understand what happens to your personal information.<br> Interintel is committed to correct use of personal data of all our clients which is collected through our products and services.</p><br><br> <p><strong>Scope</strong><br> This privacy policy document applies to all users, using our products and/or our services. This entails all the information collected on our websites as well as any related services such as marketing, events or sales. The adherence to this privacy policy is mandatory to all users of our websites.</p><br><br> <p><strong>Policy</strong><br> Interintel is committed to protecting your personal information and the right to privacy to all the users of our websites. The privacy of your personal information is taken very seriously. This privacy policy document covers the general regulations and privacy concerns so as to establish all the information that is collected from our websites is safe and secure.<br> This document will give a description of what we do with your personal information. It will describe what our website collects, stores, uses or shares. It will make our clients aware of what we do with their personal information. This document seeks to explain in an understandable manner how we use your information, how we collect your information and what rights you have in relation to it.</p><br><br> <p><strong>What information do we collect?</strong><br> We collect personal information that identifies an individual. This includes; first and last name, email address, billing and shipping address, social media login data and payment data.<br> <strong>Personal information:</strong> We collect first and last name, email addresses, phone numbers, passwords, usernames, credit card information, billing addresses and any other similar information.<br> <strong>Payment data:</strong> We collect information in response to process your payments when you make purchases. This includes; credit card numbers, Mpesa and Mipay.<br> <strong>Social media login data:</strong> We have the option of registering with Google or Facebook. Information about your social media credentials will be collected.</p><br><br> <p><strong>How do we use your information?</strong><br> We use the information that you provide to generally fulfill any requisitions that you make through the website. This includes processing for payments and providing you with the services/ products that you want.<br> We use the information that you provide to do the following;<br> <strong>To facilitate account registration/login:</strong> We collect information that you use to register or login into our website.<br> <strong>Communicate with you:</strong> Your personal information might be used to send you information about our products/ services.<br> <strong>Manage your orders:</strong> We may use the information you provide to us, to manage your orders, payments that you make through the website.<br> <strong>Delivery of services to the user:</strong> Your information will be used to facilitate the delivery of requested services.</p><br><br> <p><strong>Will your information be shared with anyone?</strong><br> We can only share your personal information so as to help use your personal information in the following ways;<br> <strong>Business partners:</strong> We may share your personal information with our business partners for the purposes of services or promotions.<br> <strong>Google maps platforms APIs:</strong> We may share your personal information with Google maps APIs<br> <strong>Consultants, vendors and other third-party service providers:</strong> We may share your personal information with vendors, consultants, service providers and other contractors in the need of your data for them to offer us services.</p><br><br> <p><strong>Who will your information be shared with?</strong><br> We only share personal information for the purposes of sales and marketing, data analysis, procession of payments and social media incorporation.</p><br><br> <p><strong>How long do we keep your information?</strong><br> We provide ways for you to access, alter or delete your personal information. When you register/ login through the website we will maintain or retain your personal information for the period in which the users have an account with us.</p><br><br>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Privacy Policy",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Privacy Policy",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "logo": "https://mipay.cash/media/administration_gateway_logo/mipay.png",
                                            "title": "Mipay Privacy Policy",
                                            "bg_image": "https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80",
                                            "subtitle": "Our platform enables you to manage all your payment needs, shop, pay bills and transfer money all in one place. This is our privacy policy",
                                            "logInSubtitle": "Privacy Policy Disclaimer"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "Loyalty Features",
                            ""
                        ],
                        "Loyalty Features": {
                            "0": {
                                "Features": {
                                    "0": [
                                        "What you'll Get",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "What you'll Get",
                                        "These are what we offer your business under the loyalty program",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Loyalty features",
                                        "TILE ELEMENT 4",
                                        "1",
                                        "100",
                                        "Features",
                                        "loyalty_features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Why Choose Us",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "why choose us",
                                        "These are the benefits of choosing our loyalty program",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Reasons",
                                        "HERO ELEMENT 14",
                                        "1",
                                        "100",
                                        "reasons",
                                        "nikobizz_reasons",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "image": "https://i.postimg.cc/Z57V3xwc/undraw-feedback-h2ft.png",
                                            "points": [
                                                {
                                                    "title": "Superb and 24/7 customer service.",
                                                    "description": "We provide a single point of Contact to communicate new features and roadmaps to our customers on a 24/7 basis. Our goal is for our customers to feel valued and that they have a home with us."
                                                },
                                                {
                                                    "title": "Machine Learning Ability.",
                                                    "description": "Our Machine learning ability enables us to extend the system to handle data within the service and beyond. This allows proper segmentation that comes in handy for creating successful marketing campaigns giving potential customers an interactive experience with your brand."
                                                },
                                                {
                                                    "title": "Integration Expertise.",
                                                    "description": "Our Integration expertise allows us to overcome the barriers of generic email platforms and create segments that leverage the data already stored in your Core system."
                                                },
                                                {
                                                    "title": "Robust Reporting and Analytics.",
                                                    "description": "We generate detailed reports and analytics that help you strategize and navigate through your business and your customers."
                                                }
                                            ]
                                        }
                                    ],
                                    "4": [
                                        "Nikobizz loyalty Pacakges",
                                        "PRICE TABLE",
                                        "1",
                                        "100",
                                        "packages",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "These are the best prices for our loyalty services| Our plans are: ": [
                                                {
                                                    "kind": "https://nikobizz.com/#/1/0",
                                                    "name": "Basic Package",
                                                    "count": "Ksh 5,000 per month",
                                                    "description": "No sign up cost. Lipa na MPESA Paybill/Till Integration Core System/POS Integration. Default Whatsapp Menu & Basic Reports. Flexible Cancellations."
                                                },
                                                {
                                                    "kind": "https://nikobizz.com/#/1/0",
                                                    "name": "Pro Package",
                                                    "count": "Get in touch for Pricing",
                                                    "description": "No sign up cost. Lipa na MPESA Paybill/Till Integration Core System/POS Integration. 1000 Bulk SMS Per Month. Default Whatsapp Menu & Basic Reports. Flexible Cancellations. Whatsapp Menu Customization & Reports Customization"
                                                }
                                            ]
                                        }
                                    ],
                                    "6": [
                                        "Download The app for free",
                                        "INFO CTA 3",
                                        "1",
                                        "100",
                                        "INFOR",
                                        "Our Nikobizz Loyalty App is available on both Google Play Store and App Store. Download it today and get started.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "app_store": "https://play.google.com/store/apps/dev?id=6308973369108124915",
                                            "google_play": "https://play.google.com/store/apps/dev?id=6308973369108124915",
                                            "screen_shot": "https://i.postimg.cc/L594ZP4z/6.png"
                                        }
                                    ],
                                    "7": [
                                        "Get to learn more",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "",
                                        "Some frequently asked questions about our Loyalty program and answers",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "8": [
                                        "",
                                        "FAQ ELEMENT",
                                        "1",
                                        "100",
                                        "faq",
                                        "loyalty_faq",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Features",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Features",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "E-Book": {
                                    "0": [
                                        "Name:",
                                        "TEXT INPUT",
                                        "4",
                                        "35",
                                        "name",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Email:",
                                        "EMAIL INPUT",
                                        "8",
                                        "100",
                                        "email",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Phone Number:",
                                        "MSISDN INPUT",
                                        "9",
                                        "10",
                                        "number",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Recaptcha",
                                        "RECAPTCHA ELEMENT",
                                        "1",
                                        "100",
                                        "recaptcha",
                                        "6Lc4tygbAAAAABZogHicVOkCkO4DzAPz7Egf0-yF",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "theme": "dark"
                                        }
                                    ],
                                    "4": [
                                        "Download Ebook",
                                        "SUBMIT",
                                        "1",
                                        "100",
                                        "submit",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "E-Book",
                                        "LANDING FORM 2",
                                        "0",
                                        "0",
                                        "Nikobizz E-Book",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "text": "Fill in the form to download the Nenasasa Ebook. Check your email once you have submitted the form"
                                        }
                                    ]
                                }
                            },
                            "3": {
                                "footer": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "4px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "9": [
                                        "Nikobizz",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://web.facebook.com/NikobizzKE",
                                                        "instagram|https://www.instagram.com/nikobizz/",
                                                        "twitter|https://twitter.com/Nikobizz_ke"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nikobizz.com/media/administration_gateway_logo/nikobizz.png"
                                        }
                                    ],
                                    "input_var": [
                                        "footer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Loyalty",
                        ""
                    ]
                },
                "5": {
                    "1": {
                        "page_var": [
                            "Booking",
                            ""
                        ],
                        "Booking": {
                            "0": {
                                "Booking": {
                                    "0": [
                                        "Booking",
                                        "NAVBAR 15",
                                        "0",
                                        "0",
                                        "navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "Services",
                                                "About",
                                                "Loyalty Program",
                                                "Features",
                                                "Getting Started",
                                                "Pricing",
                                                "Contact Us",
                                                "Request Demo"
                                            ],
                                            "group": [
                                                "Loyalty",
                                                "Ecommerce",
                                                "Booking"
                                            ],
                                            "groupTitle": "Products"
                                        }
                                    ],
                                    "1": [
                                        "Nikobizz Booking",
                                        "HERO ELEMENT 3",
                                        "1",
                                        "100",
                                        "Hero element",
                                        "It is a one-time solution for service businesses that need to manage online bookings for better service delivery.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nikobizz.com/#/2/0",
                                            "bg_image": "https://images.unsplash.com/photo-1608370617993-a5c9ee904646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                                            "button_title": "Get Started"
                                        }
                                    ],
                                    "input_var": [
                                        "Booking",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Booking",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "booking banner": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Our Services are aimed at meeting all your Booking needs",
                                        "HERO ELEMENT 15",
                                        "1",
                                        "100",
                                        "banner",
                                        "Why use an online booking system:",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "image": "https://i.postimg.cc/02bgmyvR/undraw-Booking-re-gw4j-1.png",
                                            "points": [
                                                "Easy Management of bookings. Manage all your booking in one place in a few easy steps.",
                                                "Works 24/7. Potential customers have the freedom to interact with your services and make appointments/reservations at any time.",
                                                "Reports and Analytics. The system has analytics tools to provide insights and track information on booking done to aid the business in decision making",
                                                "Easy and fast payments. Customer pay on booking this ascertains revenue instanlty. The booking system supports mobile and card payments",
                                                "Cut Workload The system reduces the workload for staff. The booing are synched and availability is updated."
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "booking banner",
                                        "SECTION FORM",
                                        "0",
                                        "0",
                                        "booking banner",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        },
                        "How it works": {
                            "0": {
                                "How it works": {
                                    "0": [
                                        "How it works",
                                        "SECTION TITLE 2",
                                        "0",
                                        "0",
                                        "How it works",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "title element",
                                        "TILE ELEMENT 4",
                                        "1",
                                        "100",
                                        "",
                                        "how_it_works",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Nikobizz Booking System, automation of your business appointments",
                                        "SECTION FRONT 2",
                                        "1",
                                        "100",
                                        "",
                                        "Nikobizz Booking System, automation of your business appointments",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "Booking Features",
                                        "TILE ELEMENT 5",
                                        "1",
                                        "100",
                                        "TILE ELEMENT 5",
                                        "booking_features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "image": "https://i.postimg.cc/ZRX6Lbmc/undraw-Booking-re-gw4j-2.png"
                                        }
                                    ],
                                    "input_var": [
                                        "How it works",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "How it works",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "Booking Price Plan",
                            ""
                        ],
                        "Booking Price Plan": {
                            "0": {
                                "Booking Price Plan": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Our Pricing Plan",
                                        "SECTION TITLE 2",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Booking Price Plan",
                                        "PRICE TABLE",
                                        "0",
                                        "0",
                                        "placeholder",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "These are the best prices for our Booking Service| Our plans are: ": [
                                                {
                                                    "kind": "https://nikobizz.com/#/1/0",
                                                    "name": "BASIC",
                                                    "count": "Ksh 5,000",
                                                    "description": "No sign-up costs. Lipa na Mpesa paybill/Till Intergration Core System/POS Intergration. 1000 Bulk Sms Per Month. Default Whatsapp Menu & Basic Reports. Flexible Cancellations"
                                                },
                                                {
                                                    "kind": "https://nikobizz.com/#/1/0",
                                                    "name": "PRO PLAN",
                                                    "count": "Get in touch for Pricing",
                                                    "description": "No sign-up costs. Lipa na Mpesa paybill/Till Intergration Core System/POS Intergration. 1000 Bulk Sms Per Month. Default Whatsapp Menu & Basic Reports. Whatsapp Menu Customization & Reports Customization"
                                                }
                                            ]
                                        }
                                    ],
                                    "5": [
                                        "Booking App Available for mobile devices",
                                        "INFO CTA 3",
                                        "1",
                                        "100",
                                        "download app",
                                        "Download the Nikobizz app for Booking and our nikobizz services",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "app_store": "https://play.google.com/store/apps/dev?id=6308973369108124915",
                                            "google_play": "https://play.google.com/store/apps/dev?id=6308973369108124915",
                                            "screen_shot": "https://i.postimg.cc/wB56Gyt2/2.png"
                                        }
                                    ],
                                    "6": [
                                        "Nikobizz",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "Nikobizz",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://web.facebook.com/NikobizzKE",
                                                        "instagram|https://www.instagram.com/nikobizz/",
                                                        "twitter|https://twitter.com/Nikobizz_ke"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nikobizz.com/media/administration_gateway_logo/nikobizz.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Booking Price Plan",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Booking Price Plan",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Booking",
                        ""
                    ]
                },
                "6": {
                    "1": {
                        "page_var": [
                            "About",
                            ""
                        ],
                        "About": {
                            "0": {
                                "About": {
                                    "1": [
                                        "SPACER 4",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "10px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Nikobizz. Let us help you build and grow your business online",
                                        "HERO ELEMENT 11",
                                        "1",
                                        "100",
                                        "Hero element 3 nikobizz",
                                        "nikobizz_landing_baner",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "path": " https://nikobizz.com/#/2/0",
                                            "text": "Nikobizz is an online store builder and a Content Management System(CMS) that contains all the tools you need to build a  website, accept orders, track inventory process payments, manage shipping, market your brand, and analyze your data.",
                                            "bg_image": "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                                            "button_title": "Get Started",
                                            "hero_image_src": "src/themes/dsv1.0/img/isometic/hero-2.svg"
                                        }
                                    ],
                                    "3": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "About NikoBizz",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "A quick summary about nikobizz",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "Launch your own web store with Nikobizz",
                                        "HERO ELEMENT 8",
                                        "1",
                                        "100",
                                        "NikoBizz",
                                        "With Nikobizz, you get a custom-paid name for your website or a free subdomain, A list of templates to customize your mobile responsive webpage, and integration of your social media platforms on your webpage",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis diam et dignissim porttitor. Proin eleifend mi id mauris sollicitudin cursus at vel ante. Aliquam erat volutpat. Aliquam erat volutpat. Sed a arcu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra eleifend erat non scelerisque.",
                                            "image": "https://i.postimg.cc/DZRSSMFb/nikobizz-shopping.png"
                                        }
                                    ],
                                    "6": [
                                        "SPACER 3",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "spacer 3",
                                        "",
                                        "",
                                        "4|4|4",
                                        "0px",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "7": [
                                        "Save a ton on design, development and management",
                                        "HERO ELEMENT 12",
                                        "1",
                                        "100",
                                        "Save tons on design, development and management",
                                        "Nikobizz provides you with a list of templates to choose from while building your website. Onceyour website is up, it is easy to upload new products and manage everything on your e-commerce site on a dashboard on your mobile phone.",
                                        "",
                                        "18|18|18",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis diam et dignissim porttitor. Proin eleifend mi id mauris sollicitudin cursus at vel ante. Aliquam erat volutpat. Aliquam erat volutpat. Sed a arcu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra eleifend erat non scelerisque.",
                                            "image": "https://i.postimg.cc/zfTVwwQP/undraw-building-websites-i78t.png"
                                        }
                                    ],
                                    "input_var": [
                                        "About",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "Features",
                            ""
                        ],
                        "Features": {
                            "0": {
                                "Features": {
                                    "0": [
                                        "Features",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "Nikobizz offers the following features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Nikobizz features",
                                        "TILE ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "nikobizz_features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "spacer2",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Limited Time Offer",
                                        "HERO ELEMENT 10",
                                        "1",
                                        "100",
                                        "Limited Time Offer",
                                        "Get 30% Discount on your NikoBizz. Plus Upgrade Package",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nikobizz.com/#/1/0",
                                            "text": "Sign up for Nikobizz and get a 30% discount on Nikobizz plus an upgrade on your current package",
                                            "button_title": "UPGRADE NOW"
                                        }
                                    ],
                                    "4": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "5": [
                                        "E-Commerce Features",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "E-Commerce Features",
                                        "We offer the following services around E-commerce",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "6": [
                                        "E-Commerce Features Description",
                                        "DESCRIPTION BOX",
                                        "1",
                                        "100",
                                        "",
                                        "nikobizz_e_features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "7": [
                                        "SPACER 3",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Features",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Features",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "3": {
                        "page_var": [
                            "Getting Started",
                            ""
                        ],
                        "Getting Started": {
                            "0": {
                                "Getting Started": {
                                    "0": [
                                        "How to get started with setting up and publishing your store",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "SECTION TITLE",
                                        "Follow these simple steps",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "NikoBizz Get Started",
                                        "TILE ELEMENT 3",
                                        "1",
                                        "100",
                                        "NikoBizz Get Started",
                                        "nikobizz_get_started",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "60px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "section front 2",
                                        "SECTION FRONT 2",
                                        "1",
                                        "100",
                                        "SECTION FRONT 2",
                                        "NikoBizz, E-Commerce Platform for Merchants and Buyers.  Sign up Today either as a customer or merchant",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Getting Started",
                                        "HERO FORM",
                                        "0",
                                        "0",
                                        "Getting Started",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "5": {
                        "page_var": [
                            "Pricing",
                            ""
                        ],
                        "Pricing": {
                            "0": {
                                "Pricing": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "NikoBizz Pricing Plan",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "Nikobizz pricing plan includes:",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Price Plans",
                                        "PRICE TABLE",
                                        "1",
                                        "100",
                                        "NikoBizz Price plan",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "These are the best prices for our web store services| Our plans are: ": [
                                                {
                                                    "kind": "https://nikobizz.com/#/1/0",
                                                    "name": "BASIC",
                                                    "count": "Ksh 1,999",
                                                    "description": "Starter web store. Nikobizz Domain name. Best for small scale businesses"
                                                },
                                                {
                                                    "kind": "https://nikobizz.com/#/1/0",
                                                    "name": "STANDARD",
                                                    "count": "Ksh 2,999",
                                                    "description": "Recommended plan. Own domain name. More Customization. Best for small to mid businesses"
                                                },
                                                {
                                                    "kind": "https://nikobizz.com/#/1/0",
                                                    "name": "PREMIUM",
                                                    "count": "Ksh 4,999",
                                                    "description": "Domain customization, different templates. Best for cooperates, mid to large businesses"
                                                }
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "Pricing",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Pricing",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "6": {
                        "page_var": [
                            "Request Demo",
                            ""
                        ],
                        "Request Demo": {
                            "0": {
                                "Request Demo": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "60px",
                                        "",
                                        "12|12|12",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Name:",
                                        "TEXT INPUT",
                                        "5",
                                        "50",
                                        "Name:",
                                        "",
                                        "",
                                        "18|18|18",
                                        "",
                                        true,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Email:",
                                        "EMAIL INPUT",
                                        "5",
                                        "100",
                                        "Email:",
                                        "",
                                        "",
                                        "20|20|20",
                                        "",
                                        true,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Company:",
                                        "TEXT INPUT",
                                        "5",
                                        "100",
                                        "Company:",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        true,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "5": [
                                        "Request Demo",
                                        "SUBMIT",
                                        "1",
                                        "100",
                                        "Request Demo",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Request Demo",
                                        "LANDING FORM 2",
                                        "0",
                                        "0",
                                        "Request Demo",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "text": "Fill in the form to request for a demo and our team will contact you for a demonstration"
                                        }
                                    ]
                                }
                            },
                            "1": {
                                "NikoBizz Blog": {
                                    "0": [
                                        "Nikobizz Blog",
                                        "HERO ELEMENT 7",
                                        "1",
                                        "100",
                                        "NikoBizz Mobile Blog",
                                        "Our blog posts contains useful tips and information about use of our services to set up your online e-commerce or booking website. Have a read.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nikobizz.medium.com/",
                                            "subtitle": "Have a look at our blog posts",
                                            "button_title": "Read More",
                                            "hero_image_src": "https://images.unsplash.com/photo-1507307359011-2447a3598a6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                        }
                                    ],
                                    "input_var": [
                                        "NikoBizz Blog",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "NikoBizz Mobile Blog",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "8": {
                        "page_var": [
                            "Contact Us",
                            ""
                        ],
                        "Contact Us": {
                            "0": {
                                "Contact us Footer": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "60px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "NikoBizz",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "NikoBizz",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy",
                                                        "Terms & Conditions",
                                                        "Careers"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "info@interintel.co.ke"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://web.facebook.com/NikobizzKE",
                                                        "instagram|https://www.instagram.com/nikobizz/",
                                                        "twitter|https://twitter.com/Nikobizz_ke"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nikobizz.com/media/administration_gateway_logo/nikobizz.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Contact us Footer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Contact us Footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Ecommerce",
                        ""
                    ]
                },
                "15": {
                    "4": {
                        "page_var": [
                            "Pricing",
                            ""
                        ],
                        "Pricing": {
                            "1": {
                                "Bulk Pricing": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "SPACER",
                                        "60px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Bulk Sms Pricing",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "Bulk Sms Pricing",
                                        "Sms rates are based on the network provider and number of sms",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Bulk Sms Pricing",
                                        "PRICE CARDS",
                                        "1",
                                        "100",
                                        "Bulk Sms Pricing",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "[{\"name\":\"Safaricom\",\"description\":\"Bulk SMS cover 1-99,999 sms, at Ksh0.85 . Bulk SMS cover 100,000-499,999, at Ksh0.55 . Bulk SMS cover 500,000-999,999, at Ksh0.45 . Bulk SMS cover 1M-2.5M, at Ksh0.35 .Over 2.5M, at Ksh0.25.\"},{\"name\":\"Airtel\",\"description\":\"Bulk SMS cover 1-99,999 sms, at Ksh1.0 . Bulk SMS cover 100,000-499,999, at Ksh0.95 . Bulk SMS cover 500,000-999,999, at Ksh0.75 . Bulk SMS cover 1M-2.5M, at Ksh0.55 .Over 2.5M, at Ksh0.45.\"},{\"name\":\"Telkom\",\"description\":\"Bulk SMS cover 1-99,999 sms, at Ksh1.10 . Bulk SMS cover 100,000-499,999, at Ksh1.00 . Bulk SMS cover 500,000-999,999, at Ksh0.75 . Bulk SMS cover 1M-2.5M, at Ksh0.65 .Over 2.5M, at Ksh0.55.\"}]"
                                    ],
                                    "input_var": [
                                        "Bulk Pricing",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Bulk Pricing",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "6": {
                        "page_var": [
                            "Our Partners",
                            ""
                        ],
                        "Our Partners": {
                            "1": {
                                "Our Partners": {
                                    "0": [
                                        "Our Partners",
                                        "SECTION TITLE",
                                        "0",
                                        "0",
                                        "Our Partners",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Partners Images",
                                        "CLIENT ELEMENT",
                                        "0",
                                        "0",
                                        "Partners Image",
                                        "nenasasapartners",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Our Partners",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Our Partners",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "7": {
                        "page_var": [
                            "Blog",
                            ""
                        ],
                        "Blog": {
                            "0": {
                                "Nenasasa FAQs": {
                                    "0": [
                                        "Nenasasa FAQs",
                                        "FAQ ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "nenasasa_faq",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Nenasasa FAQs",
                                        "SECTION FORM",
                                        "0",
                                        "0",
                                        "Nenasasa FAQs",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Nenasasa Blog": {
                                    "0": [
                                        "Nenasasa Blog",
                                        "HERO ELEMENT 7",
                                        "1",
                                        "100",
                                        "Nenasasa Blog",
                                        "Our blog posts contains useful tips and information around reaching to your customers through the use of our services.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nenasasa-channels.medium.com/",
                                            "subtitle": "Have a look at our blog posts",
                                            "button_title": "Read More",
                                            "hero_image_src": "https://images.unsplash.com/photo-1554257281-3dba342159d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                        }
                                    ],
                                    "input_var": [
                                        "Nenasasa Blog",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Nenasasa Blog",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "NenaSasa home",
                        ""
                    ]
                },
                "18": {
                    "1": {
                        "page_var": [
                            "Terms And Conditions",
                            ""
                        ],
                        "Terms And Conditions": {
                            "0": {
                                "Navbar": {
                                    "0": [
                                        "Navbar 2",
                                        "NAVBAR 2",
                                        "1",
                                        "100",
                                        "Navbar 2",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "NenaSasa home",
                                                "SMS",
                                                "Email",
                                                "Whatsapp API",
                                                "Reseller"
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "Navbar",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Terms And Conditions": {
                                    "0": [
                                        "Mark up Element",
                                        "MARKUP ELEMENT",
                                        "1",
                                        "100",
                                        "markup Terms",
                                        "<img width=\"200px\" height=\"100px\" src=\"https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png\" /><p> <strong>OVERVIEW</strong> <br/> This website is operated by Nenasasa. Throughout the site, the terms we, us and our refer to Nenasasa. Nenasasa offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. <br/> <br/> By visiting our site and/ or purchasing something from us, you engage in our Service and agree to be bound by the following terms and conditions (Terms of Service, Terms), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. <br/> <br/> Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. <br/> <br/> Any new features or tools which are added to the website shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes. <br/> <br/> </p> <p> <strong>SECTION 1 - ONLINE STORE TERMS</strong> <br/> By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. <br/> You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). <br/> You must not transmit any worms or viruses or any code of a destructive nature. <br/> A breach or violation of any of the Terms will result in an immediate termination of your Services. <br/> <br/> <strong>SECTION 2 - GENERAL CONDITIONS</strong> <br/> We reserve the right to refuse service to anyone for any reason at any time. <br/> You understand that your content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. </p> <p> You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. <br/> The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms. <br/> <br/> <strong> SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION </strong> <br/> We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. <br/> This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site. <br/> <br/> <strong>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</strong> <br/> Prices for our products are subject to change without notice. <br/> We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. <br/> We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service. <br/> <br/> <strong>SECTION 5 - SERVICES </strong> <br/> We reserve the right, but are not obligated, to limit the sales of our Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the services that we offer. All descriptions of services pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any service offering at any time. Any offer for any service made on this site is void where prohibited. <br/> <br/> <strong>SECTION 6 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</strong> <br/> If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, comments), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. <br/> We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any partys intellectual property or these Terms of Service. <br/> You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party. <br/> <br/> <strong>SECTION 7 - PERSONAL INFORMATION</strong> <br/> Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy. <br/> <br/> <strong>SECTION 8 - ERRORS, INACCURACIES AND OMISSIONS</strong> <br/> Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order). <br/> We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated. <br/> <br/> <strong>SECTION 9 - PROHIBITED USES</strong> <br/> In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. <br/> <br/> <strong> SECTION 10 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY </strong> <br/> We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. <br/> We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. <br/> You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. <br/> You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided as is and as available for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. <br/> In no case shall Nenasasa, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law. <br/> <br/> <strong>SECTION 11 - INDEMNIFICATION</strong> <br/> You agree to indemnify, defend and hold harmless Nenasasa and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party. <br/>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "<br/> <strong>SECTION 12 - SEVERABILITY</strong> <br/> In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions. <br/> <br/> <strong>SECTION 13 - TERMINATION</strong> <br/> The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. <br/> These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. <br/> If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof). <br/> <br/> <strong>SECTION 14 - ENTIRE AGREEMENT</strong> <br/> The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. <br/> These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). <br/> Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party. <br/> <br/> <strong>SECTION 15 - GOVERNING LAW</strong> <br/> These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Kenya. <br/> <br/> <strong>SECTION 16 - CHANGES TO TERMS OF SERVICE</strong> <br/> You can review the most current version of the Terms of Service at any time at this page. <br/> We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes. <br/> <br/> <strong>SECTION 17 - CONTACT INFORMATION</strong> </p> <p>For any contact information, please reach out to as at <a href=\"mailto:info@nenasasa.com\">info@nenasasa.com</a> or <a href=\"mailto:social@nenasasa.com\">social@nenasasa.com</a></p>",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Nenasasa",
                                        "FOOTER ELEMENT 2",
                                        "1",
                                        "100",
                                        "Nenasasa",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy|https://nenasasa.com/#/4/0/",
                                                        "Terms & Conditions|https://nenasasa.com/#/3/0/"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "social@nenasasa.com"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://www.facebook.com/Nenasasa-112720603742419/",
                                                        "instagram|https://www.instagram.com/nenasasa_ke/",
                                                        "twitter|https://twitter.com/nenasasa_ke?s=09",
                                                        "linkedin|https://www.linkedin.com/showcase/nenasasa/",
                                                        "youtube|https://www.youtube.com/channel/UCW_AOWaXR4wACZpKVG4eHQA"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Terms And Conditions",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Terms And Conditions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "logo": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png",
                                            "title": "Nenasasa Terms & Conditions",
                                            "bg_image": "https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80",
                                            "subtitle": "Our messaging service enables you to customize bulk SMS and Emails to your customers. These are the terms and Conditions",
                                            "logInSubtitle": "Nenasasa Terms & Conditions"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Nenasasa Terms and Conditions",
                        ""
                    ]
                },
                "19": {
                    "1": {
                        "page_var": [
                            "Privacy Policy",
                            ""
                        ],
                        "Privacy Policy": {
                            "1": {
                                "Nenasasa Privacy Policy": {
                                    "0": [
                                        "Nenasasa privacy policy",
                                        "MARKUP ELEMENT",
                                        "1",
                                        "100",
                                        "Nenasasa privacy policy",
                                        "<img width=\"200px\" height=\"100px\" src=\"https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png\" /><p></p> <p><strong>Purpose</strong> <br> The purpose of the Interintel privacy policy is to establish what we do with our clients personal data. It is critical on how Interintel is going to collect, store and use your personal data on our websites and therefore it is important that you understand what happens to your personal information.Interintel is committed to correct use of personal data of all our clients which is collected through our products and services.<br> <br></p> <p><strong>Scope</strong> <br> This privacy policy document applies to all users, using our products and/or our services. This entails all the information collected on our websites as well as any related services such as marketing, events or sales. The adherence to this privacy policy is mandatory to all users of our websites.<br> <br></p> <p><strong>Policy</strong> <br> Nenasasa is committed to protecting your personal information and the right to privacy to all the users of our websites. The privacy of your personal information is taken very seriously. This privacy policy document covers the general regulations and privacy concerns so as to establish all the information that is collected from our websites is safe and secure.<br> <br> This document will give a description of what we do with your personal information. It will describe what our website collects, stores, uses or shares. It will make our clients aware of what we do with their personal information. This document seeks to explain in an understandable manner how we use your information, how we collect your information and what rights you have in relation to it.<br> <br> </p> <p><strong>What information do we collect?</strong> <br> We collect personal information that identifies an individual. This includes; first and last name, email address, billing and shipping address, social media login data and payment data.<br>  <b>Personal information:</b> We collect first and last name, email addresses, phone numbers, passwords, usernames, credit card information, billing addresses and any other similar information.<br>  <b>Payment data:</b> We collect information in response to process your payments when you make purchases. This includes; credit card numbers, Mpesa and Mipay.<br>  <b>Social media login data:</b> We have the option of registering with Google or Facebook. Information about your social media credentials will be collected.<br> <br> </p> <p><strong>How do we use your information?</strong> <br> <br>We use the information that you provide to generally fulfill any requisitions that you make through the website. This includes processing for payments and providing you with the services products that you want. <br> <br> We use the information that you provide to do the following;<br>  <b>To facilitate account registration/login:</b> We collect information that you use to register or login into our website.<br>  <b>Communicate with you:</b> Your personal information might be used to send you information about our products/ services.<br>  <b>Manage your orders:</b> We may use the information you provide to us, to manage your orders, payments that you make through the website.<br>  <b>Delivery of services to the user:</b> Your information will be used to facilitate the delivery of requested services.<br> <br> </p> <p><strong>Will your information be shared with anyone?</strong> <br> We can only share your personal information so as to help use your personal information in the following ways;<br>  <b>Business partners:</b> We may share your personal information with our business partners for the purposes of services or promotions.<br>  <b>Google maps platforms APIs:</b> We may share your personal information with Google maps APIs<br>  <b>Consultants, vendors and other third-party service providers:</b> We may share your personal information with vendors, consultants, service providers and other contractors in the need of your data for them to offer us services.<br> <br> </p> <p><strong>Who will your information be shared with?</strong> <br> We only share personal information for the purposes of sales and marketing, data analysis, procession of payments and social media incorporation.<br> </p><p><br><strong>How long do we keep your information?</strong><br>  We provide ways for you to access, alter or delete your personal information. When you register or login through the website we will maintain or retain your personal information for the period in which the users have an account with us.<br> </p>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Nenasasa",
                                        "FOOTER ELEMENT 2",
                                        "1",
                                        "100",
                                        "Nenasasa",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy|https://nenasasa.com/#/4/0/",
                                                        "Terms & Conditions|https://nenasasa.com/#/3/0/"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "social@nenasasa.com"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://www.facebook.com/Nenasasa-112720603742419/",
                                                        "instagram|https://www.instagram.com/nenasasa_ke/",
                                                        "twitter|https://twitter.com/nenasasa_ke?s=09",
                                                        "linkedin|https://www.linkedin.com/showcase/nenasasa/",
                                                        "youtube|https://www.youtube.com/channel/UCW_AOWaXR4wACZpKVG4eHQA"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Nenasasa Privacy Policy",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Nenasasa Privacy Policy",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "logo": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png",
                                            "title": "Nenasasa Privacy Policy",
                                            "bg_image": "https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80",
                                            "subtitle": "Our messaging service enables you to customize bulk SMS and Emails to your customers. This is our privacy policy",
                                            "logInSubtitle": "Privacy Policy Disclaimer"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Nenasasa Privacy Policy",
                        ""
                    ]
                },
                "20": {
                    "1": {
                        "page_var": [
                            "SMS",
                            ""
                        ],
                        "SMS": {
                            "0": {
                                "SMS Navigation": {
                                    "0": [
                                        "SMS",
                                        "NAVBAR 15",
                                        "0",
                                        "0",
                                        "Navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "About Reselling",
                                                "About Reseller",
                                                "About Reseller Account",
                                                "E-book",
                                                "About Whatsapp API",
                                                "Whatsapp",
                                                "Services",
                                                "Our Platform",
                                                "Pricing",
                                                "Our Partners",
                                                "Blog",
                                                "Contact Us",
                                                "NenaSasa Popup",
                                                "Terms And Conditions",
                                                "Privacy Policy",
                                                "Our Portal",
                                                "About Nenasasa Email",
                                                "Bulk Email Features"
                                            ],
                                            "logo": "src/themes/dsv1.0/img/isometic/logos/nenasasa_logo1.png",
                                            "group": [
                                                "SMS",
                                                "Email",
                                                "Whatsapp API",
                                                "Reseller"
                                            ],
                                            "groupTitle": "Products"
                                        }
                                    ],
                                    "1": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "SPACER",
                                        "10px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "SMS Navigation",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "SMS",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "About SMS": {
                                    "0": [
                                        "Bulk SMS Service",
                                        "HERO ELEMENT 3",
                                        "1",
                                        "100",
                                        "Nenasasa Bulk SMS Service",
                                        "Customize and send an unlimited number of SMS to your recipients.",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://docs.google.com/forms/d/e/1FAIpQLSdtoq6PNOPCwD8eWEl_pyCl4gOSFC-f8ZGdcr1fIDJy6pQl3A/viewform?usp=sf_link ",
                                            "bg_image": "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                            "button_title": "Contact Sales"
                                        }
                                    ],
                                    "input_var": [
                                        "About SMS",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About SMS",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        },
                        "Sign In": {
                            "0": {
                                "Sign In": {
                                    "0": [
                                        "Username/Email/Mobile Number",
                                        "TEXT INPUT",
                                        "1",
                                        "100",
                                        "email_msisdn",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Finger Print",
                                        "FINGERPRINT ELEMENT",
                                        "1",
                                        "100",
                                        "fingerprint",
                                        "None",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Submit",
                                        "SUBMIT",
                                        "1",
                                        "100",
                                        "Submit",
                                        "None",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Forgot Password",
                                        "HYPERLINK",
                                        "1",
                                        "100",
                                        "Forgot Password",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "FORGOT PASSWORD",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "4": [
                                        "Sign In to your account",
                                        "MARKUP ELEMENT",
                                        "00",
                                        "0",
                                        "Trustmark",
                                        "<div id=\"mfesecure-ts-image\" title=\"McAfee SECURE\" style=\"margin: 0px; padding: 0px; border: 0px; background: url(&quot;https://cdn.ywxi.net/meter/w3schools.com/105.png?ts=1577927419578&quot;) center center / 92px 38px no-repeat rgb(255, 255, 255); max-width: none; max-height: none; position: fixed; height: 38px !important; width: 92px !important; overflow: hidden !important; bottom: 0px !important; right: 0px !important; z-index: 1000003 !important; cursor: pointer !important; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px; border-top-left-radius: 2px;\"></div>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Sign In",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Sign In",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "LOGIN VALIDATION",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        },
                        "About Bulk Sms": {
                            "1": {
                                "How it works": {
                                    "0": [
                                        "How it works",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "How to get started to purchase bulk sms",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "How it works",
                                        "DESCRIPTION BOX",
                                        "1",
                                        "100",
                                        "",
                                        "bulk_sms_how_it_works",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "How it works",
                                        "SECTION FORM",
                                        "0",
                                        "0",
                                        "How it works",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "Bulk SMS Features",
                            ""
                        ],
                        "Bulk SMS Features": {
                            "0": {
                                "Bulk SMS  Features": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Bulk SMS  Features",
                                        "SECTION TITLE",
                                        "0",
                                        "0",
                                        "Bulk SMS Features",
                                        "Our Bulk sms service has the following features:",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Features",
                                        "TILE ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "nenasasa_services",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Solutions Targeted To Industries.",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "Industries",
                                        "TILE ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "solution_industries",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Bulk SMS  Features",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Bulk SMS  Features",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "3": {
                        "page_var": [
                            "Bulk sms Pricing",
                            ""
                        ],
                        "Bulk sms Pricing": {
                            "0": {
                                "Bulk sms Pricing": {
                                    "0": [
                                        "Bulk sms Pricing",
                                        "PRICE CARDS",
                                        "0",
                                        "0",
                                        "placeholder",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "[{\"name\":\"Safaricom\",\"description\":\"Bulk SMS cover 1-99,999 sms, at Ksh0.85 . Bulk SMS cover 100,000-499,999, at Ksh0.55 . Bulk SMS cover 500,000-999,999, at Ksh0.45 . Bulk SMS cover 1M-2.5M, at Ksh0.35 .Over 2.5M, at Ksh0.25.\"},{\"name\":\"Airtel\",\"description\":\"Bulk SMS cover 1-99,999 sms, at Ksh1.0 . Bulk SMS cover 100,000-499,999, at Ksh0.95 . Bulk SMS cover 500,000-999,999, at Ksh0.75 . Bulk SMS cover 1M-2.5M, at Ksh0.55 .Over 2.5M, at Ksh0.45.\"},{\"name\":\"Telkom\",\"description\":\"Bulk SMS cover 1-99,999 sms, at Ksh1.10 . Bulk SMS cover 100,000-499,999, at Ksh1.00 . Bulk SMS cover 500,000-999,999, at Ksh0.75 . Bulk SMS cover 1M-2.5M, at Ksh0.65 .Over 2.5M, at Ksh0.55.\"}]"
                                    ],
                                    "2": [
                                        "Ready to Get Started?",
                                        "SECTION FRONT 2",
                                        "1",
                                        "100",
                                        "Ready to get Started",
                                        "Start sending bulk sms to you clients or customer using Nenasasa",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "text": "Register now to start using bulk sms",
                                            "button_title": "Sign me up!"
                                        }
                                    ],
                                    "input_var": [
                                        "Bulk sms Pricing",
                                        "LANDING FORM 2",
                                        "0",
                                        "0",
                                        "Bulk sms Pricing",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "text": "These are the rates for sending bulk sms over different number of recipients across different mobile network providers "
                                        }
                                    ]
                                }
                            },
                            "1": {
                                "Getting Started": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Ready to Get Started?",
                                        "HERO ELEMENT 10",
                                        "1",
                                        "100",
                                        "Ready to get Started",
                                        "Start sending bulk sms to you clients or customers using Nenasasa",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://docs.google.com/forms/d/e/1FAIpQLSdtoq6PNOPCwD8eWEl_pyCl4gOSFC-f8ZGdcr1fIDJy6pQl3A/viewform?usp=sf_link ",
                                            "text": "Register now to start using bulk sms",
                                            "button_title": "Contact Sales"
                                        }
                                    ],
                                    "5": [
                                        "Testimonies",
                                        "SECTION 11",
                                        "1",
                                        "100",
                                        "",
                                        "testimonies_nenasasa",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "6": [
                                        "spacer2",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "7": [
                                        "Nenasasa",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "Nenasasa",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy|https://nenasasa.com/#/4/0/",
                                                        "Terms & Conditions|https://nenasasa.com/#/3/0/"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "social@nenasasa.com"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://www.facebook.com/Nenasasa-112720603742419/",
                                                        "instagram|https://www.instagram.com/nenasasa_ke/",
                                                        "twitter|https://twitter.com/nenasasa_ke?s=09",
                                                        "linkedin|https://www.linkedin.com/showcase/nenasasa/",
                                                        "youtube|https://www.youtube.com/channel/UCW_AOWaXR4wACZpKVG4eHQA"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Getting Started",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Getting Started",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "SMS",
                        ""
                    ]
                },
                "21": {
                    "1": {
                        "page_var": [
                            "Email",
                            ""
                        ],
                        "Email": {
                            "0": {
                                "Email Navigation": {
                                    "0": [
                                        "Email",
                                        "NAVBAR 15",
                                        "0",
                                        "0",
                                        "placeholder",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "About Reselling",
                                                "About Reseller",
                                                "About Reseller Account",
                                                "E-book",
                                                "About Whatsapp API",
                                                "Whatsapp",
                                                "Services",
                                                "Our Platform",
                                                "Pricing",
                                                "Our Partners",
                                                "Blog",
                                                "Contact Us",
                                                "NenaSasa Popup",
                                                "Terms And Conditions",
                                                "Privacy Policy",
                                                "Our Portal",
                                                "About Bulk Sms",
                                                "Bulk SMS Features",
                                                "Bulk Sms Pricing"
                                            ],
                                            "logo": "src/themes/dsv1.0/img/isometic/logos/nenasasa_logo1.png",
                                            "group": [
                                                "SMS",
                                                "Email",
                                                "Whatsapp API",
                                                "Reseller"
                                            ],
                                            "groupTitle": "Products"
                                        }
                                    ],
                                    "input_var": [
                                        "Email Navigation",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Email",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "About": {
                                    "0": [
                                        "Bulk Email Service",
                                        "HERO ELEMENT 3",
                                        "1",
                                        "100",
                                        "Nenasasa Bulk Email Service",
                                        "Our email channel enables you to customize and send bulk Emails to your customers or clients",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nenasasa.com/#/2/0",
                                            "bg_image": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                                            "button_title": "Sign up"
                                        }
                                    ],
                                    "input_var": [
                                        "About",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "About Nenasasa Email",
                            ""
                        ],
                        "About Nenasasa Email": {
                            "0": {
                                "Email": {
                                    "0": [
                                        "Nenasasa Bulk Email",
                                        "ABOUT SECTION",
                                        "0",
                                        "0",
                                        "Nenasasa Bulk Email",
                                        "Send Unlimited number of Emails to your recipients",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "text": "Bulk Email allows you to effectively communicate with your recipients by sending emails to as many recipients with customized messages and attachments. Efficiently engage you recipients with our bulk Email service",
                                            "image": "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                        }
                                    ],
                                    "input_var": [
                                        "Email",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Email",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        },
                        "Bulk Email Features": {
                            "0": {
                                "Features": {
                                    "0": [
                                        "Bulk Email Features",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "Our Bulk Email service has the following features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "Nenasasa Bulk Email",
                                        "TILE ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "nenasasa_email_features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "Ready to Get Started?",
                                        "HERO ELEMENT 10",
                                        "1",
                                        "100",
                                        "Ready to get Started",
                                        "Sign up now and start sending bulks emails to your customers or clients",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nenasasa.com/#/2/0",
                                            "text": "Register now to start using bulk email",
                                            "button_title": "Sign me up!"
                                        }
                                    ],
                                    "5": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "6": [
                                        "Nenasasa",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "Nenasasa",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy|https://nenasasa.com/#/4/0/",
                                                        "Terms & Conditions|https://nenasasa.com/#/3/0/"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "social@nenasasa.com"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://www.facebook.com/Nenasasa-112720603742419/",
                                                        "instagram|https://www.instagram.com/nenasasa_ke/",
                                                        "twitter|https://twitter.com/nenasasa_ke?s=09",
                                                        "linkedin|https://www.linkedin.com/showcase/nenasasa/",
                                                        "youtube|https://www.youtube.com/channel/UCW_AOWaXR4wACZpKVG4eHQA"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Features",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Features",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Email",
                        ""
                    ]
                },
                "22": {
                    "1": {
                        "page_var": [
                            "Whatsapp",
                            ""
                        ],
                        "Whatsapp": {
                            "0": {
                                "Whatsapp": {
                                    "0": [
                                        "Whatsapp",
                                        "NAVBAR 15",
                                        "0",
                                        "0",
                                        "placeholder",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "About Reselling",
                                                "About Reseller",
                                                "About Reseller Account",
                                                "E-book",
                                                "Bulk Sms Pricing",
                                                "About Nenasasa",
                                                "Bulk Email Features",
                                                "Services",
                                                "Our Platform",
                                                "Pricing",
                                                "Our Partners",
                                                "Blog",
                                                "Contact Us",
                                                "NenaSasa Popup",
                                                "Terms And Conditions",
                                                "Privacy Policy",
                                                "Our Portal",
                                                "About Bulk Sms",
                                                "Bulk SMS Features"
                                            ],
                                            "logo": "src/themes/dsv1.0/img/isometic/logos/nenasasa_logo1.png",
                                            "group": [
                                                "SMS",
                                                "Email",
                                                "Whatsapp API",
                                                "Reseller"
                                            ],
                                            "groupTitle": "Products"
                                        }
                                    ],
                                    "1": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "10px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Whatsapp",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Whatsapp",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "About Whatsapp API": {
                                    "0": [
                                        "Whatsapp Business API",
                                        "HERO ELEMENT 3",
                                        "1",
                                        "100",
                                        "Whatsapp API",
                                        "Start using our whatapp integration service to start sending messages to your recipients via Whatsapp",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nenasasa.com/#/2/0",
                                            "bg_image": "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                                            "button_title": "Sign up"
                                        }
                                    ],
                                    "input_var": [
                                        "About Whatsapp API",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About Whatsapp API",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        },
                        "About Whatsapp API": {
                            "0": {
                                "About": {
                                    "0": [
                                        "Whatsapp Business API",
                                        "ABOUT SECTION",
                                        "1",
                                        "100",
                                        "About",
                                        "Integration of Whatsapp in your Business",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "text": "Integrating Whatsapp into your business is now easy through Nenasasa. With Whatsapp being the most popular chatting app in the region, improve your customer interaction on therir favorite chatting app through Nenasasa",
                                            "image": "https://images.unsplash.com/photo-1519069060891-f8c50519bf39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        }
                                    ],
                                    "input_var": [
                                        "About",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Benefits of Whatsapp API": {
                                    "0": [
                                        "Benefits of Whatsapp Integration",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "These are the benefits of choosing our whatsapp integration service",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Benefits",
                                        "HERO ELEMENT 14",
                                        "1",
                                        "100",
                                        "benefits",
                                        "booking_features",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {
                                            "image": "https://images.unsplash.com/photo-1599382103240-5f2a57137d28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                                            "points": [
                                                {
                                                    "title": "Use Chabot to execute and handle customer requests via WhatsApp. ",
                                                    "description": "Integrate a Chabot on WhatsApp Business API to handle customer requests and queries."
                                                },
                                                {
                                                    "title": "Rich Messaging with your clients. ",
                                                    "description": "Integrating WhatsApp Business API with your clients allows your business to interact with your clients visually and technically. You can use images, videos, documents, audio, video calls, Locations for easy transaction processes."
                                                },
                                                {
                                                    "title": "24/7 Availability. ",
                                                    "description": "By integrating a Chabot on WhatsApp Business API, you are available to your customers on a24-hour basis."
                                                }
                                            ]
                                        }
                                    ],
                                    "2": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "Sign up to start sending automated Whatsapp messages",
                                        "HERO ELEMENT 10",
                                        "1",
                                        "100",
                                        "Getting Started",
                                        "Nenasasa Whatsapp Business API",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nenasasa.com/#/2/0",
                                            "button_title": "Get Started"
                                        }
                                    ],
                                    "5": [
                                        "Whatsapp API Intergration Frequently Asked Questions",
                                        "FAQ ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "whatsapp_faq",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "DATA SOURCE",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "6": [
                                        "Nenasasa",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "Nenasasa",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy|https://nenasasa.com/#/4/0/",
                                                        "Terms & Conditions|https://nenasasa.com/#/3/0/"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "social@nenasasa.com"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://www.facebook.com/Nenasasa-112720603742419/",
                                                        "instagram|https://www.instagram.com/nenasasa_ke/",
                                                        "twitter|https://twitter.com/nenasasa_ke?s=09",
                                                        "linkedin|https://www.linkedin.com/showcase/nenasasa/",
                                                        "youtube|https://www.youtube.com/channel/UCW_AOWaXR4wACZpKVG4eHQA"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png"
                                        }
                                    ],
                                    "input_var": [
                                        "Benefits of Whatsapp API",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Benefits of Whatsapp API",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Whatsapp API",
                        ""
                    ]
                },
                "23": {
                    "1": {
                        "page_var": [
                            "Reseller",
                            ""
                        ],
                        "Reseller": {
                            "0": {
                                "Reseller": {
                                    "0": [
                                        "Reseller",
                                        "NAVBAR 15",
                                        "0",
                                        "0",
                                        "navbar",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "About Whatsapp API",
                                                "Whatsapp",
                                                "Bulk Sms Pricing",
                                                "About Nenasasa",
                                                "Bulk Email Features",
                                                "Services",
                                                "Our Platform",
                                                "Pricing",
                                                "Our Partners",
                                                "Blog",
                                                "Contact Us",
                                                "NenaSasa Popup",
                                                "Terms And Conditions",
                                                "Privacy Policy",
                                                "Our Portal",
                                                "About Bulk Sms",
                                                "Bulk SMS Features"
                                            ],
                                            "logo": "src/themes/dsv1.0/img/isometic/logos/nenasasa_logo1.png",
                                            "group": [
                                                "SMS",
                                                "Email",
                                                "Whatsapp API",
                                                "Reseller"
                                            ],
                                            "groupTitle": "Products"
                                        }
                                    ],
                                    "1": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "10px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Reseller",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Reseller",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "About Reseller": {
                                    "0": [
                                        "Nenasasa Reseller Account",
                                        "HERO ELEMENT 3",
                                        "1",
                                        "100",
                                        "Nenasasa Reseller",
                                        "Purchase SMS floats and sell to your customers",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "path": "https://nenasasa.com/#/2/0",
                                            "bg_image": "https://images.unsplash.com/photo-1507537064587-464384459bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                                            "button_title": "Sign up"
                                        }
                                    ],
                                    "input_var": [
                                        "About Reseller",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "About Reseller",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "2": {
                        "page_var": [
                            "About Reselling",
                            ""
                        ],
                        "About Reselling": {
                            "0": {
                                "about": {
                                    "0": [
                                        "Nenasasa Reseller Account",
                                        "ABOUT SECTION",
                                        "1",
                                        "100",
                                        "about",
                                        "Purchase SMS floats and sell to your customers",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "text": "Earn a living by purchasing SMS floats in bulk and reselling them to your customers.Nenasasa bulk SMS reseller is a product that aims to help individuals create a source of income. SMS has diversified over time in terms of how businesses use it. There is a high demand for bulk SMS in the business sector. High demand brings about an opportunity to supply that is what we are providing with our product. Want to learn more about bulk SMS reselling and how you can get started. Download our free e-book below and learn everything you need to know to be a bulk SMS reseller.",
                                            "image": "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                                        }
                                    ],
                                    "input_var": [
                                        "about",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "about",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "3": {
                        "page_var": [
                            "E-Book",
                            ""
                        ],
                        "E-Book": {
                            "0": {
                                "E-Book": {
                                    "0": [
                                        "spacer",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "1": [
                                        "Download The Nenasasa E-Book",
                                        "SECTION TITLE",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "2": [
                                        "spacer 2",
                                        "SPACER ELEMENT",
                                        "1",
                                        "100",
                                        "",
                                        "40px",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "3": [
                                        "Check out the Nenasasa Ebook",
                                        "HERO ELEMENT 8",
                                        "1",
                                        "100",
                                        "Check out the nenasasa ebook",
                                        "Download the Nenasasa Ebook to learn more about Nenasasa services",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "image": "https://i.postimg.cc/K8Gm2Dy2/Whats-App-Image-2021-10-29-at-13-05-28.jpg"
                                        }
                                    ],
                                    "input_var": [
                                        "E-Book",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "E-Book",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Nenasasa E-Book": {
                                    "0": [
                                        "Name:",
                                        "TEXT INPUT",
                                        "3",
                                        "50",
                                        "name",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        true,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "1": [
                                        "Email:",
                                        "EMAIL INPUT",
                                        "5",
                                        "100",
                                        "email",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        true,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "2": [
                                        "Phone Number:",
                                        "MSISDN INPUT",
                                        "10",
                                        "10",
                                        "n",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        true,
                                        "",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "3": [
                                        "Recaptcha",
                                        "RECAPTCHA ELEMENT",
                                        "1",
                                        "100",
                                        "recaptcha",
                                        "6Lf0xOwaAAAAAI6IpaqQPWxw_O5beE6_aQx5xzzk",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "4": [
                                        "Download Ebook",
                                        "SUBMIT",
                                        "1",
                                        "100",
                                        "",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {}
                                    ],
                                    "input_var": [
                                        "Nenasasa E-Book",
                                        "LANDING FORM 2",
                                        "0",
                                        "0",
                                        "Nenasasa E-Book",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "text": "Fill in the form to download the Nenasasa Ebook. Check your email once you have submitted the form"
                                        }
                                    ]
                                }
                            },
                            "3": {
                                "footer": {
                                    "0": [
                                        "Nenasasa",
                                        "FOOTER ELEMENT",
                                        "1",
                                        "100",
                                        "Nenasasa",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "links": [
                                                {
                                                    "links": [
                                                        "Privacy Policy|https://nenasasa.com/#/4/0/",
                                                        "Terms & Conditions|https://nenasasa.com/#/3/0/"
                                                    ],
                                                    "title": "Company"
                                                },
                                                {
                                                    "links": [
                                                        "+254 786 637 657",
                                                        "+254 712 880 373",
                                                        "social@nenasasa.com"
                                                    ],
                                                    "title": "Contacts"
                                                },
                                                {
                                                    "links": [
                                                        "facebook|https://www.facebook.com/Nenasasa-112720603742419/",
                                                        "instagram|https://www.instagram.com/nenasasa_ke/",
                                                        "twitter|https://twitter.com/nenasasa_ke?s=09",
                                                        "linkedin|https://www.linkedin.com/showcase/nenasasa/",
                                                        "youtube|https://www.youtube.com/channel/UCW_AOWaXR4wACZpKVG4eHQA"
                                                    ],
                                                    "title": "Socials"
                                                }
                                            ],
                                            "address": "Westlands Commercial Center, Block C, Westlands, Nairobi Kenya",
                                            "location": "Westlands Office",
                                            "logo_path": "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png"
                                        }
                                    ],
                                    "input_var": [
                                        "footer",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "footer",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "Reseller",
                        ""
                    ]
                },
                "138": {
                    "1": {
                        "page_var": [
                            "Terms and Conditions",
                            ""
                        ],
                        "Terms and Conditions": {
                            "0": {
                                "Privacy Policy Nav": {
                                    "0": [
                                        "Navbar 2",
                                        "NAVBAR 2",
                                        "1",
                                        "100",
                                        "Navbar 2",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        "",
                                        "",
                                        {
                                            "hide": [
                                                "NenaSasa home",
                                                "SMS",
                                                "Email",
                                                "Whatsapp API",
                                                "Reseller"
                                            ]
                                        }
                                    ],
                                    "input_var": [
                                        "Privacy Policy Nav",
                                        "LANDING FORM",
                                        "0",
                                        "0",
                                        "Privacy Policy",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        "{}"
                                    ]
                                }
                            },
                            "1": {
                                "Terms and Conditons": {
                                    "2": [
                                        "Mark up Element",
                                        "MARKUP ELEMENT",
                                        "1",
                                        "10000",
                                        "terms and conditions- mipay",
                                        "<p><strong>1. Introduction </strong><br/>Welcome to Mipay Mobile. These Terms and Conditions govern your use of our mobile payments and payment integrations services. By accessing or using Mipay Mobile, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please refrain from using our services.<br/><br/></p><p><strong>2. Acceptance of Terms </strong><br/> By using Mipay Mobile, you agree to: <br/> Comply with all applicable laws and regulations<br/>Provide accurate and complete information <br/>Safeguard your account credentials and notify us immediately of any unauthorized access.<br/> <br/> </p><p><strong>3. Description of Services</strong> <br/> Mipay Mobile provides mobile payment and payment integration services. We reserve the right to modify or discontinue, temporarily or permanently, the services with or without notice. <br/><br/></p><p><strong>4. Privacy and Security: </strong><br/> Our Privacy Policy, incorporated by reference, outlines how we collect, use, and protect your personal information. By using Mipay Mobile, you consent to the practices described in our Privacy Policy. <br/><br/></p><p><strong>5. Payments and Transactions: </strong><br/>  When making payments or transactions through Mipay Mobile, you agree to provide accurate payment information and ensure sufficient funds are available, Mipay Mobile reserves the right to refuse or cancel transactions for any reason. <br/><br/></p><p><strong>6. Prohibited Activities: </strong><br/> You agree not to engage in any prohibited activities, including but not limited to: <br/> Violating any laws or regulations , Engaging in fraudulent or illegal activities, Interfering with the functionality of Mipay Mobile. <br/> <br/></p><p> <strong>7. User Responsibilities </strong><br/> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer <br/><br/></p><p><strong><p> <strong>8. Intellectual Property Rights </strong> <br/> All content included on this site, such as text, graphics, logos, images, is our property or its content suppliers and protected by international copyright laws. <br/><br/></p><p><strong><p><strong>9. Limitation of Liability  </strong><br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/><br/></p><p> <strong>9. Limitation of Liability  </strong> <br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/> <br/></p><p> <strong>10. Governing Law  </strong> <br/> This agreement shall be governed by and construed in accordance with the laws of the country in which Mipay Mobile is registered </p><br/><p> <strong>11.Changes to Terms  </strong><br/> Mipay Mobile has the discretion to update these terms at any time. When we do, we will post a notification on the main page of our site. <br/><br/></p><p> <strong>12. Contacting Us</strong><br/> If you have any questions about these Terms and Conditions, the practices of this site, or your dealings with this site, please contact us.<br/><br/></p>",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "<p><strong>6. Prohibited Activities: </strong><br/> You agree not to engage in any prohibited activities, including but not limited to: <br/> Violating any laws or regulations , Engaging in fraudulent or illegal activities, Interfering with the functionality of Mipay Mobile. <br/> <br/></p><p> <strong>7. User Responsibilities </strong><br/> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer <br/><br/></p><p><strong><p> <strong>8. Intellectual Property Rights </strong> <br/> All content included on this site, such as text, graphics, logos, images, is our property or its content suppliers and protected by international copyright laws. <br/><br/></p><p><strong><p><strong>9. Limitation of Liability  </strong><br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/><br/></p><p> <strong>9. Limitation of Liability  </strong> <br/> In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.<br/> <br/></p><p> <strong>10. Governing Law  </strong> <br/> This agreement shall be governed by and construed in accordance with the laws of the country in which Mipay Mobile is registered </p><br/><p> <strong>11.Changes to Terms  </strong><br/> Mipay Mobile has the discretion to update these terms at any time. When we do, we will post a notification on the main page of our site. <br/><br/></p><p> <strong>12. Contacting Us</strong><br/> If you have any questions about these Terms and Conditions, the practices of this site, or your dealings with this site, please contact us.<br/><br/></p>",
                                        "",
                                        "",
                                        "",
                                        "{}"
                                    ],
                                    "input_var": [
                                        "Terms and Conditons",
                                        "SESSION FORM",
                                        "0",
                                        "0",
                                        "Terms and Conditions",
                                        "",
                                        "",
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "",
                                        900,
                                        "",
                                        {
                                            "logo": "https://mipay.cash/media/administration_gateway_logo/mipay.png",
                                            "title": "Mipay Terms and Conditions",
                                            "bg_image": "https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80",
                                            "subtitle": "Our platform enables you to manage all your payment needs, shop, pay bills and transfer money all in one place. This is our Terms and Conditions",
                                            "logInSubtitle": "Terms and Conditions Disclaimer"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "section_var": [
                        "MIPAY TERMS AND CONDITIONS",
                        ""
                    ]
                }
            }
        }
    },
    "action_id": 1777,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}


const REQUEST_PAYLOAD = {
    "chid": 1,
    "gateway_host": "rngecu-mipay.staging.interintel.co",
    "ip_address": "102.212.236.183",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

window.REQUEST_PAYLOAD = REQUEST_PAYLOAD

window.APPTITLE = SERVICE_PAYLOAD.response.get_gateway_details.name
/**
 * Section Interface payload, this is used in combination with NO_NETWORKING
 * Check here to understand the structure
 * docs/payload/Payload.md
 * @type Object
 */
const SECTION_SERVICE_PAYLOAD = {
    "response": {
        "get_section": {
            "this_page_inputs": {
                "1": {
                    "section_var": [
                        "Home",
                        "home"
                    ],
                    "0": {
                        "page_var": [
                            "Notification Product Send",
                            null
                        ],
                        "Notification Product Send": {
                            "0": {
                                "Contact Group Send": {
                                    "input_var": [
                                        "Contact Group Send",
                                        "FORM",
                                        "0",
                                        "0",
                                        "NOTIFICATION PRODUCT SEND",
                                        "",
                                        null,
                                        "24|24|24",
                                        "",
                                        false,
                                        "",
                                        "CONTACT GROUP NOTIFICATION PREVIEW",
                                        900,
                                        null,
                                        "{}"
                                    ],
                                    "0": [
                                        "Scheduled Date",
                                        "DATE",
                                        "2",
                                        "45",
                                        "scheduled_date",
                                        null,
                                        "icon",
                                        "12|24|10",
                                        "DD/MM/YYYY",
                                        true,
                                        "",
                                        null,
                                        null,
                                        null,
                                        "{}"
                                    ],
                                    "2": [
                                        "Message",
                                        "TEXT AREA",
                                        "2",
                                        "480",
                                        "message",
                                        null,
                                        "communication:textsms",
                                        "24|24|22",
                                        null,
                                        true,
                                        "",
                                        null,
                                        null,
                                        null,
                                        "{}"
                                    ],
                                    "5": [
                                        "Preview",
                                        "SUBMIT",
                                        "1",
                                        "100",
                                        "submit",
                                        null,
                                        "add-circle-outline",
                                        "24|24|22",
                                        null,
                                        false,
                                        "",
                                        null,
                                        null,
                                        null,
                                        "{}"
                                    ],
                                    "1": [
                                        "Scheduled Time",
                                        "TIME",
                                        "2",
                                        "45",
                                        "scheduled_time",
                                        null,
                                        "icon",
                                        "12|24|10",
                                        null,
                                        true,
                                        "",
                                        null,
                                        null,
                                        null,
                                        "{}"
                                    ],
                                    "3": [
                                        "Contact Group(s)",
                                        "TAG INPUT",
                                        "1",
                                        "45",
                                        "contact_group_id",
                                        "recipient_contact_group=SMS",
                                        null,
                                        "24|24|24",
                                        null,
                                        true,
                                        "",
                                        "DATA SOURCE",
                                        null,
                                        null,
                                        "{}"
                                    ],
                                    "4": [
                                        "Sender ID",
                                        "DROPDOWN SELECT",
                                        "1",
                                        "45",
                                        "alias",
                                        "alias_notification_products=SMS",
                                        "send",
                                        "24|24|22",
                                        null,
                                        true,
                                        "",
                                        "DATA SOURCE",
                                        null,
                                        null,
                                        "{}"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "action_id": 528,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}

window.SECTION_SERVICE_PAYLOAD = SECTION_SERVICE_PAYLOAD
/*
TO SHOW NEW DIALOG FOR A RESPONSE THAT DOESN'T HAVE A GET_SECTION PAYLOAD FOLLOW THE FOLLOWING STEPS
1. GO TO THE INDEX FILE AND IN LINE 179 COPY THIS LINE -     window.TEST_PAYLOAD = NO_GET_SECTION;
2. Load a service button and reun npm start
3. Click on the service button and a dialog wil show either green or red based on the response and overal status
4. To make style update to the dialog go to src\themes\dsv1.0\components\templates\section-page.js
5. CHANGE RESPONSE STATUS AND OVERALL_STATUS TO '00' FOR A SUCCESS (GREEN) RESPONSE
 AND'96' FOR A FAILED RESPONSE (RED)
 6. The last response displays the message on the dialog.
 7. Once edits are made revert the index file.
*/
const DATASOURCE_PAYLOAD = {
    "response": {
        "subdomain_details": "Subdomain not in request.",
        "get_profile": "Session Profile Captured",
        "data_source": {
            "cols": [
                {
                    "label": "id",
                    "type": "string",
                    "value": "id"
                },
                {
                    "label": "outbound_id",
                    "type": "string",
                    "value": "ext_outbound_id",
                    "search_filters": true
                },
                {
                    "label": "type",
                    "type": "string",
                    "value": "float_type__name",
                    "list_filters": [
                        "Airtel Airtime",
                        "BANK",
                        "Bulk SMS (Airtel Kenya)",
                        "Bulk SMS (Safaricom Kenya)",
                        "Bulk SMS (Telkom Kenya)",
                        "CRB",
                        "EMAIL",
                        "IPRS",
                        "KPLC",
                        "M-PESA",
                        "M-PESA B2B",
                        "M-PESA B2B Buy Goods",
                        "MIPAY",
                        "Safaricom Airtime",
                        "Telkom Airtime",
                        "Vendor Airtime",
                        "WhatsApp"
                    ]
                },
                {
                    "label": "Credit",
                    "type": "boolean",
                    "value": "credit",
                    "list_filters": [
                        false,
                        true
                    ]
                },
                {
                    "label": "amount",
                    "type": "number",
                    "value": "float_amount"
                },
                {
                    "label": "charge",
                    "type": "number",
                    "value": "charge"
                },
                {
                    "label": "balance",
                    "type": "number",
                    "value": "balance_bf"
                },
                {
                    "label": "created",
                    "type": "datetime",
                    "value": "rdatetime_date_created",
                    "date_filters": [
                        "2016-02-20",
                        "2024-11-30"
                    ]
                }
            ],
            "rows": [
                [
                    89420085,
                    "98058603",
                    "Airtel Airtime",
                    false,
                    "30.00",
                    "0.00",
                    "8824890.00",
                    "2024-11-30 00:09:48.812186+00"
                ],
                [
                    89420084,
                    "98058602",
                    "Airtel Airtime",
                    false,
                    "20.00",
                    "0.00",
                    "4197385.00",
                    "2024-11-30 00:09:45.6808+00"
                ],
                [
                    89420083,
                    "98058599",
                    "Airtel Airtime",
                    false,
                    "20.00",
                    "0.00",
                    "174327.45",
                    "2024-11-30 00:08:59.262675+00"
                ],
                [
                    89420082,
                    "98058597",
                    "Airtel Airtime",
                    false,
                    "10.00",
                    "0.00",
                    "3536457.00",
                    "2024-11-30 00:08:49.130816+00"
                ],
                [
                    89420075,
                    null,
                    "Bulk SMS (Safaricom Kenya)",
                    false,
                    "2.00",
                    "0.00",
                    "9761.00",
                    "2024-11-30 00:05:52.396612+00"
                ],
                [
                    89420072,
                    "98058579",
                    "Airtel Airtime",
                    false,
                    "20.00",
                    "0.00",
                    "3702424.00",
                    "2024-11-30 00:04:32.103782+00"
                ],
                [
                    89420059,
                    null,
                    "Bulk SMS (Safaricom Kenya)",
                    false,
                    "3.00",
                    "0.00",
                    "97744.00",
                    "2024-11-30 00:01:33.316981+00"
                ],
                [
                    89420021,
                    "98058493",
                    "Airtel Airtime",
                    false,
                    "60.00",
                    "0.00",
                    "524992.00",
                    "2024-11-29 23:51:44.260887+00"
                ],
                [
                    89419972,
                    "98058398",
                    "Telkom Airtime",
                    false,
                    "100.00",
                    "0.00",
                    "110311.00",
                    "2024-11-29 23:36:31.736452+00"
                ],
                [
                    89419906,
                    "98058280",
                    "Safaricom Airtime",
                    false,
                    "50.00",
                    "0.00",
                    "62330.50",
                    "2024-11-29 23:20:33.053144+00"
                ]
            ],
            "lines": [],
            "groups": [],
            "data": [],
            "min_id": 0,
            "max_id": 0,
            "row_count": 17498
        }
    },
    "action_id": 53,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}