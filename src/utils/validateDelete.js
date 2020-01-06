export default function validateAuth(value, reference) {
    let errors = {};
    // Email Errors
    if (value !== `DELETE ${reference}`) {
        errors.confirmDeletion = "Please type the message exactly as its written";
    }
    return errors;
}