
const initialState = {
    posts: [
        {
            id: '1',
            title: 'Swimming training guide',
            image: 'swim',
            shortDescription: 'This guide will let you swim like a baby dolphin!',
            content: 'Main content of the article',
            publishedDate: new Date('01-01-2022'),
            author: 'Diana Dive'
        },
        {
            id: '2',
            title: 'Cycling traning guide',
            image: 'cycling',
            shortDescription: 'Speed up your cycling ride with this comprehensive guide',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'Wendy Wheel'
        },
        {
            id: '3',
            title: 'Running training guide',
            image: 'running',
            shortDescription: 'Finish strong... and safe! See a training plan that takes care of your joints as well as your speed!',
            content: 'Main content of the article',
            publishedDate: new Date('03-03-2022'),
            author: 'Sally Sprint'
        },
        {
            id: '4',
            title: 'Strength training guide',
            image: 'strength',
            shortDescription: 'Every movement starts from your core. Build strength for better results and balance',
            content: 'Main content of the article',
            publishedDate: new Date('04-04-2022'),
            author: 'Samantha Strong'
        }

    ]
}


export default initialState;