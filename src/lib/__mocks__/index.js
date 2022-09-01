
export const signIn = jest.fn( () => Promise.resolve({
    user : {
        emailVerified: true,
    },
}));

export const createUser = () => Promise.resolve({
});

export const sendEmail = () => Promise.resolve({
});

export const signInPopup = () => Promise.resolve({
});

export const saveTask = () => Promise.resolve({
});
