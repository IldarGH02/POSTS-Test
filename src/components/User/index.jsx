import UserAvatar from "ui/UserAvatar"

const User = (props) => {
    return (
        <div className="user__card">
            <div className="user__card-content">
                <div className="user__information">
                    <p className="user__name user__data">Имя: <span>{props.name}</span></p>
                    <p className="user__email user__data">Эл.почта: <span>{props.email}</span></p>
                    <p className="user__phone user__data">Телефон: <span>{props.phone}</span></p>
                    <p className="user__website user__data">Сайт: <span>{props.website}</span></p>
                </div>
                <div className="user__address">
                    <p className="user__location user__data">Место жительства: <span>{props.city}, {props.street}, {props.suite}</span></p>
                </div>
                <div className="user__job">
                    <p className="user__company user__data">Место работы: <span>{props.company}</span></p>
                    <p className="user__position user__data">Должность: <span>{props.position}</span></p>
                </div>
            </div>
            <div className="user__photo">
                <UserAvatar className="user__avatar"/>
            </div>
        </div>
    )
}

export default User