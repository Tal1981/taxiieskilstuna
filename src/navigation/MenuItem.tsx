import  "@/app/globals.css"

const MenuItem = ({title}:{title:string}) => {

    return <a id="menu" href={"/#"+title}> {title} </a>

}

export default MenuItem;