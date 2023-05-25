import PageTitle from "components/PageTitle";
import { routeMain } from "./routes";

const AboutPage = () => {
    return (
        <section className="about">
            <div className="container">
                <PageTitle
                    class='about__title'
                    title='Обо мне'
                />
                <div className="about__content">
                    <h2>ЧТО-ТО</h2>
                </div>
            </div>
        </section>
    )
}

export { routeMain }

export default AboutPage