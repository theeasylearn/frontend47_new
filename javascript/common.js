//reusable function
function $(tagId) {
    return document.getElementById(tagId);
}
function val(tagId, temp = null) {
    if (temp === null)
        return $(tagId).value;
    else
        $(tagId).value = temp;
}