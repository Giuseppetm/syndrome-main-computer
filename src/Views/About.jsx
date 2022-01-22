import Button from '../Components/Button';

const About = () => {
    return (
        <section id="about">
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-10">
                        <h1>SYNDROME MAIN COMPUTER</h1>

                        <h5 className="text-spaced">CREATED BY <span className="secondary-color">GIUSEPPE DEL CAMPO</span></h5>
                    </div>
                    <div className="col-2 secondary-color">
                        <span className="version">v.</span>
                        <span className="version-number">01</span>
                    </div>
                </div>

                <Button Title="Proceed to Authentication" To="/Authentication" />
            </div>
        </section>
    )
};

export default About;