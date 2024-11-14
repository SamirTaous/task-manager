import Button from "./Button"

const Header = ({title='Task Tracker',onAdd,shown}) => {
  
  
    return (
    <header className="header">
        <h1>{title}</h1>
        <Button text={shown? 'Close':'Add'} color={shown ? 'red':'green'} onClick={onAdd}/>
    </header>
  )
}


// CSS IN JS
// const headingStyle={
//     color:'blue',backgroundColor:'lightblue'
// }

export default Header