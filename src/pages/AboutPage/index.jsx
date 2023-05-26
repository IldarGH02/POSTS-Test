import PageTitle from "components/PageTitle";
import { routeMain } from "./routes";

import avatar from '../../assets/images/myAvatar.jpg'

const AboutPage = () => {
    return (
        <section className="about">
            <div className="container">
                <PageTitle
                    class='about__title'
                    title='Обо мне'
                />
                <div className="about__content">
                    <div className="about__card">
                        <div className="about__information">
                            <h3 className="about__name">Халилов Ильдар Геннадьевич</h3>
                            <p className="about__education">Образование: <span>Высшее юридическое</span></p>
                            <p className="about__education-institution">Учебное заведение: <span>Самарский государственный университет</span></p>
                            
                            <h3 className="eduication__time-title">Период обучения:</h3>
                            <ul className="about__education-time">                                
                                <li className="education__time">С 2014 по 2018 (Бакалавр)</li>
                                <li className="education__time">С 2018 по 2021 (Магистр)</li>
                            </ul>

                            <h3 className="jobs__experience-title">
                                    Опыт работы:
                            </h3>
                            <ul className="about__jobs">                                
                                <li className="job__information">
                                    <p className="job__place">Место работы: <span>Следственное управление следственного комитета РФ по Самарской области</span></p>
                                    <p className="job__position">Должность: <span>Следователь</span></p>
                                    <p className="job__time">Срок службы: <span>С ноября 2018 по июнь 2019 года</span></p>
                                </li>
                                <li className="job__information">
                                <p className="job__place">Место работы: <span>Железнодорожный районный суд г. Самара</span></p>
                                    <p className="job__position">Должность: <span>Помощник судьи</span></p>
                                    <p className="job__time">Срок службы: <span>С июля 2019 по октябрь 2021</span></p>
                                </li>
                                <li className="job__information">
                                    <p className="job__place">Место работы: <span>ИП Голованов К.П.</span></p>
                                    <p className="job__position">Должность: <span>Юрисконсульт</span></p>
                                    <p className="job__time">Срок службы: <span>С ноября 2021 по настоящее время</span></p>
                                </li>
                            </ul>

                            <h3 className="about__developer-title">Используемые технологии:</h3>
                            <ul className="about__developer-info">    
                                <li className="developer__stack-item">HTML</li>
                                <li className="developer__stack-item">CSS</li>
                                <li className="developer__stack-item">JavaScript</li>
                                <li className="developer__stack-item">TypeScript</li>
                                <li className="developer__stack-item">React</li>
                                <li className="developer__stack-item">Redux</li>
                                <li className="developer__stack-item">Redux-Toolkit</li>
                                <li className="developer__stack-item">React-router-dom</li>
                                <li className="developer__stack-item">Bootstrap</li>
                                <li className="developer__stack-item">SASS/SCSS</li>
                                <li className="developer__stack-item">AJAX</li>
                                <li className="developer__stack-item">async/await</li>
                                <li className="developer__stack-item">Git</li>
                                <li className="developer__stack-item">Figma</li>
                            </ul>
                            <div className="about__github">Мой гитхаб: 
                                <a href="https://github.com/IldarGH02" className="github__link"> https://github.com/IldarGH02</a>
                            </div>
                        </div>
                    </div>
                    <picture className="about__avatar">
                        <img src={avatar} alt="avatar"/>
                    </picture>
                </div>
            </div>
        </section>
    )
}

export { routeMain }

export default AboutPage