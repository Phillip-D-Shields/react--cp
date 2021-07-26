const Article = (props) => {
    return (
        <article className="w-100 w-75-l center pv5 flex justify-around items-center" style={props.containerStyles}>
            <div className="w-25 pa3 tc">
                <span className="f3 db mb3">{props.title}</span>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className="w-75 ph4">
                <p className="mv3">
                    {props.textOne}
                </p>
                <p className="mv3">
                    {props.textTwo}
                </p>
            </div>
        </article>
    )
}

export default Article
