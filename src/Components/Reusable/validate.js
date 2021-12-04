const validation = (...args) => {
    if (args.some((val) => (val == '' || val == null))) {
        return false
    }
    return true;
}
export default validation;