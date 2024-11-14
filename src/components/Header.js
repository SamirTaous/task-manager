import Button from "./Button"

const Header = ({title='Task Tracker'}) => {
  
    const onClick=()=>{
        console.log('click');
    }
  
    return (
    <header className="header">
        <h1>{title}</h1>
        <Button text="Add" color="green" onClick={onClick}/>
    </header>
  )
}


// CSS IN JS
// const headingStyle={
//     color:'blue',backgroundColor:'lightblue'
// }

export default Header