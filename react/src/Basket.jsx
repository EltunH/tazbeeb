import React, { useState, useEffect } from "react";

export default function Basket() {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem("basketArr");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        window.addToBasketHandler = (product) => {
            setItems((prev) => {
                const exists = prev.some((i) => i.id === product.id);
                const newItems = exists ? prev : [...prev, product];

                if (newItems.length === 0) {
                    localStorage.removeItem("basketArr");
                } else {
                    localStorage.setItem("basketArr", JSON.stringify(newItems));
                }

                return newItems;
            });
        };

        window.removeFromBasketHandler = (id) => {
            setItems((prev) => {
                const newItems = prev.filter((item) => item.id !== id);

                if (newItems.length === 0) {
                    localStorage.removeItem("basketArr");
                } else {
                    localStorage.setItem("basketArr", JSON.stringify(newItems));
                }

                return newItems;
            });
        };

        return () => {
            delete window.addToBasketHandler;
            delete window.removeFromBasketHandler;
        };
    }, []);

    return null;
}
