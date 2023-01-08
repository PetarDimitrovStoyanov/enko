const Contacts = () => {
    return (
        <section className="body">
            <div className="construction-container">
                <h1>Sorry, we are under construction</h1>
                <img className="construction" src={require('../assets/icons/pngwing.com (2).png')} alt="construction"/>
            </div>

            <div className="contact-headers">GLOBAL SALES AND MARKETING</div>
            <div className="contacts">
                <h3 className="contact-title">SALES BULGARIA</h3>
                <h4 className="contact-person">Ivelina Dimitrova</h4>
                <h4 className="contact-person">
                    Mobile:&nbsp;&nbsp;&nbsp;&nbsp; +359 888 766 138
                    <br/>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="email" href="mailto:sales@enkoplastics.com">sales@enkoplastics.com</a>
                </h4>
            </div>
            <div className="contacts">
                <h3 className="contact-title">global sales</h3>
                <h4 className="contact-person">Maria Dinkova</h4>
                <h4 className="contact-person">E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="email" href="mailto:sales@enkoplastics.com">sales@enkoplastics.com</a>
                </h4>
            </div>
            <div className="contacts">
                <h3 className="contact-title">SALES GREECE</h3>
                <h4 className="contact-person">Panagiotis Xourafas - Country Sales Manager</h4>
                <h4 className="contact-person">
                    Mobile:&nbsp;&nbsp;&nbsp;&nbsp; +30 6977354587
                    <br/>Office:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +30 2310326364
                    <br/>Fax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +30 2310326359
                    <br/>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="email"
                       href="mailto:sales-greece@enkoplastics.com">sales-greece@enkoplastics.com</a>
                </h4>
            </div>
            <div className="contacts">
                <h3 className="contact-title">SALES ROMANIA</h3>
                <h4 className="contact-person">Silviu Mohanu - Country Sales Manager</h4>
                <h4 className="contact-person">Mobile:&nbsp;&nbsp;&nbsp;&nbsp; +40 744587541
                    <br/>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="email"
                       href="mailto:sales-romania@enkoplastics.com">sales-romania@enkoplastics.com</a>
                </h4>
            </div>

            <div className="contact-headers">MANUFACTURING FACILITY</div>
            <h3 className="address">Address: 57 nestor Abadjiev str.,&nbsp;Plovdiv 4023, Bulgaria
                <br/>GPS Coordinates: Lat. 42.1161; Long. 24.7834
            </h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11838.510425001356!2d24.7814917!3d42.1154457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd156899fe1e45066!2z0JXQndCa0J4g0J_Qm9CQ0KHQotCY0JrQoSDQldCe0J7QlCAvIEVOS08gUExBU1RJQ1MgTFRE!5e0!3m2!1sbg!2sbg!4v1673203867541!5m2!1sbg!2sbg"
                width="100%" height="600" style={{border: 0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="contact-headers">CENTRAL OFFICE, ADMINISTRATION</div>
            <h3 className="address">ADDRESS: 31 G.M. DIMITROV STR., PLOVDIV,&nbsp;4002, BULGARIA</h3>
            <div className="contacts">
                <h3 className="contact-title">ADMINISTRATION</h3>
                <h4 className="contact-person">
                    <br/>Office:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +359 32 62 08 79
                    <br/>Fax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +359 32 62 08 68
                    <br/>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="email" href="mailto:office@enko-plastics.com">office@enko-plastics.com</a>
                </h4>
            </div>
            <div className="contacts">
                <h3 className="contact-title">FINANCE AND ACCOUNTING</h3>
                <h4 className="contact-person">
                    <br/>Office:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +359 32 62 70 02
                    <br/>Fax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +359 32 62 08 68
                    <br/>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="email" href="mailto:office@enko-plastics.com">office@enko-plastics.com</a>
                </h4>
            </div>

        </section>
    )
}

export default Contacts;