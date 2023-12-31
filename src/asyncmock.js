const products = [
    {
        id: "1",
        img: "../shop/julia-quinn/01.jpg",
        name: "The Duke and I",
        stock: 20,
        author: "Julia Quinn",
        price: "9.09",
        idCat: "1"
    },

    {
        id: "2",
        img: "../shop/julia-quinn/02.jpg",
        name: "The Viscount Who Loved Me",
        stock: 20,
        author: "Julia Quinn",
        price: "8.89",
        idCat: "1"
    },

    {
        id: "3",
        img: "../shop/julia-quinn/03.jpg",
        name: "An Offer From a Gentleman",
        stock: 20,
        author: "Julia Quinn",
        price: "10.65",
        idCat: "1"
    },

    {
        id: "4",
        img: "../shop/julia-quinn/04.jpg",
        name: "Romancing Mister Bridgerton",
        stock: 20,
        author: "Julia Quinn",
        price: "8.99",
        idCat: "1"
    },

    {
        id: "5",
        img: "../shop/julia-quinn/05.jpg",
        name: "To Sir Phillip, With Love",
        stock: 20,
        author: "Julia Quinn",
        price: "8.83",
        idCat: "1"
    },

    {
        id: "6",
        img: "../shop/julia-quinn/06.jpg",
        name: "When He Was Wicked",
        stock: 20,
        author: "Julia Quinn",
        price: "10.16",
        idCat: "1"
    },

    {
        id: "7",
        img: "../shop/julia-quinn/07.jpg",
        name: "It's in His Kiss",
        stock: 20,
        author: "Julia Quinn",
        price: "11.11",
        idCat: "1"
    },

    {
        id: "8",
        img: "../shop/julia-quinn/08.jpg",
        name: "On the Way to the Wedding",
        stock: 20,
        author: "Julia Quinn",
        price: "8.99",
        idCat: "1"
    },

    {
        id: "9",
        img: "../shop/julia-quinn/09.jpg",
        name: "The Bridgertons: Happily Ever After",
        stock: 20,
        author: "Julia Quinn",
        price: "11.28",
        idCat: "1"
    },

    {
        id: "10",
        img: "../shop/veronica-roth/01.jpg",
        name: "Divergent",
        stock: 20,
        author: "Veronica Roth",
        price: "10.96",
        idCat: "2"
    },

    {
        id: "11",
        img: "../shop/veronica-roth/02.jpg",
        name: "Insurgent",
        stock: 20,
        author: "Veronica Roth",
        price: "9.99",
        idCat: "2"
    },

    {
        id: "12",
        img: "../shop/veronica-roth/03.jpg",
        name: "Allegiant",
        stock: 20,
        author: "Veronica Roth",
        price: "13.61",
        idCat: "2"
    },

    {
        id: "13",
        img: "../shop/veronica-roth/04.jpg",
        name: "Four",
        stock: 20,
        author: "Veronica Roth",
        price: "9.57",
        idCat: "2"
    },

    {
        id: "14",
        img: "../shop/erin-sterling/01.jpg",
        name: "The Ex Hex",
        stock: 20,
        author: "Erin Sterling",
        price: "12.79",
        idCat: "3"
    },

    {
        id: "15",
        img: "../shop/erin-sterling/02.jpg",
        name: "The Kiss Curse",
        stock: 20,
        author: "Erin Sterling",
        price: "13.29",
        idCat: "3"
    },

    {
        id: "16",
        img: "../shop/jessica-fellowes/01.jpg",
        name: "The Mitford Murders",
        stock: 20,
        author: "Jessica Fellowes",
        price: "9.99",
        idCat: "4"
    },

    {
        id: "17",
        img: "../shop/jessica-fellowes/02.jpg",
        name: "Bright Young Dead",
        stock: 20,
        author: "Jessica Fellowes",
        price: "13.79",
        idCat: "4"
    },

    {
        id: "18",
        img: "../shop/jessica-fellowes/03.jpg",
        name: "The Mitford Scandal",
        stock: 20,
        author: "Jessica Fellowes",
        price: "15.83",
        idCat: "4"
    },

    {
        id: "19",
        img: "../shop/jessica-fellowes/04.jpg",
        name: "The Mitford Trial",
        stock: 20,
        author: "Jessica Fellowes",
        price: "8.79",
        idCat: "4"
    },

    {
        id: "20",
        img: "../shop/jessica-fellowes/05.jpg",
        name: "A Mitford Vanishing",
        stock: 20,
        author: "Jessica Fellowes",
        price: "17.99",
        idCat: "4"
    },

    {
        id: "21",
        img: "../shop/jessica-fellowes/06.jpg",
        name: "The Mitford Secret",
        stock: 20,
        author: "Jessica Fellowes",
        price: "19.00",
        idCat: "4"
    },

    {
        id: "22",
        img: "../shop/sarah-pearse/01.jpg",
        name: "The Sanatorium",
        stock: 20,
        author: "Sarah Pearse",
        price: "9.99",
        idCat: "5"
    },

    {
        id: "23",
        img: "../shop/sarah-pearse/02.jpg",
        name: "The Retreat",
        stock: 20,
        author: "Sarah Pearse",
        price: "13.60",
        idCat: "5"
    },

    {
        id: "24",
        img: "../shop/casey-mcquiston/01.jpg",
        name: "One Last Stop",
        stock: 20,
        author: "Casey McQuiston",
        price: "11.83",
        idCat: "1"
    },

    {
        id: "25",
        img: "../shop/casey-mcquiston/02.jpg",
        name: "Red, White & Royal Blue",
        stock: 20,
        author: "Casey McQuiston",
        price: "7.86",
        idCat: "1"
    },

    {
        id: "26",
        img: "../shop/alisha-rai/01.jpg",
        name: "Partners in Crime",
        stock: 20,
        author: "Alisha Rai",
        price: "11.69",
        idCat: "1"
    },

    {
        id: "27",
        img: "../shop/claudia-gray/02.jpg",
        name: "The Late Mrs. Willoughby",
        stock: 20,
        author: "Claudia Gray",
        price: "14.39",
        idCat: "4"
    },

    {
        id: "28",
        img: "../shop/claudia-gray/01.jpg",
        name: "The Murder of Mr. Wickham",
        stock: 20,
        author: "Claudia Gray",
        price: "14.59",
        idCat: "4"
    },

    {
        id: "29",
        img: "../shop/k-j-charles/01.jpg",
        name: "The Secret Lives of Country Gentelmen",
        stock: 20,
        author: "K. J. Charles",
        price: "10.35",
        idCat: "1"
    },

    {
        id: "30",
        img: "../shop/k-j-charles/02.jpg",
        name: "A Nobleman's Guide to Seducing a Scoundrel",
        stock: 20,
        author: "K. J. Charles",
        price: "16.97",
        idCat: "1"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
}

export const getOneProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(item => item.id === id);
            resolve(product);
        }, 500)
    })
}

export const getProductsByCategory = (idCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            const productsCategory = products.filter(item => item.idCat === idCategory);
            resolve(productsCategory);
        }, 500)
    })
}