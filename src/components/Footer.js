const Footer = () => {

    return (
        <footer className="footer">
            <div className="download-container">
                <a className="downloader" href={require('../assets/icons/ENKO_catalogue_EN_2018.pdf')}>
                    <button className="download-button">Download Catalog</button>
                </a>
            </div>
            <h3>Find ENKO at:</h3>
            <div className="footer-container">
                <a className="s-icon g-plus" href="http://www.google.com/+EnkoPlasticsLtd" target="_blank">
                    <img src={require('../assets/icons/img.png')} alt="logo"/>
                </a>
                <a className="s-icon fb" href="http://www.facebook.com/EnkoPlasticsLtd" target="_blank">
                    <img src={require('../assets/icons/img_1.png')} alt="logo"/>
                </a>
                <a className="s-icon lin" href="https://www.linkedin.com/company/enkoplasticsltd" target="_blank">
                    <img src={require('../assets/icons/img_2.png')} alt="logo"/>
                </a>
                <a className="s-icon g-map"
                   href="https://www.google.com/maps?ll=42.106656,24.752404&amp;z=14&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;cid=2962566397006102978"
                   target="_blank">
                    <img src={require('../assets/icons/img_3.png')} alt="logo"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;