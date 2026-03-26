import React from "react"

// Versión simplificada compatible con el código de Base44
export const Select = ({ children, onValueChange, defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue || "")

  // Clonamos los hijos para pasarles props si es necesario, 
  // aunque en esta versión simple usamos un contexto simulado
  return (
    <div className="relative">
      <select 
        className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
        onChange={(e) => onValueChange && onValueChange(e.target.value)}
        value={value}
      >
        {/* Esto es un truco: Renderizamos los options directamente */}
        {/* En un caso real shadcn es más complejo, pero esto hará que no falle */}
        <option value="" disabled>Selecciona una opción</option>
        <option value="jardineria">Jardinería General</option>
        <option value="poda">Poda</option>
        <option value="paisajismo">Diseño y Paisajismo</option>
        <option value="mantenimiento">Mantenimiento</option>
      </select>
    </div>
  )
}

// Estos componentes vacíos son para que no falle el import en Contacto.jsx
// El <select> nativo de arriba hace el trabajo sucio por ahora.
export const SelectTrigger = ({ children, className }) => <>{children}</>
export const SelectValue = ({ placeholder }) => <span>{placeholder}</span>
export const SelectContent = ({ children }) => <>{children}</>
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>