export function CheckBox({onChange, checked ,label}) {

    return <div>
        <input type="checkbox"
         label={label} 
         className="boxChecking "
         checked={checked} 
         onChange={(e) => onChange(e.target.checked)} />
         <label className="labelBox">{label} </label>
    </div>
    
}