const capitalize = (str) => {
    return (
        str.charAt(0).toUpperCase() + str.substr(1, str.length - 1).toLowerCase()
    );
};

export default capitalize;