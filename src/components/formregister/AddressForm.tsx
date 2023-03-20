import { FormWrapper } from "./FormWrapper";

type AddressData = {
    via: string
    citta: string
    provincia: string
    CAP: string
}
  
type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({via, citta, provincia, CAP, updateFields}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
        <label>Via</label>
        <input type="text" autoFocus required value={via} onChange={e => updateFields({via: e.target.value})}/>
        <label>Citta</label>
        <input type="text" required value={citta} onChange={e => updateFields({citta: e.target.value})} />
        <label>Provincia</label>
        <input type="text" required value={provincia} onChange={e => updateFields({provincia: e.target.value})} />
        <label>CAP</label>
        <input type="text" required value={CAP} onChange={e => updateFields({CAP: e.target.value})} />
    </FormWrapper>
  )
}
