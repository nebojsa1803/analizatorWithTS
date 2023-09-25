type InputProp = {
  inputType: string
  inputName: string
  labelText: string
}

const Input = ({ inputType, inputName, labelText }: InputProp) => {
  return (
    <div className='form-row'>
      <label htmlFor={inputName} className='form-label'>
        {labelText}
      </label>
      <input
        type={inputType}
        className='form-input'
        id={inputName}
        name={inputName}
      />
    </div>
  )
}

export default Input
