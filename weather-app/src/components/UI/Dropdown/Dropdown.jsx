function Dropdown({children, className = ''}) {
    return (
        <div className={`bg-Neutral-800 p-2 rounded-lg absolute mt-2 z-10 ${className}`}>{children}</div>
    )
}

export default Dropdown