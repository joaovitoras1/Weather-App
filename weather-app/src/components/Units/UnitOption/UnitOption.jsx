import iconCheckmark from '@/assets/icons/icon-checkmark.svg'

function UnitOption({text, selected, onClick}) {
    return (
        <button onClick={onClick} aria-pressed={selected} className="flex items-center justify-between gap-2 cursor-pointer">{text}{selected && <img src={iconCheckmark} alt="" />}</button>
    )
}

export default UnitOption