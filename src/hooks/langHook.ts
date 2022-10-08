import { useAppSelector } from '@store/index'
import ctsLang from '@constants/lang'

export default (): (obj: ctsLang) => string => {
  const { lang } = useAppSelector((state) => state.langReducers)
  return (obj: ctsLang) => obj[lang]
}