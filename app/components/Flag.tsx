
interface IFlag {
    flag? : string
    className ? : string
}

export default function Flag({flag = "AU",className = ""} : Readonly<IFlag>) {
  return (
    <img src={`https://www.untitledui.com/images/flags/${flag}.svg`} className={`size-4 max-w-none ${className}`} alt={`${flag} flag`} />
  )
}
