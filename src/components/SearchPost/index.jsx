import ButtonUi from "ui/Button"
import Input from "ui/Input"

const SearchPost = (props) => {
    return (
        <div className="posts__search">
            <Input type='text' className='posts__search-input' placeholder='Поиск по названию' onChange={props.handleChange} value={props.value}/>
            <ButtonUi onClick={props.handleClick} className='posts__search-clean' description='X'/>
        </div>
    )
}

export default SearchPost