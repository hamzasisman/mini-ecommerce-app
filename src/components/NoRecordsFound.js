import React from 'react'
import { useLocalization } from '../hooks/useLocalization'

const NoRecordsFound = () => {
    const strings = useLocalization();
    
    return (
        <div className="py-4 min-w-full text-center">{strings.errors.no_records_found}</div>
    )
}

export default NoRecordsFound