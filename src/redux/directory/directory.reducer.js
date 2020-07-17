const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl: 'shop/hats',
            id: 1
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl: 'shop/jackets',
            id: 2
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl: 'shop/sneakers',
            id: 3
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl: 'shop/womens',
            id: 4
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl: 'shop/mens',
            id: 5
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;