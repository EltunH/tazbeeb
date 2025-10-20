import React, { useState, useEffect } from "react";

export default function Wishlist() {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem("wishlistArr");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        window.addToWishlistHandler = (product) => {
            setItems((prev) => {
                const exists = prev.some((item) => item.id === product.id);

                const newItems = exists ? prev.filter((item) => item.id !== product.id) : [...prev, product];

                if (newItems.length === 0) {
                    localStorage.removeItem("wishlistArr");
                } else {
                    localStorage.setItem("wishlistArr", JSON.stringify(newItems));
                }

                return newItems;
            });
        };

        return () => {
            delete window.addToWishlistHandler;
        };
    }, []);

    return null;
}