export function Input ({value,onChange,placeholder}) {
    return<div>
        <input type="text"
         className="searchForm" 
         value={value}
         placeholder={placeholder} 
         onChange={e => onChange(e.target.value)} 
         />
    </div>
}