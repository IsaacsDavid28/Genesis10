function validate_form ( )
{
    valid = true;

    if ( document.contact_form.contact_name.value == "" )
    {
        alert ( "Please fill in all required fields." );
        valid = false;
    }

    return valid;
}