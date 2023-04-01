
export const fullNameReversed = (firstName: string, lastName: string): string => {
    const fullName = `${firstName} ${lastName}`;
    let reversed = "";
    for (let i = fullName.length - 1; i >= 0; i--) {
        reversed += fullName[i];
    }
    return reversed;
};

// write a function that takes a date and returns the years since that date
export const yearsSince = (date: Date): number => {
    const now = new Date();
    return now.getFullYear() - date.getFullYear();
};

