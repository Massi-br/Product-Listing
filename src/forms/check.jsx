export function CheckBox({checked, onChange, label , id}) {
    
    return<div className="form-check">
        <input id={id} className="form-check-input" type="checkbox" checked={checked} onChange={()=> onChange(!checked)} />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}