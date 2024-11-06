export default function TabButton({children, onSelect,isSelected}) {
    function handleClick() {
        console.log('Button clicked');
    }
    return(
        <li>
            {/* use function as a value so don't use () */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}