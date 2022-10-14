function Button ({children,handleclick}) {
    return (
        <button
        type="button"
        onClick={handleclick}
        >
            {children}
        </button>

    )
}

export default Button;