export function CheckBox({checked,label,onChange,id}) {

    return<div>
        <input
        id={id}
        type="checkbox"  
        className="CheckBox" 
        checked={checked}  
        onChange={()=>onChange(!checked)} />
        <label htmlFor={id}>
            {label}
        </label>
    </div>
    

}