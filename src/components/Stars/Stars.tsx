
import Star from "../Star/Star";
import './Stars.css'

interface Props {
    count: number;
}

const Stars = ({ count }: Props) => {
    if(typeof count !== 'number' || count < 1 || count > 5) {
        return null;
    }
    return (
        <ul className="card-body-stars u-clearfix">
            {Array.apply(null, {length: count}).map((e, i) => (
                <li className= "star"key={i}>
                    <Star />
                </li>
            ))}
        </ul>
    )
}

export default Stars;
