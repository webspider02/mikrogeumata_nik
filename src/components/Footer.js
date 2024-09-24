export default function Footer() {
    let date = new Date().getFullYear(); // live year change for copyrights

    return (
        <div className="footer">
            <div className="footer-flex-box">
                <div className="google-map">
                    <h3>Που θα μας βρείτε</h3>     
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.67806846624!2d21.930222581351693!3d39.36352638212693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1358d9a0b2dfe4dd%3A0x6a08e64a7cdfb57b!2zTc65zrrPgc6_zrPOtc-NzrzOsc-EzrEgzp3Ouc66!5e0!3m2!1sen!2sgr!4v1727110515598!5m2!1sen!2sgr" width="360" height="180" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="footer-flexbox2">
                    <div className="contact-info">
                        <h3>Επικοινωνία</h3>
                        <p>Τηλ. 210 123 4567</p>
                        <p>Email: 5Gc8T@example.com</p>
                        <p>Διευθυνση: Νεα Ελλάδα</p>
                    </div>

                    <div className="social-media">
                        <h3>Facebook</h3>
                        <button>Facebook</button>
                    </div> 
                </div>

            </div>


            <p>Copyright &copy; {date} Μικρογεύματα Nik</p>
        </div>
    )
}