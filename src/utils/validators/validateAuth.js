export default function validateAuth(values) {
    let errors = {};
    // Email Errors
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    // Username Errors
    if (!values.username) {
        errors.username = "Required"
    } else if (values.username.length > 30) {
        errors.username = `Maximum of ${values.username.length}/30 characters`
    }
    // Password Errors
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 6) {
        errors.password = "Must be at least 6 characters";
    }
    // ConfirmPassword Errors
    if (!values.confirmPassword) {
        errors.cpassword = "Required";
    } else if (values.confirmPassword.length < 6) {
        errors.cpassword = "Must be at least 6 characters";
    }
    // Matching Errors
    if (values.password !== values.confirmPassword) {
        errors.matchingPassword = "Passwords must match"
    }

    return errors;
}