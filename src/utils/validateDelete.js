export default function validateAuth(value, reference) {
    let errors = {};
    // Email Errors
    if (value.deleteValidation !== `${reference}`) {
        errors.confirmDeletion = `To delete this character type this characters name exactly as it appears above.`;
    }
    return errors;
}