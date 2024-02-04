export function Input({placeholder, value , onChange}) {

    return<div>
        <input type="text" 
        className="searchInput" 
        placeholder={placeholder} 
        value={value} 
        onChange={e =>onChange(e.target.value)}
        />
    </div>
}