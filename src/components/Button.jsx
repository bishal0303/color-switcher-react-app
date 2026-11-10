const Button = ({color, bgClr}) => {
    function changeColor(){
        bgClr(color)
    }
  return (
      <button
        className="w-full rounded-lg px-3 py-2 text-base font-semibold capitalize text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
        onClick={changeColor}
        style={{ backgroundColor: color }}
      >
        {color}
      </button>
    )
}

export default Button