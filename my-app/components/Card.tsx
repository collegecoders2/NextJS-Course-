type CardProp = {
    name:string,
    desc:string
}

export default function Card({name,desc}:CardProp){
    return(
        <div>
            <h1>{name}</h1>
            <h3>{desc}</h3>
        </div>
    )
}