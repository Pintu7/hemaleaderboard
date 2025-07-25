import React, { useEffect, useState, useRef } from 'react'
import { HotTable } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.min.css'

function Classifica() {
  const hotRef = useRef(null)
  const [data, setData] = useState([
    ['Nome', 'Punteggio'],
    ['Mario', 42],
    ['Luigi', 37],
  ])

  useEffect(() => {
    fetch('/api/classifica')
      .then(res => res.json())
      .then(serverData => {
        const formatted = [['Nome', 'Punteggio'], ...serverData]
        setData(formatted)
      })
      .catch(err => {
        console.error('Errore durante il caricamento:', err)
      })
  }, [])

  const handleSave = () => {
    const tableData = hotRef.current.hotInstance.getData()
    const validRows = tableData
      .filter(row =>
        row.length >= 2 &&
        row[0]?.toString().trim() !== '' &&
        !isNaN(parseInt(row[1]))
      )
      .map(row => [row[0].toString().trim(), parseInt(row[1])])

    if (validRows.length === 0) {
      alert('⚠️ Nessun dato valido da salvare')
      return
    }

    fetch('/api/classifica', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validRows)
    })
      .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`)
        return res.json()
      })
      .then(data => {
        console.log('✅ Salvataggio completato:', data)
        alert('Classifica salvata con successo!')
      })
      .catch(err => {
        console.error('❌ Errore durante il salvataggio:', err)
        alert('Errore durante il salvataggio.')
      })
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Classifica</h1>

      <HotTable
        ref={hotRef}
        data={data}
        colHeaders={true}
        rowHeaders={true}
        stretchH="all"
        licenseKey="non-commercial-and-evaluation"
        minSpareRows={1}
      />

      <button onClick={handleSave} style={{ marginTop: 10 }}>
        💾 Salva
      </button>
    </div>
  )
}

export default Classifica

