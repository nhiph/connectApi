var initialState = [
    {
        id: 1,
        name: 'Iphone 6 plus',
        price: 500,
        status: true
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        price: 400,
        status: false
    },
    {
        id: 3,
        name: 'Oppo F1S',
        price: 300,
        status: true
    }
];

const products = (state=initialState, action) => {
    switch (action.type) {
       
        
    
        default:
            return [...state];
    }
}

export default products;