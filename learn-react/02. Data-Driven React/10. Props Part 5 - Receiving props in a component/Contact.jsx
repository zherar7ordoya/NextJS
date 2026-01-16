/**
 * Challenge: Fix the code below to use the `props`
 * object values in place of the hardcoded values below
 * 
 * Note: There will be a small bug in the code, so do your
 * best to squash it! 🐛
 */

export default function Contact(props) {
    console.log(props)
    return (
        <article className="contact-card">
            <img
                src="./images/mr-whiskerson.png"
                alt="Photo of Mr. Whiskerson"
            />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </article>
    )
}
