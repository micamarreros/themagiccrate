const products = [
    {
        id: 1,
        img: "./shop/julia-quinn/01.jpg",
        name: "The Duke and I",
        author: "Julia Quinn",
        price: "9.09"
    },

    {
        id: 2,
        img: "./shop/julia-quinn/02.jpg",
        name: "The Viscount Who Loved Me",
        author: "Julia Quinn",
        price: "8.89"
    },

    {
        id: 3,
        img: "./shop/julia-quinn/03.jpg",
        name: "An Offer From a Gentleman",
        author: "Julia Quinn",
        price: "10.65"
    },

    {
        id: 4,
        img: "./shop/julia-quinn/04.jpg",
        name: "Romancing Mister Bridgerton",
        author: "Julia Quinn",
        price: "8.99"
    },

    {
        id: 5,
        img: "./shop/julia-quinn/05.jpg",
        name: "To Sir Phillip, With Love",
        author: "Julia Quinn",
        price: "8.83"
    },

    {
        id: 6,
        img: "./shop/julia-quinn/06.jpg",
        name: "When He Was Wicked",
        author: "Julia Quinn",
        price: "10.16"
    },

    {
        id: 7,
        img: "./shop/julia-quinn/07.jpg",
        name: "It's in His Kiss",
        author: "Julia Quinn",
        price: "11.11"
    },

    {
        id: 8,
        img: "./shop/julia-quinn/08.jpg",
        name: "On the Way to the Wedding",
        author: "Julia Quinn",
        price: "8.99"
    },

    {
        id: 9,
        img: "./shop/julia-quinn/09.jpg",
        name: "The Bridgertons: Happily Ever After",
        author: "Julia Quinn",
        price: "11.28"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}