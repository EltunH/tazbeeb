// Main Swiper
var swiper = new Swiper(".mainSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    slidesOffsetAfter: 200,
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 16,
            slidesOffsetAfter: 350,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 24,
            slidesOffsetAfter: 400,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 24,
            slidesOffsetAfter: 750,
        },
    }
});

// Popular Categories Swiper
var swiper = new Swiper(".popularCategorySwiper", {
    navigation: {
        nextEl: ".swiper-button-next-popular-category",
        prevEl: ".swiper-button-prev-popular-category",
    },
    slidesPerView: 2,
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 24,
        }
    }
});

// Best Deals Swiper
var swiper = new Swiper(".bestDealsSwiper", {
    navigation: {
        nextEl: ".swiper-button-next-deals",
        prevEl: ".swiper-button-prev-deals",
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

// Cream swiper
var swiper = new Swiper(".creamSwiper", {
    pagination: {
        el: ".cream-swiper-pagination",
        clickable: true,
    },
    slidesPerView: '1',
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    }
});

// Coupon swiper
var swiper = new Swiper(".couponSwiper", {
    pagination: {
        el: ".coupon-swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    }
});

function copyCuponCode(element) {
    const code = element.querySelector("strong").innerText;
    const copiedText = element.querySelector("span");

    navigator.clipboard.writeText(code)
        .then(() => {
            copiedText.classList.remove("opacity-0");
            copiedText.classList.add("opacity-100");

            setTimeout(() => {
                copiedText.classList.add("opacity-0");
                copiedText.classList.remove("opacity-100");
            }, 1000);
        })
        .catch(err => console.error(err));
}

// Month Sale Swiper
var swiper = new Swiper(".monthSaleSwiper", {
    navigation: {
        nextEl: ".swiper-button-next-month",
        prevEl: ".swiper-button-prev-month",
    },
    pagination: {
        el: ".month-swiper-pagination",
        clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
        580: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 24,
        }
    }
});

// New Arrivals Swiper
var swiper = new Swiper(".newArrivalsSwiper", {
    navigation: {
        nextEl: ".swiper-button-next-arrivals",
        prevEl: ".swiper-button-prev-arrivals",
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

// Weekend Deal Swiper
var swiper = new Swiper(".weekendDealSwiper", {
    navigation: {
        nextEl: ".swiper-button-next-weekend",
        prevEl: ".swiper-button-prev-weekend",
    },
    pagination: {
        el: ".weekend-swiper-pagination",
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

// Popular Brands Swiper
var swiper = new Swiper(".popularBrandSwiper", {
    navigation: {
        nextEl: ".swiper-button-next-popular-brand",
        prevEl: ".swiper-button-prev-popular-brand",
    },
    slidesPerView: 'auto',
    spaceBetween: 0,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 7,
        }
    }
});

// Brand main swiper
var swiper = new Swiper(".brandMainSwiper", {
    pagination: {
        el: ".brand-main-swiper-pagination",
        clickable: true,
    },
    slidesPerView: '1',
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    }
});

// Brand new ones swiper
var swiper = new Swiper(".brandNeWOnesSwiper", {
    slidesPerView: '2',
    spaceBetween: 16,
    watchOverflow: false,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    }
});