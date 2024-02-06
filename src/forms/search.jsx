export function Input({value, placeholder, onChange}) {

    return<div className="mb-3 mt-3">
            <input type="text" 
    className="form-control"
    placeholder={placeholder} 
    value={value} 
    onChange={(e) => onChange(e.target.value)} />
    </div>
}