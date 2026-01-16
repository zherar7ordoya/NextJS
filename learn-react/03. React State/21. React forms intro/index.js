document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    submitViaAPI({
        firstName,
        lastName
    })
})

function submitViaAPI(data) {
    console.log(data)
    console.log("Submitted!")
}