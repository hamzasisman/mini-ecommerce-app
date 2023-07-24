import { useSelector } from 'react-redux';
import { Local } from "../localizations/Local"
import { English } from "../localizations/English"

export function useLocalization() {
    const language = useSelector(state => state.localizationStore.language);
    
    switch (language) {
        case "en":
            return English
        default:
            return Local
    }
}