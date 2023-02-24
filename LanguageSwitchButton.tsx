import { Button } from '@mui/material'
import { ReactCountryFlag } from 'react-country-flag'
import { useTranslation } from 'react-i18next'

type LanguageSwitchButtonProps = {
  style?: React.CSSProperties
  langs: string[] // array of supported languages codes e.g. ([ 'gb', 'fr' ]}
}

const LanguageSwitchButton = ({ style, langs }: LanguageSwitchButtonProps) => {
  const { t, i18n } = useTranslation() // t() can be used to translate text e.g. ({t(English) --> "Anglais")

  const handleClick = async (lng: string) => {
    await i18n.changeLanguage(lng)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: style?.flexDirection === 'row' ? 'row' : 'column',
      }}
    >
      {langs.map((lang) => (
        <>
          <Button
            style={{ marginBottom: 'auto' }}
            onClick={() => handleClick(lang)}
          >
            <ReactCountryFlag
              countryCode={lang}
              svg
              style={{
                width: style?.width ?? '1.5rem',
                height: style?.height ?? '1.5rem',
              }}
            />
          </Button>
        </>
      ))}
    </div>
  )
}

export default LanguageSwitchButton
