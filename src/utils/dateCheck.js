
export const checkForMovingDate = () => {
    const dateNow = new Date();

    const movingDate = new Date('Sepetember 15, 2021 23:59:00');

    return dateNow > movingDate;
}