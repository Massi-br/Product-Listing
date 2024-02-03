export function CheckBox({onChange, checked ,label ,id}) {

    return <div>
        <input type="checkbox"
         id={id}
         label={label} 
         className="boxChecking "
         checked={checked} 
         onChange={() => onChange(!checked)} />
         <label htmlFor={id} className="labelBox">{label} </label>
    </div>
    
}