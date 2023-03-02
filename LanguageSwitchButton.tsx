import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { ReactCountryFlag } from 'react-country-flag'
import { useTranslation } from 'react-i18next'

type LanguageSwitchButtonProps = {
  style?: React.CSSProperties
  langs: string[]
}

const LanguageSwitchButton = ({ style, langs }: LanguageSwitchButtonProps) => {
  const { t, i18n } = useTranslation()

  const handleChange = async (event: SelectChangeEvent<string>) => {
    await i18n.changeLanguage(
      event.target.value === 'gb' ? 'en' : event.target.value
    )
  }

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      sx={{
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            border: 0,
          },
      }}
    >
      {langs.map((lang) => (
        <MenuItem key={lang} value={lang}>
          <ReactCountryFlag
            countryCode={lang}
            svg
            style={{
              width: style?.width ?? '1.5rem',
              height: style?.height ?? '1.5rem',
            }}
          />
        </MenuItem>
      ))}
    </Select>
  )
}

export default LanguageSwitchButton
