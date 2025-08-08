function handleClick(){
    console.log("Hello");
}
function handleMouseOver(){
    console.log("Byeee!")
}
function handleDoubleClick(){
    console.log("Double Clicked!!")
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia et perspiciatis commodi quo, esse nisi! Sed, esse! Aperiam eos dolores laudantium quam sit ducimus illo labore dolore modi. Dolor, placeat?</p>
            <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
        </div>
    )

}