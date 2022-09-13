let rerender = () => {
    console.log("State changed");
}

let state = {
    dialoguesPage: {
        dialoguesData: [
            {id: 1, name: "Brad", ava: "https://veggiepeople.org/sites/default/files/styles/photo_card_large/public/people-photos/208-bred_pitt.jpg"},
            {id: 2, name: "Benedict", ava: "https://www.pinkvilla.com/files/styles/contentpreview/public/benedict_cumberbatchs_doctor_strange_inspired_by_these_celebs.jpg?itok=9kHSlFrw"},
            {id: 3, name: "Will", ava: "https://www.essence.com/wp-content/uploads/2011/09/images/2011/09/972673-will_smith.jpg"},
            {id: 4, name: "Lenny", ava: "https://static.wirtualnemedia.pl/media/top/lennykravitz655.jpg"},
            {id: 5, name: "Brian", ava: "https://www.themoviedb.org/t/p/w235_and_h235_face/2hIQwNiza263WYscP87LocfCaAq.jpg"},
            {id: 6, name: "Jonny", ava: "https://www.glamour.pl/media/cache/default_list/uploads/media/default/0006/46/johnny-depp.jpeg"}

        ],
        messagesData: [
            {id: 2, message: "I love fantasy!", ava: "https://veggiepeople.org/sites/default/files/styles/photo_card_large/public/people-photos/208-bred_pitt.jpg"},
            {id: 1, message: "Thank you...", ava:"https://static.wirtualnemedia.pl/media/top/lennykravitz655.jpg" },
            {id: 3, message: "Which one? Because I donno...", ava: "https://veggiepeople.org/sites/default/files/styles/photo_card_large/public/people-photos/208-bred_pitt.jpg"},
            {id: 4, message: "This Friday at Multikino", ava:"https://static.wirtualnemedia.pl/media/top/lennykravitz655.jpg"}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: "Hi, Mimi! How are  you?", likesCount: 12},
            {id: 2, message: "Last Sunday it was really cool)", likesCount: 7}
        ],
        newPostText: "IT-Kamasutra"
    },

    sideBar: {
        friendsData: [
            {id: 1, name: "Brad", ava: "https://veggiepeople.org/sites/default/files/styles/photo_card_large/public/people-photos/208-bred_pitt.jpg"},
            {id: 2, name: "Benedict", ava: "https://www.pinkvilla.com/files/styles/contentpreview/public/benedict_cumberbatchs_doctor_strange_inspired_by_these_celebs.jpg?itok=9kHSlFrw"}
        ]
    }
}
// Pattern OBSERVER is used here below
export const subscribe=(observer) => {
     rerender = observer; // rerender f-n is initialized above and it gets its any functionality from the observer
}

export let updateNewPostText = (newText) => { 
    state.profilePage.newPostText = newText;
    rerender(state);
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerender(state);
}

export const addMessage = (sentMessage) => { 
    let newMessage = {
        id: 5,
        message: sentMessage,
        ava: "https://static.wirtualnemedia.pl/media/top/lennykravitz655.jpg"
    };
    state.dialoguesPage.messagesData.push(newMessage);
    rerender(state);
}

export default state;

