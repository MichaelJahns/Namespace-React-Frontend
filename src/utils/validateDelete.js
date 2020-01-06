export default function validateAuth(value, reference) {
    let errors = {};
    // Email Errors
    if (value !== `${reference}`) {
        errors.confirmDeletion = `Type "${reference}" exactly.`;
    } else {
        errors.confirmDeletion = false;
    }
    return errors;
}